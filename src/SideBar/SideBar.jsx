import React, {useState} from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { BsFillExclamationOctagonFill } from "react-icons/bs";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { LuSquareMenu } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import "./sidebar.css"

function SideBar({ active = 'myinfo' }) {
    const [openProfile, setOpenProfile] = useState(false)
    const [menuClick, setMenuClick] = useState(false)
    const today = new Date();

    // Format using toLocaleDateString
    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",   // Tuesday
        year: "numeric",   // 2025
        month: "long",     // November
        day: "numeric",    // 11
    });
return (
    <div className="sidebar">
        <div className="top-sidebar">
            <img src="logo.png" alt="" className="logo-sidebar"/>
            <LuSquareMenu className={menuClick ? "hamburger-menu-yellow": "hamburger-menu"} onClick={() => setMenuClick(!menuClick)}/>
        </div>
        
        <div className="noti-div">
            <p className="date-p">{formattedDate}</p>
            <div className="noti-icon-div">
                <div className="noti-div-div">
                    <BsFillExclamationOctagonFill className="noti-icon"/> <p className="notification-number">1</p>
                </div>
                <div className="noti-div-div">
                    <FaBell className="noti-icon"/><p className="notification-number">0</p>
                </div>
                <div className="noti-div-div">
                    <SlCalender className="noti-icon"/><p className="notification-number">0</p>
                </div>
            </div>

        </div>

        <div className={menuClick ? "noti-header": "noti-header-disap"}>
                <h2 className="noti-title" onClick={() => setOpenProfile(!openProfile)}><HiMiniSquares2X2 className="mini-square"/>My Profile</h2>
                {openProfile && <>
                    <div className="noti-subtitle-div">
                        <h3 className="noti-subtitle">My Message Center</h3>
                        <h3 className="noti-subtitle">My Information</h3>
                    </div>
                    
                </>}
                
           
        </div>
    </div>
);
}

export default SideBar;