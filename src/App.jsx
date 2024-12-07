// src/pages/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RegisterForm from './pages/RegisterForm';
import UserProfiles from './pages/UserProfiles';



const App = () => {
    const location = useLocation();

    useEffect(() => {
        const routeTitleMap = {
            "/": "Login - FlameGuard",
            "/dashboard": "Dashboard - FlameGuard",
            "/register": "Register - FlameGuard",
            "/profiles": "User Profiles - FlameGuard",


        };
        document.title = routeTitleMap[location.pathname] || "FlameGuard";
    }, [location]);

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/profiles" element={<UserProfiles />} />

        </Routes>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
