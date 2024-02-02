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
		// Ensures all the buttons in a button container are the same height
		height: "100%",
		padding: ".75rem",

		// Consider Using white for the text color?
		color: "var(--scheme_fg_reverse)",
		fontWeight: "bold",
		backgroundColor: `var(${button_color})`,

		border: "none",
		borderRadius: "2px",
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
				<div style={{
					display: "flex",
					flexShrink: "2",
					gap: "1px",
					overflow: "hidden",
					borderRadius: "999999px",
					minWidth: "0px",
				}}>
					{ children }
				</div>
			</div>
		</>
	);
}

export {Button, ButtonContainer};
