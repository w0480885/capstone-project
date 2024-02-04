import "./buttons.css";

function Button({children, ...props}) {
	// Set props.href for specifying url

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
				<button onClick={props.onClick} className={"button"} style={obj_styles}>
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
