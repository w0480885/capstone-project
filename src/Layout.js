import { Outlet, Link } from "react-router-dom";

function Sidebar({ children }) {
    let object_style = {
        backgroundColor: "rgba(0, 0, 0, .2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "200px",
    };
    let settings_style = {
        backgroundColor: "rgba(0, 0, 0, .4)",
        padding: "15px",
    };
    return (
        <div style={object_style}>
            <div style={{
                padding: "15px",
                display: "flex",
                flexDirection: "column",
            }}>
                { children }
            </div>
            <div style={settings_style}>
                <p>settings</p>
            </div>
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
                <h1 style={{ textDecoration: "underline" }}>Timecard</h1>
                <Link to="/">Home</Link>
                <Link to="timer">Timer</Link>
                <Link to="api-test">API Test</Link>
                <Link to="components">Components</Link>
            </Sidebar>
            <div style={{margin: "15px"}}>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
