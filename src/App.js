import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./views/Home";
import Reports from "./views/Reports";
import Timer from "./views/Timer";
import ApiTest from "./views/ApiTest";
import Components from "./views/Components";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="timer" element={<Timer />} />
                    <Route path="api-test" element={<ApiTest />} />
                    <Route path="components" element={<Components />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
