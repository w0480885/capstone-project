import {useState, useCallback} from "react";
import {Popup} from "../components/popup";

import {Calendar as RBigCalendar, Views, momentLocalizer} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

import moment from "moment";

import "./calendar.css";
import { Button } from "./buttons";

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

const allowAllDays = true;

function Calendar() {

    const [myEvents, setEvents] = useState(events);
    const [popupDisplay, setPopupDisplay] = useState(false);

    const getModal = () => {
            return (
                <>
                    { popupDisplay &&
                        <Popup>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                margin: "0 7px 15px 7px",
                                flex: "0",
                            }}>
                                <p style={{display: "block", fontWeight: "bold"}}>Add an Event!</p>
                                <a onClick={ () => setPopupDisplay(false) } className="popup-close">&#10006;</a>
                            </div>
                            <form style={{
                                display: "flex",
                                flex: "1",
                                flexDirection: "column",
                                gap: "5px",
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: "1",
                                }}>
                                    <input type="text" placeholder="Title" />
                                    <input type="text" placeholder="Another Thing" />
                                    <input type="text" placeholder="Woah Even more things" />
                                    <input type="text" placeholder="I can't even believe the amount of things" />
                                    <input type="text" placeholder="T'is crazy" />
                                </div>
                                <Button style={{width: "100%",}}>Submit</Button>
                            </form>
                        </Popup>
                    }
                </>
            );
    }
    
    const newEvent = useCallback(
        (event) => {
            setPopupDisplay(true);
            setEvents((prev) => {
                const idList = prev.map((item) => item.id);
                const newId = Math.max(...idList) + 1;
                return [ ...prev, { ...event, id: newId } ];
            });
        },
        [setEvents]
    );

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
                    events={myEvents}
                    defaultView={Views.WEEK}

                    views={views}

                    onEventDrop={ moveEvent }
                    onEventResize={ resizeEvent }
                    onSelectSlot={ newEvent }

                    localizer={localizer}
                    defaultDate={new Date()}
                    startAccessor="start"
                    endAccessor="end"

                    popup
                    resizeable
                    selectable
                />
            </div>
            { getModal() }
        </>
    );
}

export {Calendar};
