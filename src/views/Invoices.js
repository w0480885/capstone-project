import {TopBar} from "../components/topBar";
import {Card, CardContainer} from "../components/card";

function Invoices() {

    let amnt_of_cards = 15;
    let cards = [];
    for (let i = 0; i<amnt_of_cards; i++) {
        cards.push(
            <Card href="#">
                <div>
                    <img width="100px" height="100px" />
                    <div>
                        <h1>Invoice #1</h1>
                        <hr />
                        <p>Description, more description etc, even more</p>
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <>
            <TopBar title="Invoices" />

            <div style={{
                marginTop: "50px",
            }}>
                <CardContainer>
                    {cards}
                </CardContainer>
            </div>
        </>
    );

}

export default Invoices;