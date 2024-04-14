import {useState} from "react";
import {useMediaQuery} from "./utils";
import {Outlet, Link} from "react-router-dom";
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
                        <a
                            href={props.href}
                            style={{flexDirection: "row",}}
                        >
                            <img src="/favicon.svg" width="auto" height="auto" alt="icon" style={{
                                backgroundColor: "white",
                                borderRadius: "15px",
                            }} />
                            {/* <h2 style={{textDecoration: "underline",}}>{props.title}</h2> */}
                        </a>
                        
                        {/* Shows the SVG at the top of the page if the view isn't being shown on a desktop */}
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
                {/* Shows the section if it is a desktop viewing the page or if on mobile the menu is toggled on */}
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
                <hr style={{
                    width: "100%",
                    filter: "brightness(50%)",
                    margin: "0",
                }}/>
                { children }
            </div>
        </>
    );
}

function Footer({ children }) {
    return (
        <footer style={{
            display: "flex",
            justifyContent: "flex-end",
            background: "rgba(0, 0, 0, .2)",
            gap: "15px",
            padding: "15px",
            flex: "0",
        }}>
            <a href="/auth">Login & Signup</a>
            <a>Contact Support</a>
            <a>Want a sticker?</a>
        </footer>
    );
}

function Layout({ children }) {
    let object_style = {
        display: "flex",
        minHeight: "100vh",
    };
    return (
        <div className={"layout"} style={object_style}>
            {/*
            <Sidebar title="Timecard" href="/">
                <SidebarSection title={"Track"}>
                    <Link to="timer">
                        <i className="fa-solid fa-clock"></i>
                        <p>Timer</p>
                    </Link>
                </SidebarSection>
                <SidebarSection title={"Analytics"}>
                    <Link to="reports">
                        <i className="fa-solid fa-newspaper"></i>
                        <p>Reports</p>
                    </Link>
                    <Link to="performance">
                        <i className="fa-solid fa-chart-line"></i>
                        <p>Performance View</p>
                    </Link>
                </SidebarSection>
                <SidebarSection title={"Manage"}>
                    <Link to="projects">
                        <i className="fa-solid fa-list-check"></i>
                        <p>Projects</p>
                    </Link>
                    <Link to="clients">
                        <i className="fa-solid fa-user"></i>
                        <p>Clients</p>
                    </Link>
                    <Link to="rates">
                        <i className="fa-solid fa-cash-register"></i>
                        <p>Billable Rates</p>
                    </Link>
                    <Link to="invoices">
                        <i className="fa-solid fa-file-invoice-dollar"></i>
                        <p>Invoices</p>
                    </Link>
                    <Link to="teams">
                        <i className="fa-solid fa-user-group"></i>
                        <p>Teams</p>
                    </Link>
                    <Link to="tags">
                        <i className="fa-solid fa-tags"></i>
                        <p>Tags</p>
                    </Link>
                </SidebarSection>
                <SidebarSection title={"Extensions"}>
                    <Link to="integrations">
                        <i className="fa-solid fa-link"></i>
                        <p>integrations</p>
                    </Link>
                    <Link to="export">
                        <i className="fa-solid fa-file-export"></i>
                        <p>Export</p>
                    </Link>
                </SidebarSection>
                <SidebarSection title={"Development"}>
                    <Link to="api-test">
                        <i className="fa-solid fa-code"></i>
                        <p>API Test</p>
                    </Link>
                    <Link to="components">
                        <i className="fa-solid fa-cubes-stacked"></i>
                        <p>Components</p>
                    </Link>
                </SidebarSection>
            </Sidebar>
            */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: "1",
                width: "100%",
            }}>
                <div style={{flex: "1",}}>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
