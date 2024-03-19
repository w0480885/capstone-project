import {useState} from "react";

import {Button, ButtonContainer} from "../components/buttons";
import {TopBar} from "../components/topBar";
import {Popup, MinPopup} from "../components/popup.js";

function Projects() {

    const [popupDisplay, setPopupDisplay] = useState(true);

    return (
        <>
            { popupDisplay &&
                <Popup>
                    <div style={{display: "flex", justifyContent: "space-between", margin: "0 7px 15px 7px"}}>
                        <p style={{display: "block", fontWeight: "bold"}}>Title from projects!</p>
                        <a onClick={ () => setPopupDisplay(false) } className="popup-close">&#10006;</a>
                    </div>
                    <p>Woah this is a popup!</p>
                </Popup>
            }
            <TopBar title="Projects">
                <Button>Create Project</Button>
                <Button>Tags</Button>
                <Button>Billable</Button>
                <Button>Ajust Duration</Button>
                <Button>Start/Stop</Button>
            </TopBar>
        </>
    );
}

export default Projects;
