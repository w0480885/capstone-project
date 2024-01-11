import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./views/Home";
import Timer from "./views/Timer";
import ApiTest from "./views/ApiTest";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="timer" element={<Timer />} />
                    <Route path="api-test" element={<ApiTest />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
