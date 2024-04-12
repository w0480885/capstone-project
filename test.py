#!/usr/bin/env python3

from src_backend import tests

import sys
import os


def run_tests():
    print("Starting Tests")

    iterator = list(enumerate(tests.wrappers.TEST_DICT.items()))
    failed_tests: int = 0

    for i, (k, func) in iterator:
        res = func()
        if res[0] == tests.structs.TestResult.PASS:
            print(f"PASSED TEST [ {i + 1} / {len(iterator)} ]", end="\r")
        else:
            failed_tests += 1
            print(f"ERROR AT TEST [ {i + 1} / {len(iterator)} ] in module {k}")
            print(res[1])
            
    print("\x1b[2K", end="\r")  # Magically clears a line

    print(f"Failed [ {failed_tests} / {len(iterator)} ]")
    print("\n\tFINSHED TESTING\n\n")


if __name__ == "__main__":
    os.environ["DOMAIN"] = "http://localhost:3001"
    run_tests()
