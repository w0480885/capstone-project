function Button({children, ...props}) {

	const color_styles = {
		green: "--diag-ok",
		red: "--diag-error",
		orange: "--diag-warning",
	};

	const button_color = props.color ? color_styles[props.color] : "--text-color";

	const obj_styles = {
		padding: ".75rem",

		color: "var(--scheme_fg_reverse)",

		border: "none",
		borderRadius: "5px",

		backgroundColor: `var(${button_color})`,
	};

	return (
		<>
			<button style={obj_styles}>
				{children}
			</button>
		</>
	);
}

function ButtonContainer({children, ...props}) {
	return (
		<>
			<div style={{ display: "flex", }}>
				<div style={{
					display: "flex",
					flexShrink: "2",
					gap: "1px",
					overflow: "hidden",
					borderRadius: "15px",
					minWidth: "0px",
				}}>
					{ children }
				</div>
			</div>
		</>
	);
}

export {Button, ButtonContainer};