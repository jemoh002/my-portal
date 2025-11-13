import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import TopBar from "../TopBar/TopBar.jsx"
import { FaStar } from "react-icons/fa";
import "./login.css"

function Login() {

    return (
        <div className="login">

            <div className="top-login">
                <Link to="/">
                    <button>BACK TO HOME</button>
                </Link>
            </div>

            <div className="middle-login">
                <div className="login-image">
                    <img src="login_img1.jpg" alt="" className="login_img1"/>
                </div>

                <div className="login-form">
                    <div className="title-div"><h1 className="login-h1">Student Login</h1></div> 
                    <div className="login-form-div">                   
                        <p className="required-p1">Required Field <FaStar className="star-icon"/></p>
                        <label htmlFor="username"><u>U</u>sername <FaStar className="star-icon"/></label>
                        <input type="text" id="username" />
                        <label htmlFor="password"><u>P</u>assword <FaStar className="star-icon"/></label>
                        <input type="password" id="password" />
                        <p>Password is case sensitive</p>
                    </div>

                    <div className="login-btn-group">
                        <p className="forgot-password-p">Forgot your Password</p>
                        <Link to="/myinformation">
                            <button className="login-btn">LOGIN</button>
                        </Link>
                    </div>


                </div>
            </div>

            <div className="footer-login"></div>
        </div>

    );
}


export default Login;