import {Table, TableRow} from "../components/table";

function Reports() {

    let amnt_of_reports = 15;
    let reports = [
        <TableRow header bold>
            <p>Name</p>
            <p className="collapsible">Description</p>
            <p>Description-2</p>
        </TableRow>
    ];
    for (let i=0; i<amnt_of_reports; i++) {
        reports.push(
            <TableRow href="#">
                <p>Very Import Report Thing</p>
                <p className="collapsible">Description</p>
                <p>Description-2</p>
            </TableRow>
        );
    }

    return (
        <>
            <h1>Reports</h1>
            <hr />

            <Table margin="5px">
                {reports}
            </Table>
            
        </>
    );
}

export default Reports;
