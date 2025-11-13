import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import TopBar from '../TopBar/TopBar'
import { RiGraduationCapFill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import "./landing.css"


function Landing() {
return (
    <div className="landing">
        <h1 id="self-service-title">Self-Service Portal</h1>
        <hr className="landing-hr"/>
        <p className="landing-p">Log into the portal to view your academic information, receive personalized communication, and use our self-service tools.</p>
        <div className="selection">
            {/* <Link to="/login" style={{ textDecoration: "none" }}> */}
            <div className="student-homepage">
                <RiGraduationCapFill color="blue" className="graduation-cap-icon"/>
                <h2>Student Portal Homepage</h2>
                <p className="h-p">Current Student Login Here</p>
            </div>
            {/* </Link> */}

            <div className="faculty-homepage">
                <GiTeacher color="#AEF359" className="teacher-icon"/>
                <h2>Faculty Portal Homepage</h2>
                <p className="h-p">Faculty Login Here</p>
            </div>

            <div className="course-homepage">
                <RiCalendarScheduleLine color="#f20b97" className="schedule-icon"/>
                <h2>Course Schedule</h2>
            </div>
        </div>

    </div>
);
}

export default Landing;