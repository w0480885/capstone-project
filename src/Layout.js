import {useState} from "react";
import {useMediaQuery} from "./utils";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import {Button, ButtonContainer} from "./components/buttons";

function Sidebar({ children, ...props }) {
	// props.title is the title of the sidebar (text at the top)

	const [show_list, set_show_list] = useState(false);
	const is_desktop = useMediaQuery("(min-width: 800px)");

    return (
		<>
			<div className={"sidebar"}>
				<div style={{
					padding: "15px",
					display: "flex",
					flexDirection: "column",
				}}>
					<div style={{
						display: "flex",
						justifyContent: "space-between",
						margin: "1em",
					}}>
						<a href={props.href}><h2 style={{textDecoration: "underline",}}>{props.title}</h2></a>
						
						{ !is_desktop ? 
							<ButtonContainer>
								<Button onClick={() => {set_show_list(!show_list);}}>
									Show Items
								</Button>
							</ButtonContainer>
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
					<Link to="#">Performance View</Link>
					<Link to="#">More stats</Link>
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
