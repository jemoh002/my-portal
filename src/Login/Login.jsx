import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import TopBar from "../TopBar/TopBar.jsx"
import { FaStar } from "react-icons/fa";
import "./login.css"

function Login() {

    return (
        <div className="login">
            <TopBar/>

            <div className="top-login">
                <button>BACK TO HOME</button>
            </div>

            <div className="middle-login">
                <div className="login-image">
                    <img src="login_img1.jpg" alt="" />
                </div>
                <div className="login-form">
                    <div className="title-div"><h1>Student Login</h1></div> 
                    <div className="login-form-div">                   
                        <p>Required Field <FaStar className="star-icon"/></p>
                        <label htmlFor="username">Username <FaStar className="star-icon"/></label>
                        <input type="text" id="username" />
                        <label htmlFor="password">Password <FaStar className="star-icon"/></label>
                        <input type="password" id="password" />
                        <p>Password is case sensitive</p>
                    </div>

                    <div className="login-btn-group">
                        <p>Forgot your Password</p>
                        <button>LOGIN</button>
                    </div>


                </div>
            </div>

            <div className="footer-login"></div>
        </div>

    );
}


export default Login;