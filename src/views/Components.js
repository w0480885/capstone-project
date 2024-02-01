
import {Button, ButtonContainer} from "../components/buttons";

function Components() {

    return (
        <>
            <h1>Components Section!</h1>
            <hr />

            <h1>ButtonContainer & Button</h1>
			<ButtonContainer>
				<Button color="green">Other Option</Button>
				<Button color="green">Billable</Button>
				<Button color="green">Start/Stop</Button>
			</ButtonContainer>
			<ButtonContainer>
				<Button color="orange">Other Option</Button>
				<Button color="orange">Billable</Button>
				<Button color="orange">Start/Stop</Button>
			</ButtonContainer>
			<ButtonContainer>
				<Button color="red">Other Option</Button>
				<Button color="red">Billable</Button>
				<Button color="red">Start/Stop</Button>
			</ButtonContainer>
        </>
    );
}

export default Components;