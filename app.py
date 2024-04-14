#!/usr/bin/env python3

from src_backend import init_app

app = init_app()

if __name__ == "__main__":
    app.run("0.0.0.0", port=3001, debug=True)
