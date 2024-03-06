import "./popup.css";
import {useState} from "react";

import {Button} from "./buttons";
import {TopBar} from "./topBar";

function Popup({ children, ...props}) {
    /* props.title sets what the title of the popup is
    *  props.show sets the visibiliy of the popup
    */

    return (
        <div className="popup">
            {/* Darkens the background */}
            <div style={{
                position: "fixed",
                overflowY: "auto",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0",
                backgroundColor: "rgba(0, 0, 0, 0.5)"
            }}></div>


            {/* Sets the popup element */}
            <div className="popup-frame">
                { children }
            </div>
        </div>
    );
}

function MinPopup({ children, ...props }) {

    /*
    * Use props.label to set what the button associated with showing the rest of the component looks like
    */

    return (
        <>
            <TopBar>
                <div className="min-popup">
                    <Button>{ props.label }</Button>
                    <div className="min-popup-out">
                        { children }
                    </div>
                </div>
                <div className="min-popup">
                    <Button>{ props.label }</Button>
                    <div className="min-popup-out">
                        { children }
                    </div>
                </div>
            </TopBar>
        </>
    );
}

export {Popup, MinPopup};