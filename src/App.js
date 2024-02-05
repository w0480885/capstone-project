import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Layout";
import {Login, Signup, AuthLayout} from "./Auth";

import Home from "./views/Home";
import Timer from "./views/Timer";
import Reports from "./views/Reports";
import Projects from "./views/Projects";
import Export from "./views/Export";

import ApiTest from "./views/ApiTest";
import Components from "./views/Components";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="timer" element={<Timer />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="export" element={<Export />} />
                    <Route path="api-test" element={<ApiTest />} />
                    <Route path="components" element={<Components />} />
                </Route>
                <Route path="/auth" element={<AuthLayout />}>
                    <Route index element={<Navigate to="login" />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
