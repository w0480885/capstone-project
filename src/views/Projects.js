import {Button, ButtonContainer} from "../components/buttons";
import {TopBar} from "../components/topBar";
import {Popup} from "../components/popup.js";

function Projects() {
    return (
        <>
            <Popup title="Title from projects!"> 
                <p>Woah this is a popup!</p>
            </Popup>
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
