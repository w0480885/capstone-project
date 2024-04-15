import { Outlet, Link, useSearchParams } from "react-router-dom";
import {useState} from "react";
import {Button} from "./components/buttons";

function AuthCard({ children, ...props }) {
    return (
        <div style={{
            display: "flex",

            flex: "1",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
        }}>
            <div style={{
                position: "absolute",
                top: "40%",
                transform: "translateY(-50%)",

                border: "1px solid var(--text-color)",
                borderRadius: "15px",
                boxShadow: "1px 1px 5px 0px rgba(255, 255, 255, .5)",

                backgroundColor: "rgba(0, 0, 0, 0.6)",

                width: "200px",
                padding: "15px",
            }}>
                <h1 style={{margin: "0"}}>{props.title}</h1>
                {props.alt}
                <hr style={{margin: "20px 0"}} />

                {/* Form submission data can be formatted here */}
                <form method="POST" action={props.url}>
                    {children}
                    <Button
                        href=""
                        style={{margin: "25px 0 0 0"}}
                        type="submit"
                    >Submit!</Button>
                </form>
            </div>
        </div>
    );
}

function AuthLayout({ children }) {
    const [parameters] = useSearchParams()
    const [display, setDisplay] = useState(parameters.size !== 0)

    return (
        <>
            { display &&
                <div style={{
                    display: "flex",
                    alignItems: "center",

                    position: "fixed",
                    top: "15px",
                    right: "0px",

                    backgroundColor: "lightblue",
                    color: "red",

                    padding: "15px 15px",
                    margin: "0",
                }}>
                    <button style={{
                        color: "black",
                        background: "none",
                        border: "none",
                        fontSize: "1.05rem",
                    }}
                    onClick={() => setDisplay(false)}
                    >&#10005;</button>
                    <p style={{
                        padding: "0",
                        margin: "0",
                        color: "black",
                    }}>
                    {parameters.get("message")}</p>
                </div>
            }
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "space-between",
                minHeight: "100vh",
            }}>
                <div style={{flex: "1",}}>
                    <Outlet />
                </div>
                <footer style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    background: "rgba(0, 0, 0, .2)",
                    gap: "15px",
                    padding: "15px",
                    flex: "0",
                }}>
                    <a>Forgot your password?</a>
                    <a>Contact Support</a>
                    <a>Want a sticker?</a>
                </footer>
            </div>
        </>
    );
}

function Login() {
    return (
        <AuthCard
            title="Login"
            alt={<a href="signup">Signup</a>}
            url="/api/auth/login"
        >
            <input name="email" type="text" placeholder="Enter Email" />
            <input name="password" type="password" placeholder="Enter Password" />
            <label htmlFor="remember">Remember me</label>
            <input id="remember" type="checkbox" defaultChecked />
            <br />
        </AuthCard>
    );
}

function Signup() {
    return (
        <AuthCard
            title="Signup"
            alt={<a href="login">Login</a>}
            url="/api/auth/signup"
        >
            <input name="email" type="text" placeholder="Enter Email" />
            <input name="username" type="text" placeholder="Enter Username" />
            <input name="password" type="password" placeholder="Enter Password" />
            <input name="password2" type="password" placeholder="Re-enter password" />
            <label htmlFor="remember">Remember me</label>
            <input id="remember" type="checkbox" defaultChecked />
            <br />
        </AuthCard>
    );
}

export {Login, Signup, AuthLayout};
