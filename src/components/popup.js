import "./popup.css";

function Popup({ children, ...props}) {
    return (
        <>
            {/* Darkens the background */}
            <div style={{position: "fixed", overflowY: "auto", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)"}}></div>

            {/* Sets the popup element */}
            <div className="popup">
                <div style={{display: "flex", justifyContent: "space-between", width: "auto", margin: "0 7px"}}>
                    <p style={{display: "block", fontWeight: "bold"}}>Title thing</p>
                    <a onClick={() => {alert("Close the thing!")}} className="popup-close">&#10006;</a>
                </div>
                <hr />
                { children }
            </div>
        </>
    );
}
export {Popup};