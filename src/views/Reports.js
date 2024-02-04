import {Card, CardContainer} from "../components/card";

function Reports() {

    let amnt_of_reports = 15;
    let reports = [];
    for (let i=0; i<amnt_of_reports; i++) {
        reports.push(
            <Card
                title="Very Import Report Thing"
                description="Description"
            />
        );
    }

    return (
        <>
            <h1>Reports</h1>
            <hr />

            <CardContainer>
                {reports}
            </CardContainer>
            
            {/*
            <Table>
                <TableRow>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                </TableRow>
            </Table>
            */}
        </>
    );
}

export default Reports;
