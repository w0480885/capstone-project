import {useState, useCallback} from "react";

import {Calendar as RBigCalendar, momentLocalizer} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import moment from "moment";

import "./calendar.css";

const DnDCalendar = withDragAndDrop(RBigCalendar);
const localizer = momentLocalizer(moment)

// This section is going to be replaced with an API call
const events = [
    {
        id: 5,
        title: "An event that is scheduled for today!!",
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
];

const views = {
    "agenda": true,
    "month": true,
    "week": true,
    "day": true,
};

const allowAllDays = false;

function Calendar() {

    const [myEvents, setEvents] = useState(events);

    const moveEvent = useCallback(
        ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
            let allDay = event;

            allDay = droppedOnAllDaySlot && allowAllDays;

            setEvents((prev) => {
                const existing = prev.find((ev) => ev.id === event.id) ?? {};
                const filtered = prev.filter((ev) => ev.id !== event.id);
                return [...filtered, { ...existing, start, end, allDay }];
            })
        },
        [setEvents]
    );

    const resizeEvent = useCallback(
        ({ event, start, end }) => {
            setEvents((prev) => {
                const existing = prev.find((ev) => ev.id === event.id) ?? {};
                const filtered = prev.filter((ev) => ev.id !== event.id);
                return [...filtered, { ...existing, start, end }];
            })
        },
        [setEvents]
    );

    return (
        <>
            <div style={{color: "black",}}>
                <DnDCalendar
                    localizer={localizer}
                    events={myEvents}
                    views={views}

                    onEventDrop={ moveEvent }
                    onEventResize={ resizeEvent }

                    startAccessor="start"
                    endAccessor="end"

                    popup
                    resizeable
                />
            </div>
        </>
    );
}

export {Calendar};
