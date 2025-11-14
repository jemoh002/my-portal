import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import TopBar from "../TopBar/TopBar";
import SideBar from "../SideBar/SideBar";
import { FaStar } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import "./myinformation.css"

function MyInformation() {
    const [active, setActive] = useState(null)
return (
    <div className="my-information">
        <SideBar/>

        <div className="main-bar">
            <div className="general-cat">
                <div>
                    <h1 className="myinfo-title">My Information</h1>
                    <hr className="info-underline"/>
                    <p className="personal-info-p">Your personal information is shown below. To edit click on the Edit Information button.</p>
                </div>

                <div className="encompasser">
                    <div className="info-categories">
                        <h2 className={active === 1 ? "active-card personal" : "info-cat-h2 personal"} onClick={() => setActive(active === 1 ? null : 1)}>Personal</h2>
                        <h2 className={active === 2 ? "active-card addresses" : "info-cat-h2 addresses"} onClick={() => setActive(active === 2 ? null : 2)}>Addresses</h2>
                        <h2 className={active === 3 ? "active-card additional" : "info-cat-h2 additional"} onClick={() => setActive(active === 3 ? null : 3)}>Additional Information</h2>
                    </div>
                    <hr className="separator"/>
                    
                    {active === 1 &&
                    <>
                    <p className="required-p">Required Field <FaStar className="star-icon"/></p>
                    

                    <div className="div-row">
                        <div className="div-col">
                            <p className="p-key">Title</p>
                            <p className="p-value">Mr.</p>
                            <p className="p-key">First Name</p>
                            <p className="p-value">NYAJUAYA</p>
                            <p className="p-key">Last Name</p>
                            <p className="p-value">ODHIAMBO</p>
                            <p className="p-key">Middle Name</p>
                            <p className="p-value">JAMES</p>
                            <p className="p-key">Date of Birth</p>
                            <p className="p-value">8/5/1998</p>
                            <p className="p-key">Residency Status</p>
                            <p className="p-value" style={{ color: "white" }}>jj</p>
                        </div>
                        <div className="div-col">
                            <p className="p-key">Student ID</p>
                            <p className="p-value">3672/2019</p>
                            <p className="p-key">Enrollment ID</p>
                            <p className="p-value">000372015</p>
                            <p className="p-key">Student Status</p>
                            <p className="p-value">Active</p>
                            <p className="p-key">Extracurricular Interest</p>
                            <p className="p-value">None</p>
                        </div>
                    </div>

                    <div className="div-row">
                        <div className="div-col">
                            <p className="p-key">Preferred Name</p>
                            <p className="p-value">Jemoh</p>
                            <p className="p-key">Nickname</p>
                            <p className="p-value">42700005234/18</p>
                            <p className="p-key">Country</p>
                            <p className="p-value">Kenya</p>
                            <p className="p-key">Address</p>
                            <p className="p-value">120</p>
                            <p className="p-key">City</p>
                            <p className="p-value">BONDO</p>
                            <p className="p-key">State</p>
                            <p className="p-value">NB</p>
                            <p className="p-key">Zip Code</p>
                            <p className="p-value">0000</p>
                            <p className="p-key">Email</p>
                            <p className="p-value">capuhjava@gmail.com</p>
                            <p className="p-key">Second Email</p>
                            <p className="p-value"></p>
                        </div>
                        <div className="div-col">
                            <p className="p-key">Pronouns</p>
                            <p className="p-value">Phone Numbers</p>
                            <p className="p-key">Home</p>
                            <p className="p-value">0729423128</p>
                            <p className="p-key">Work</p>
                            <p className="p-value"></p>
                            <p className="p-key">Other Phone</p>
                            <p className="p-value"></p>
                            <p className="p-key">Mobile Phone</p>
                            <p className="p-value">0723286818</p>
                        </div>
                    </div>

                    <button className="myinformation-btn">EDIT</button>
                    
                    </>}
                </div>
                    

            </div>

            {active === 2 && <>
                <div className="addresses-info">
                    <div className="addresses-info-top">
                        <div className="reference-div">
                            <p className="reference-p">Reference Addresses</p>
                        </div>
                        <div className="newadd-div">
                            <button className="newadd-btn">ADD A NEW ADDRESS</button>
                        </div>
                        
                    </div>

                    <div className="addresses-info-middle">
                        <p className="billing-p">Billing Address</p>
                        <div className="addresses-info-row">
                            <div className="addresses-info-cols">
                                <p className="p-key">Title</p>
                                <p className="addresses-pvalue"></p>
                            </div>

                            <div className="addresses-info-cols">
                                <p className="p-key">First Name</p>
                                <p className="addresses-pvalue">NYAJUAYA</p>
                            </div>

                            <div className="addresses-info-cols">
                                <p className="p-key">Last Name</p>
                                <p className="addresses-pvalue">ODHIAMBO</p>
                            </div>

                            <div className="addresses-info-cols">
                                <p className="p-key">Primary</p>
                                <p className="addresses-pvalue"></p>
                            </div>
                        </div>

                        <div className="addresses-info-row">
                            <div className="addresses-info-cols">
                                <p className="p-key">Other</p>
                                <p className="addresses-pvalue"></p>
                            </div>

                            <div className="addresses-info-cols">
                                <p className="p-key">Country</p>
                                <p className="addresses-pvalue"></p>
                            </div>

                            <div className="addresses-info-cols">
                                <p className="p-key">Address</p>
                                <p className="addresses-pvalue">120 120</p>
                            </div>

                            <div className="addresses-info-cols">
                                <p className="p-key">City</p>
                                <p className="addresses-pvalue">BONDO</p>
                            </div>
                        </div>

                        <div className="addresses-info-row">
                            <div className="addresses-info-cols">
                                <p className="p-key">State</p>
                                <p className="addresses-pvalue">Nairobi</p>
                            </div>

                            <div className="addresses-info-cols">
                                <p className="p-key">Zip Code</p>
                                <p className="addresses-pvalue"></p>
                            </div>

                            <div className="addresses-info-cols">
                                <p className="p-key">Email</p>
                                <p className="addresses-pvalue">capuhjava@gmail.com</p>
                            </div>

                            <div className="addresses-info-cols">
                                <p className="p-key"></p>
                                <p className="addresses-pvalue"></p>
                            </div>
                        </div>
                    </div>
                    <div className="edit-div">
                        <button className="edit-btn">EDIT</button>
                    </div>
                    
                </div>
            </>}

            {active === 3 && <>
            <div className="additional-info">
                <div className="additional-info-details">
                    <div className="additional-info-row">
                        <p className="additional-pkey">National Id</p>
                        <p className="additional-pvalue"></p>
                    </div>

                    <div className="additional-info-row">
                        <p className="additional-pkey">Date of Birth</p>
                        <p className="additional-pvalue"></p>
                    </div>

                    <button className="additional-btn">EDIT</button>
                    
                </div>
            </div>
            </>}
        </div>
            
        <div className="downbar">
            <div className="downbar-left">
                <FaPrint className="print-icon"/>
                <button className="print-btn">PRINT PAGE</button>
            </div>

            <div className="contact-info">
                <div className="pkey">Contact Info</div>
                <div className="pvalue">Tel:</div>
            </div>
        </div>
        

    </div>
);
}

export default MyInformation;