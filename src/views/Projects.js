import {Button, ButtonContainer} from "../components/buttons";
import {TopBar} from "../components/topBar";

function Projects() {
    return (
        <>
            <TopBar title="Projects">
                <Button>Create Project</Button>
                <Button>Tags</Button>
                <Button>Billable</Button>
                <Button>Ajust Duration</Button>
                <Button>Start/Stop</Button>
            </TopBar>
            <p>I was thinking here there could be like a form to create another project</p>
        </>
    );
}

export default Projects;
