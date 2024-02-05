import {Button, ButtonContainer} from "../components/buttons";

function Projects() {
    return (
        <>
            <div className="timer-header-bar" style={{
            }}>
                <h1 style={{
                    margin: "15px",
                    color: "white",
                }}>Some ongoing projects hey?</h1>
                <ButtonContainer className="header-bar-buttons" style={{ margin: "15px", }}>
                    <Button>Create Project</Button>
                    <Button>Tags</Button>
                    <Button>Billable</Button>
                    <Button>Ajust Duration</Button>
                    <Button>Start/Stop</Button>
                </ButtonContainer>
            </div>
            <p>I was thinking here there could be like a form to create another project</p>
        </>
    );
}

export default Projects;
