import "./table.css";

function Table({ children }) {
	return (
		<>
			<div className="table">
				{children}
			</div>
		</>
	);
}

function TableRow({ children }) {
	return (
		<>
			<div className="table-row">
				{children}
			</div>
		</>
	);
}

export {Table, TableRow};
