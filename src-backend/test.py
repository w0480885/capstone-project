#!/usr/bin/env python3

import tests
import sys


@tests.wrappers.test(__name__)
def pass_tst():
    assert True


@tests.wrappers.test(__name__)
def fail():
    assert False
    

@tests.wrappers.test(__name__)
def pass_tst2():
    assert True


@tests.wrappers.test(__name__)
def pass_tst3():
    assert True


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
            print(f"\tThrew: {res[1]}")
            
    print("\x1b[2K", end="\r")  # Magically clears a line

    print(f"Failed [ {failed_tests} / {len(iterator)} ]")




if __name__ == "__main__":
    run_tests()
