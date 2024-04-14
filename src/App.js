import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Layout";
import {Login, Signup, AuthLayout} from "./Auth";

import Home from "./views/Home";
import Timer from "./views/Timer";
import Reports from "./views/Reports";
import Performance from "./views/Performance";
import Invoices from "./views/Invoices";
import Clients from "./views/Clients";
import Rates from "./views/Rates";
import Teams from "./views/Teams";
import Tags from "./views/Tags";
import Projects from "./views/Projects";
import Integrations from "./views/Integrations";
import Export from "./views/Export";

import ApiTest from "./views/ApiTest";
import Components from "./views/Components";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/v0" element={<Layout />}>
                    <Route index element={<Navigate to="timer" />} />
                    <Route path="timer" element={<Timer />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="performance" element={<Performance />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="clients" element={<Clients />} />
                    <Route path="rates" element={<Rates />} />
                    <Route path="invoices" element={<Invoices />} />
                    <Route path="teams" element={<Teams />} />
                    <Route path="tags" element={<Tags />} />
                    <Route path="integrations" element={<Integrations />} />
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
