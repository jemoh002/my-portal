import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { BsFillExclamationOctagonFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

function SideBar({ active = 'myinfo' }) {
return (
    <div className="sidebar">
        <div className="noti-div">
            <BsFillExclamationOctagonFill /> <p className="notification-number">1</p>
            <FaBell /><p className="notification-number">1</p>
            <SlCalender /><p className="notification-number">1</p>
        </div>

        <div className="noti-header">
            <h2>My Profile</h2>
            <div>
                <h3>My Message Center</h3>
                <h3>My Information</h3>
            </div>
        </div>
    </div>
);
}

export default SideBar;