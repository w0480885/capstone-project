import {useState, useEffect, useCallback} from "react";
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

const views = {
    "agenda": true,
    "month": true,
    "week": true,
    "day": true,
};

const allowAllDays = true;

function Calendar() {

    const [myEvents, setEvents] = useState([]);

    useEffect(() => {
        fetch("/api/events")
            .then(res => res.json())
            .then(data => {
                data = data.map((row) => {
                    row.start = new Date(row.start * 1000)
                    row.end = new Date(row.end * 1000)
                    return row
                })
                setEvents(data)
            });
    }, [])

    const [popupDisplay, setPopupDisplay] = useState(false);

    const getModal = () => {
            return (
                <>
                    {console.log(myEvents)}
                    <div style={{display: popupDisplay ? "block": "none"}}>
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
                            <form onSubmit={
                                (e) => {
                                    e.preventDefault()
                                    fetch("/api/events", {
                                        method: "POST",
                                        body: new URLSearchParams(new FormData(document.querySelector("form"))),
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            data = data.map((row) => {
                                                row.start = new Date(row.start * 1000)
                                                row.end = new Date(row.end * 1000)
                                                return row
                                            })
                                            setEvents(data)
                                        })
                                        .then(() => setPopupDisplay(false))
                                }}
                                style={{
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
                                    <input name="description" type="text" placeholder="Description" />
                                    <input name="category" type="text" placeholder="Category (Optional)" />
                                    <input name="tag" type="text" placeholder="Tag (Optional)" />
                                    <div>
                                        <input type="checkbox" name="billable" id="billable" />
                                        <label htmlFor="billable"><i className="fa-solid fa-money-bill"></i> Billable</label>
                                    </div>
                                    {myEvents.length !== 0 &&
                                        <>
                                            <input name="data-start" type="hidden" value={myEvents[myEvents.length - 1].start.getTime()} />
                                            <input name="data-end" type="hidden" value={myEvents[myEvents.length - 1].end.getTime()} />
                                        </>
                                    }
                                </div>
                                <Button style={{width: "100%",}}>Submit</Button>
                            </form>
                        </Popup>
                    </div>
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
