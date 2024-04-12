from enum import Enum


class TestResult(Enum):
    """
    Enum for the results of the tests
    """

    def __repr__(self):
        if type(self) == str:
            return str
        return f"<{self.__class__.__name__}.{self.__name__}>"

    PASS = object()
    FAIL = object()
