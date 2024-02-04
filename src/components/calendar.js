
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
			<div style={{color: "black",}}>
				<DnDCalendar
					localizer={localizer}
					draggableAccessor={ (e) => true }
					startAccessor="start"
					endAccessor="end"
				/>
			</div>
		</>
	);
}

export {Calendar};
