import "./popup.css";
import {useState} from "react";

function Popup({ children, ...props}) {
    /* props.title sets what the title of the popup is */

    const [popupDisplay, setPopupDisplay] = useState("default");

    function delete_self(e) {
        setPopupDisplay("none");
    }

    return (
        <div className="popup" style={{display: popupDisplay}}>
            {/* Darkens the background */}
            <div style={{position: "fixed", overflowY: "auto", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)"}}></div>

            {/* Sets the popup element */}
            <div className="popup-frame">
                <div style={{display: "flex", justifyContent: "space-between", width: "auto", margin: "0 7px"}}>
                    <p style={{display: "block", fontWeight: "bold"}}>{ props.title }</p>
                    <a onClick={ (e) => delete_self(e) } className="popup-close">&#10006;</a>
                </div>
                <hr />
                { children }
            </div>
        </div>
    );
}
export {Popup};