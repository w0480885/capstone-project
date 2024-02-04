import {Button, ButtonContainer} from "../components/buttons";
import {Calendar} from "../components/calendar";

function Timer() {

    return (
        <>
			<div style={{
				width: "100%",
				backgroundColor: "var(--syn-special1)",
				display: "flex",
				justifyContent: "space-between",
			}}>
				<h1 style={{
					margin: "15px",
					color: "white",
				}}>What are you working on?</h1>
				<ButtonContainer style={{ margin: "15px", }}>
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
