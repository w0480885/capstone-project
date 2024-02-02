import {useState, useMemo} from "react";
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
						<h1 style={{ textDecoration: "underline", margin: "0px" }}>{props.title}</h1>
						
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

function Layout({ children }) {
    let object_style = {
        display: "flex",
        minHeight: "100vh",
    };
    return (
        <div className={"layout"} style={object_style}>
            <Sidebar title="Timecard">
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
