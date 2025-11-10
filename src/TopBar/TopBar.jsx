import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import './TopBar.css'

// Single-file React + Tailwind front-end (static) for a multi-page portal
// Drop into a React project (Vite or CRA) with TailwindCSS configured.
// File: ken yatta-portal-frontend.jsx


function TopBar() {
return (
    <div className="topbar">
        <img src="logo.png" alt="" />
    </div>
);
}

export default TopBar;