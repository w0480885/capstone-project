import {ButtonContainer} from "../components/buttons";
import "./topBar.css";

function TopBar({children, ...props}) {
    // props.title sets the main text of the bar
    return (
        <div className="top-bar">

            <h1 style={{
                margin: "15px",
                color: "white",
            }}>{props.title}</h1>

            <ButtonContainer className="header-bar-buttons" style={{ margin: "15px", }}>
                {children}
            </ButtonContainer>
        </div>
    );
}

export {TopBar};
