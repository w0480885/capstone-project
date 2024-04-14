from functools import wraps
import traceback
from flask import redirect
from urllib.parse import quote


def auth_res_manager(error_redirect: str = "/", success_redirect: str = "/"):
    """
    Funciton wrapper for authentication endpoints
    This wrapper manages the responces of the endpoints
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
                if "error" not in res:
                    return redirect(res["redirect"])
                return redirect(res["redirect"] + "?message=" + quote(res["error"]))

            if res["valid"] == 1:
                return redirect(success_redirect)
            elif res["valid"] == 0:
                return redirect(error_redirect)
            else:
                print(f"Invalid value of 'valid' in response: {res['valid']}")
                return redirect(error_redirect)

        return inner
    return outer
