import {TopBar} from "../components/topBar";
import {Card, CardContainer} from "../components/card";

function Clients() {
    let amnt_of_cards = 15;
    let cards = [];
    for (let i = 0; i<amnt_of_cards; i++) {
        cards.push(
            <Card style={{
                    maxWidth: "250px",
                    maxHeight: "250px",
                }}
                href="#"
            >
                <div style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                }}>
                    <img width="100px" height="100px" style={{flexShrink: "1", borderRadius: "99999px", backgroundColor: "grey",}} />
                    <div style={{flex: "1",}}>
                        <h1>Hello</h1>
                        <hr />
                        <p>Some text inside the thing</p>
                    </div>
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