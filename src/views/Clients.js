import {TopBar} from "../components/topBar";
import {Card, CardContainer} from "../components/card";

function Clients() {
    let amnt_of_cards = 15;
    let cards = [];
    for (let i = 0; i<amnt_of_cards; i++) {
        cards.push(
            <Card href="#">
                <img width="100px" height="100px" />
                <div>
                    <h1>Hello</h1>
                    <hr />
                    <p>Some text inside the thing</p>
                </div>
            </Card>
        );
    }
    return (
        <>
            <TopBar title="Clients" />
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

export default Clients;
