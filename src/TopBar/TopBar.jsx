import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import './TopBar.css'

// Single-file React + Tailwind front-end (static) for a multi-page portal
// Drop into a React project (Vite or CRA) with TailwindCSS configured.
// File: ken yatta-portal-frontend.jsx


function TopBar() {
    const location = useLocation()

    if (location.pathname === "/"){
        return (
            <div className="topbar">
                <img src="logo.png" alt="" className="logo"/>
            </div>
        );
    } else if (location.pathname === "/login"){
        return (
            <div className="topbar added">
                <img src="logo2.png" alt="" className="logo2"/>
            </div>
        )
    }
}

export default TopBar;