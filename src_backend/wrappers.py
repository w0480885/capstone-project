from functools import wraps
import traceback
from flask import redirect


def auth(error_redirect: str = "/", success_redirect: str = "/"):
    """
    Funciton wrapper for tests
    """

    def outer(func):
        @wraps(func)
        def inner(*args, **kwargs) -> redirect:
            res = func(*args, **kwargs)
            if type(res) != dict:
                print(f"Error, auth redirect not a dictionary: {res}")
                return redirect(error_redirect)

            if "valid" not in res:
                print(f"Error, valid not in response: {res}")
                return redirect(error_redirect)

            if "redirect" in res:
                return redirect(res["redirect"])

            if res["valid"] == 1:
                return redirect(success_redirect)
            elif res["valid"] == 0:
                return redirect(error_redirect)
            else:
                print(f"Invalid value of 'valid' in response: {res['valid']}")
                return redirect(error_redirect)
        return inner
    return outer
