import {Button, ButtonContainer} from "../components/buttons";
import {Calendar} from "../components/calendar";

import "./Timer.css";

function Timer() {

    return (
        <>
			<div className="timer-header-bar" style={{
			}}>
				<h1 style={{
					margin: "15px",
					color: "white",
				}}>What are you working on?</h1>
				<ButtonContainer className="header-bar-buttons" style={{ margin: "15px", }}>
					<Button>Create Project</Button>
					<Button>Tags</Button>
					<Button>Billable</Button>
					<Button>Ajust Duration</Button>
					<Button>Start/Stop</Button>
				</ButtonContainer>
			</div>
			<Calendar />
		</>
    );
}

export default Timer;
