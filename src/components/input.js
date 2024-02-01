function TextInput({children, ...props}) {

    const obj_styles = {
        padding: ".75rem",
        backgroundColor: "var(--text-color)",
        color: "var(--scheme_bg)",
    };

    return (
        <>
            <input
                style={obj_styles}
                type={"text"}
                for={props.for}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
            />
        </>
    );    
}

function Radio({children, ...props}) {

    const obj_styles = {};

    return (
        <>
            <input
                style={obj_styles}
                type={"radio"}
                for={props.for}
                name={props.name}
                value={props.value}
            />
        </>
    );

}

export {TextInput, Radio};