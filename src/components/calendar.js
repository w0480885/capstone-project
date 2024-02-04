import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

function Calendar() {

	return (
		<>
			<div style={{color: "black"}}>
				<ReactCalendar />
			</div>
		</>
	);
}

export {Calendar};
