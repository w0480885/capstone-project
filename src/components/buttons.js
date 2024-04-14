import "./buttons.css";
import { Link } from "react-router-dom";

function Button({children, ...props}) {
	// Set props.href for specifying url
    // Set props.type for button type
    // Set props.onClick for click action

	const color_styles = {
		green: "--diag-ok",
		red: "--diag-error",
		orange: "--diag-warning",
	};

	const button_color = props.color ? color_styles[props.color] : "--text-color";

	const obj_styles = {
		backgroundColor: `var(${button_color})`,
		...props.style,
	};

	return (
		<>
            <a href={props.href}>
				<button
                    type={props.type}
                    onClick={props.onClick}
                    className={"button"}
                    style={obj_styles}
                >
					{children}
				</button>
            </a>
		</>
	);
}

function ButtonContainer({children, ...props}) {
	return (
		<>
			<div style={{ display: "flex", ...props.style, }}>
				<div className="button-container">
					{ children }
				</div>
			</div>
		</>
	);
}

export {Button, ButtonContainer};
