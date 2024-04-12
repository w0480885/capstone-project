#!/usr/bin/env python3

"""
file for testing the endpoints of the app


os.environ["DOMAIN"] MUST START WITH http:// OR https://
"""


from .wrappers import test

import threading
import os
import lxml
from requests import get
import warnings


class testing_endpoint_thread(threading.Thread):
    """
    Class for testing an endpoint of a website
    checks each endpoint for a 200 response code

    """
    def __init__(self, *args, **kwargs):
        try:
            self.endpoint = kwargs["endpoint"]
        except KeyError as e:
            raise ValueError("endpoint not supplied! You must pass testing_endpoint_thread(endpoint = `value`)")
        del kwargs["endpoint"]
        kwargs["target"] = self.run
        self.endpoints_refed = set()
        super().__init__(*args, **kwargs)


    def test_endpoint(self):
        """
        Function for testing and individal endpoint (looking for 200 response)
        """

        def check_used_endpoints(string) -> list:
            """
            Checks the values of the html for endpoints that it referenced
            """

            """
            src
            href
            """

            import lxml.html

            tree = lxml.html.fromstring(string)
            href_links = tree.xpath('//*/@href')
            src_links = tree.xpath('//*/@src')

            return [*href_links, *src_links]

        response = get(self.endpoint)
        if response.status_code != 200:
            raise ConnectionError(f"Endpoint : [ {self.endpoint} ] not found! {response.status_code}")
        for new_endpoint in check_used_endpoints(response.text):
            self.endpoints_refed.add(new_endpoint)

    def run(self):
        """
        Main function to run to initialized the thread
        """
        if self.endpoint is None:
            raise ValueError("Value [ self.endpoint ] must be set!")
        self.exec = None
        try:
            self.test_endpoint()
        except Exception as e:
            self.exec = e # Sets error to exec if one is thrown

    def join(self):
        """
        Overloading join function to return errors
        Returns:
            Error:
                Returns an error if the thread threw an error
            Set:
                Returns a set if everything went properly
        """

        threading.Thread.join(self)

        # Raises Error if the thread errored
        if self.exec:
            raise self.exec
        return self.endpoints_refed # returns set of all endpoints found

@test(__name__)
def check_endpoints_from_file():
    """
    Function for checking if the endpoints
    from the endpoints.txt file are up
    """

    def check_with_threads(endpoints: list, amnt: int = None, default_amnt: int = 2) -> set:
        """
        Makes Threads to check endpoint list
        Returns list of values found at each endpoint
        """

        if amnt is None:
            amnt = default_amnt

        # Sets Base Case
        if amnt == 0:
            return True

        # Sets and local endpoint to have the domain name with it
        for i, endpoint in enumerate(endpoints):
            valid_starts = [ "http", "https" ]
            if endpoint.split(":")[0] not in valid_starts:
                if not endpoint.startswith("/"):
                    endpoint = "/" + endpoint
                if amnt == default_amnt:
                    raise Exception(f"Endpoint '{endpoint}' doesn't start with http:// or https://. (does environ[\"DOMAIN\"] start with http:// or https://?)")
                endpoints[i] = os.environ["DOMAIN"] + endpoint

        # Sets up threading to test endpoints
        threads = [] # Initializes threads list

        # Goes through each endpoint
        for endpoint in endpoints:
            x = testing_endpoint_thread(endpoint=endpoint)
            # x = threading.Thread(target=test_endpoint, args=(endpoint,))
            threads.append(x) # Adds the thread testing the endpoint to the list
            x.start() # Starts the thread

        # Waits for each thread to finish
        endpoints_refed = set()
        for thread in threads: # Goes through each thread to close
            for value in thread.join(): # Gets each returned value and adds the the refed list
                illegals = [ "mailto" ]
                if value.split(":")[0] not in illegals:
                    endpoints_refed.add(value)
        del threads

        endpoints_refed = list(endpoints_refed)

        return check_with_threads(endpoints_refed, amnt = amnt - 1)

    # Gets the endpoint values from a file
    with open("endpoints.txt", "r") as f:
        endpoints = f.read().split("\n")
        endpoints = [ os.environ["DOMAIN"] + i for i in endpoints ] # Adds Domain to all endpoints

    # Gets every reference from the pages
    check_with_threads(endpoints = endpoints, amnt = 2)

    return True
