import React from "react";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./components/dashboard";

const AppRoutes = () => {
    return <Routes>
        <Route path="/home" Component={Dashboard}/>
        <Route path="/" Component={Dashboard} />
    </Routes>
}

export default AppRoutes;