import {Button, ButtonContainer} from "../components/buttons";
import {TextInput, Radio} from "../components/input";
import {Table, TableRow} from "../components/table";

function Components() {

    return (
        <>
            <h1>Components Section!</h1>
            <hr />

            <h2>ButtonContainer & Button</h2>
            <ButtonContainer>
                <Button color="green">Other Option</Button>
                <Button color="green">Billable</Button>
                <Button color="green">Start/Stop</Button>
            </ButtonContainer>
            <br />
            <ButtonContainer>
                <Button color="orange">Other Option</Button>
                <Button color="orange">Billable</Button>
                <Button color="orange">Start/Stop</Button>
            </ButtonContainer>
            <br />
            <ButtonContainer>
                <Button color="red">Other Option</Button>
                <Button color="red">Billable</Button>
                <Button color="red">Start/Stop</Button>
            </ButtonContainer>
            <br />
            <ButtonContainer>
                <Button>Other Option</Button>
                <Button>Billable</Button>
                <Button>Start/Stop</Button>
            </ButtonContainer>
            <hr />

            <h2>TextInput</h2>
            <TextInput placeholder={"enter your social insurance number"} />
            <hr />

            <h2>Radio</h2>
            <Radio name="a" />
            <Radio name="a" />
            <Radio name="a" />
            <hr />

            <h2>Table</h2>
            <Table margin="15px">
                <TableRow header bold>
                    <p>Title</p>
                    <p className="collapsible">Description</p>
                    <p>Description-2</p>
                </TableRow>
                <TableRow href="#">
                    <p>Name</p>
                    <p className="collapsible">Description</p>
                    <p>Description-2</p>
                </TableRow>
                <TableRow href="#">
                    <p>Name</p>
                    <p className="collapsible">Description</p>
                    <p>Description-2</p>
                </TableRow>
            </Table>
            <hr />

            <h2>Calendar</h2>
            <p>
                Because the calendar is so large, one isn't going to be included in this section.
                That being said some information about it will be held here.
                <br />
                The github for the calendar library can be found <a href="https://github.com/jquense/react-big-calendar">here</a>.
                <br />
                The NPM package can be found <a href="https://www.npmjs.com/package/react-big-calendar">here</a>.
                <br />
                This package was chosen because it is the same one used by the original toggl.com website.
            </p>
            <p></p>
            <p></p>
        </>
    );
}

export default Components;
