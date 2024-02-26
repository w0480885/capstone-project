import "./popup.css";
import {useState} from "react";

function Popup({ children, ...props}) {
    /* props.title sets what the title of the popup is
    *  props.show sets the visibiliy of the popup
    */

    return (
        <div className="popup">
            {/* Darkens the background */}
            <div style={{position: "fixed", overflowY: "auto", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)"}}></div>

            {/* Sets the popup element */}
            <div className="popup-frame">
                { children }
            </div>
        </div>
    );
}

export {Popup};