import { Button } from "../components/buttons";

function Home() {
    return (
        <>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                width: "50vw",
                height: "auto",
                margin: "250px auto",
                padding: "15px",
                borderRadius: "5px",
                overflow: "hidden",
                gap: "15px",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                boxShadow: "1px 1px 5px 0 white",
                justifyContent: "space-around",
            }}>
                <h1>Time Card</h1>
                <hr />
                <p>
                    The most fantastic timing web app that has nothing at all to do with <a href="https://toggl.com/" target="_blank">toggl.com</a>!
                </p>
                <div style={{
                    display: "flex",
                    gap: "15px",
                }}>
                    <Button href="timer">Timer</Button>
                    <Button href="auth/login">Login</Button>
                </div>

            </div>
        </>
    );
}

export default Home;
