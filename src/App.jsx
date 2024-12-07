// src/pages/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';



const App = () => {
    const location = useLocation();

    useEffect(() => {
        const routeTitleMap = {
            "/": "Login - FlameGuard",
            "/dashboard": "Dashboard - FlameGuard",

        };
        document.title = routeTitleMap[location.pathname] || "FlameGuard";
    }, [location]);

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
