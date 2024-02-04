import "./card.css";

function Card({children, ...props}) {
    return (
        <>
            <a className={"card"} href={props.href}>
                <div>
                    <h1>{props.title}</h1>
                    <hr />
                    <h2>{props.description}</h2>
                </div>
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
