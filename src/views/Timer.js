import {Button} from "../components/buttons";
import {TopBar} from "../components/topBar";

import {Calendar} from "../components/calendar";

function Timer() {

    return (
        <>
            <TopBar title="What are you working on?">
                <Button>Create Project</Button>
                <Button>Tags</Button>
                <Button>Billable</Button>
                <Button>Ajust Duration</Button>
                <Button>Start/Stop</Button>
            </TopBar>
            <Calendar />
        </>
    );
}

export default Timer;
