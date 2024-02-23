import "./popup.css";

function Popup({ chldren, ...props}) {
    return (
        <>
            <div className="popup">
                <p>This is a popup</p>
            </div>
        </>
    );
}

export {Popup};