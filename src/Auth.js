import { Outlet, Link } from "react-router-dom";
import {Button} from "./components/buttons";

function AuthCard({ children, ...props }) {
    return (
        <div style={{
            flexDirection: "column",
            alignContent: "center",
            border: "1px solid var(--text-color)",
            borderRadius: "15px",
            padding: "15px",
            margin: "0 auto",
            boxShadow: "1px 1px 5px 0px rgba(255, 255, 255, .5)",
            width: "200px",
        }}>
            <h1>{props.title}</h1>
            <hr />

            {/* Form submission data can be formatted here */}
            <form>
                {children}
                <div style={{height: "2em"}}></div>
                <Button type="submit">Submit!</Button>
            </form>
        </div>
    );
}

function AuthLayout({ children }) {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "space-between",
                minHeight: "100vh",
            }}>
                <div style={{flex: "1",}}>
                    <div style={{
                        margin: "25px",
                    }}>
                        <Link to="login">Login!</Link>
                        <br />
                        <Link to="signup">Signup!</Link>
                    </div>
                    <hr />
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
        <AuthCard title="Login">
            <input placeholder="Enter Email/Username" />
            <input placeholder="Enter Password" />
        </AuthCard>
    );
}

function Signup() {
    return (
        <AuthCard title="Signup">
            <input placeholder="Enter Email" />
            <input placeholder="Enter Username" />
            <input placeholder="Enter Password" />
        </AuthCard>
    );
}

export {Login, Signup, AuthLayout};
