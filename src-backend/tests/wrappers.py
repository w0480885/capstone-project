#!/usr/bin/env python3

from .structs import TestResult
from functools import wraps


def test(module: str = None):
    """
    Funciton wrapper for tests
    """

    if module is None:
        raise Exception(f"value: [module] must be set for wrapper! (Can't be {module}")

    def outer(func):
        @wraps(func)
        def inner(*args, **kwargs) -> (TestResult, object):
            try:
                res = func(*args, **kwargs)
                return (TestResult.PASS, res)
            except Exception as e:
                return (TestResult.FAIL, e.__repr__())


        func_path = f"{module}.{func.__name__}()"
        TEST_DICT[func_path] = inner
        return inner
    return outer


TEST_DICT = dict()
