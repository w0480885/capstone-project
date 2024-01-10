import { Outlet, Link } from "react-router-dom";

function Sidebar({ children }) {
    let object_style = {
        backgroundColor: "rgba(0, 0, 0, .2)",
        display: "flex",
        flexDirection: "column",
        padding: "15px",
    };
    return (
        <div style={object_style}>
            { children }
        </div>
    );
}

function Layout({ children }) {
    let object_style = {
        display: "flex",
        minHeight: "100vh",
    };
    return (
        <div style={object_style}>
            <Sidebar>
                <h1>sidebar</h1>
                <Link to="/">Home</Link>
                <Link to="timer">Timer</Link>
                <Link to="#">test option</Link>
                <Link to="#">test option</Link>
                <Link to="#">test option</Link>
            </Sidebar>
            <div style={{margin: "15px"}}>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;