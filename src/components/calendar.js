
import {Calendar as RBigCalendar, momentLocalizer} from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./calendar.css";

const DnDCalendar = withDragAndDrop(RBigCalendar);
const localizer = momentLocalizer(moment)

function Calendar() {
	return (
		<>
			<h1>React Big Calendar</h1>
			<h6>This is the same calendar library from the actual toggl website.</h6>
			<div style={{color: "black",}}>
				<DnDCalendar
					localizer={localizer}
					startAccessor="start"
					endAccessor="end"
					draggableAccessor={ (e) => true }
				/>
			</div>
		</>
	);
}

export {Calendar};
