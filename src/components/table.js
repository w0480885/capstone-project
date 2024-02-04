import "./table.css";

function Table({ children, ...props }) {
	return (
		<>
			<div className="table" style={{
				margin: props.margin,
				border: "1px solid white",
			}}>
				{children}
			</div>
		</>
	);
}

function TableRow({ children, ...props }) {
	/*
	 * props.href   => the url that the user gets sent to
	 * props.header => sets if the row is the header row of the table
	 * props.bold   => makes the row bold
	 * Setting the `collapsible` class to a sub item makes the value hidden in small screens
	 * */

	return (
		<a
			className={`table-row${props.href ? " table-row-url" : ""}`}
			href={props.href}
			style={{
				borderBottom: `${props.header ? "1px solid var(--text-color)" : "none"}`,
				fontWeight: `${props.bold ? "bold" : "default"}`,
		}}>
			{children}
		</a>
	);
}

export {Table, TableRow};
