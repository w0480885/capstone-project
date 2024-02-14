import {Calendar as RBigCalendar, momentLocalizer} from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./calendar.css";

const DnDCalendar = withDragAndDrop(RBigCalendar);
const localizer = momentLocalizer(moment)

// This section is going to be replaced with an API call
const events = [
    {
        title: "An event that is scheduled for today!!",
        start: moment(),
        end: moment().add(5, "hours"),
        allDay: true, // This needs to be set or else the "work week" section breaks
    },
];

const views = {
    "month": true,
    "work_week": true,
    "agenda": true,
};

function Calendar() {
	return (
		<>
			<div style={{color: "black",}}>
				<DnDCalendar
					localizer={localizer}
                    events={events}
                    views={views}
					draggableAccessor={ (e) => true }
					startAccessor="start"
					endAccessor="end"
				/>
			</div>
		</>
	);
}

export {Calendar};
