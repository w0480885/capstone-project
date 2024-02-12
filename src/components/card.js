import "./card.css";

function Card({children, ...props}) {
    // Use props.style to set the css of the component
    // Use props.href to set where to link the card to

    return (
        <>
            <a className={"card"} style={props.style} href={props.href}>
                {children}
            </a>
        </>
    );
}

function CardContainer({children}) {
    return (
        <>
            <div className={"card-container"} style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                flexWrap: "wrap",
            }}>
                {children}
            </div>
        </>
    );
}

export {Card, CardContainer};