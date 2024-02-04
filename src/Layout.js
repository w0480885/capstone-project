import {useState} from "react";
import {useMediaQuery} from "./utils";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Sidebar({ children, ...props }) {
    // props.title is the title of the sidebar (text at the top)

    const [show_list, set_show_list] = useState(false);
    const is_desktop = useMediaQuery("(min-width: 800px)");

    return (
        <>
            <div className={"sidebar"}>
                <div style={{
                    padding: "5px 15px",
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "8px",
                    }}>
                        <a href={props.href}><h2 style={{textDecoration: "underline",}}>{props.title}</h2></a>
                        
                        { !is_desktop ? 
                            <button style={{backgroundColor: "transparent", border: "none"}} onClick={() => {set_show_list(!show_list);}}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="50"
                                    width="50"
                                    viewBox="0 0 100 100"
                                    style={{
                                        stroke: "var(--text-color)",
                                        strokeWidth: "15",
                                        strokeLinecap: "round",
                                    }}
                                    >
                                    <path d="M 7.5,15 H 92.5" />
                                    <path d="M 7.5,50 H 92.5" />
                                    <path d="M 7.5,85 H 92.5" />
                                </svg>
                            </button>
                            : null
                        }
                    </div>

                    { (is_desktop || show_list) ? children : null }
                </div>
                { (is_desktop || show_list) ?
                    <div className={"settings"}>
                        <p>settings</p>
                    </div>
                    : null }
            </div>
        </>
    );
}

function SidebarSection({ children, ...props }) {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <h2 style={{
                    marginBottom: "0", 
                }}>{props.title}</h2>
                { children }
            </div>
        </>
    );
}

function Layout({ children }) {
    let object_style = {
        display: "flex",
        minHeight: "100vh",
    };
    return (
        <div className={"layout"} style={object_style}>
            <Sidebar title="Timecard" href="/">
                <SidebarSection title={"Track"}>
                    <Link to="timer">Timer</Link>
                </SidebarSection>
                <SidebarSection title={"Analytics"}>
                    <Link to="/reports">Reports</Link>
                    <Link to="#">Performance View</Link>
                    <Link to="#">Invoices</Link>
                </SidebarSection>
                <SidebarSection title={"Manage"}>
                    <Link to="#">Projects</Link>
                    <Link to="#">Clients</Link>
                    <Link to="#">Billable Rates</Link>
                    <Link to="#">Invoices</Link>
                    <Link to="#">Teams</Link>
                    <Link to="#">Tags</Link>
                </SidebarSection>
                <SidebarSection title={"Extensions"}>
                    <Link to="#">Integrations</Link>
                    <Link to="#">Export</Link>
                </SidebarSection>
                <SidebarSection title={"Development"}>
                    <Link to="api-test">API Test</Link>
                    <Link to="components">Components</Link>
                </SidebarSection>
            </Sidebar>
            <div style={{width: "100%"}}>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
