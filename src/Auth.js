import { Outlet, Link } from "react-router-dom";
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

                width: "200px",
                padding: "15px",
            }}>
                <h1 style={{margin: "0"}}>{props.title}</h1>
                {props.alt}
                <hr style={{margin: "20px 0"}} />

                {/* Form submission data can be formatted here */}
                <form action="/">
                    {children}
                    <Button
                        type="submit"
                        style={{margin: "25px 0 0 0"}}
                    >Submit!</Button>
                </form>
            </div>
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
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
  
      const response = await fetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username: data.get('username'),
          password: data.get('password'),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log("Logged in successfully");
        // Redirect user or update UI
      } else {
        console.error("Failed to log in");
        // Show error message
      }
    };
  
    return (
      <AuthCard title="Login">
        <form onSubmit={handleSubmit}>
          <input name="username" placeholder="Enter Email/Username" required />
          <input name="password" type="password" placeholder="Enter Password" required />
          <button type="submit">Login</button>
        </form>
      </AuthCard>
    );
  }
  

function Signup() {
    return (
        <AuthCard
            title="Signup"
            alt={<a href="login">Signup</a>}
        >
            <input placeholder="Enter Email" />
            <input placeholder="Enter Username" />
            <input placeholder="Enter Password" />
        </AuthCard>
    );
}

export {Login, Signup, AuthLayout};
