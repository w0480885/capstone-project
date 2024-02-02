import {Button, ButtonContainer} from "../components/buttons";

function Timer() {

    return (
        <>
			<div style={{
				width: "100%",
				backgroundColor: "var(--syn-constant)",
				display: "flex",
				justifyContent: "space-between",
			}}>
				<h1 style={{
					margin: "15px",
					textShadow: "1px 1px 0px var(--scheme_fg_reverse)",
				}}>What are you working on?</h1>
				<ButtonContainer style={{ margin: "15px", }}>
					<Button>Create Project</Button>
					<Button>Tags</Button>
					<Button>Billable</Button>
					<Button>Ajust Duration</Button>
					<Button>Start/Stop</Button>
				</ButtonContainer>
			</div>
			<p>
				Insert absolutely stunning calendar here
			</p>
		</>
    );
}

export default Timer;
