import { useEffect, useState } from "react";

function ApiTest() {

    const [test_text, set_test_text] = useState("");

    useEffect(() => {
        fetch("/api")
            .then(res => res.text())
            .then(data => set_test_text(data))
    }, []);

    console.log(test_text);

    return (
        <>
            <h1>API Test!</h1>
            <hr />
            <p>This section shows off getting data from a python API</p>
            <code style={{whiteSpace: "pre-wrap"}}>api_data = {test_text}</code>
        </>
    );

}

export default ApiTest;
