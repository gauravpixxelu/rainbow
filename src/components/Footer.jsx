import React from "react";
import { NavLink } from "react-router-dom";
import { faPhoneVolume, faEnvelopeOpenText, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
    return (

        <div className={'site-footer'}>

            {/* ----- Footer ----- */}

            <footer className="site-footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <ul className="cnt-detail">
                                    <li><FontAwesomeIcon icon={faMapLocationDot} /><NavLink to="https://goo.gl/maps/5ESm7UVCP4LzU8fq5" target="_blank">Nagrota Bagwan, District Kangra, Himachal Pradesh, PIN - 176047</NavLink></li>
                                    <li><FontAwesomeIcon icon={faPhoneVolume} /><NavLink to="tel:7807849222">7807849222</NavLink></li>
                                    <li><FontAwesomeIcon icon={faPhoneVolume} /><NavLink to="tel:01892-249222">01892-249222</NavLink></li>
                                    <li><FontAwesomeIcon icon={faEnvelopeOpenText} /><NavLink to="mailto:rainbowschoolnagrota@gmail.com">rainbowschoolnagrota@gmail.com</NavLink></li>
                                </ul>
                                <ul className="cnt-social">
                                    <li><NavLink to="https://www.facebook.com/pg/rainbowhimachal" target="_blank"><img src="icons/facebook.png" alt="Facebook" /></NavLink></li>
                                    <li><NavLink to="https://www.instagram.com/reel/CeNLcD5lHtp/?igshid=YmMyMTA2M2Y=" target="_blank"><img src="icons/youtube.png" alt="Instagram" /></NavLink></li>
                                    <li><NavLink to="https://twitter.com/rainbowhimachal" target="_blank"><img src="icons/twitter.png" alt="Twitter" /></NavLink></li>
                                    <li><NavLink to="https://www.youtube.com/channel/UCrc8uThFoxuCWUCo-T1bGbA" target="_blank"><img src="icons/instagram.png" alt="Youtube" /></NavLink></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><NavLink to="/academic-resources">Academics</NavLink></li>
                                    <li><NavLink to="/teaching-staff">Teaching Staff</NavLink></li>
                                    <li><NavLink to="/house-system">House System</NavLink></li>
                                    <li><NavLink to="/curriculum">Curriculum</NavLink></li>
                                    <li><NavLink to="/planners-of-syllabus">Planners of Syllabus</NavLink></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><NavLink to="/results">Result</NavLink></li>
                                    <li><NavLink to="/calender">Calender</NavLink></li>
                                    <li><NavLink to="/datesheets">Datesheets</NavLink></li>
                                    <li><NavLink to="/cbse-mandatory">Cbse Mandatory</NavLink></li>
                                    <li><NavLink to="/achievements">Achievements</NavLink></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                                    <li><NavLink to="/sports">Sports </NavLink></li>
                                    <li><NavLink to="/activities">Activities </NavLink></li>
                                    <li><NavLink to="/transport">Transport</NavLink></li>
                                    <li><NavLink to="/alumni">Alumni </NavLink></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><NavLink to="/contact">Contact </NavLink></li>
                                    <li><NavLink to="https://www.curtina.in/_web/FrmfindTC.aspx" target="_blank">Search TC</NavLink></li>
                                    <li><NavLink to="https://www.curtina.in/_mobile/login.aspx?AppId=RIS" target="_blank">Student Login</NavLink></li>
                                    <li><NavLink to="https://www.curtina.in/ris/forms/frmAlumni_AE_JQ.aspx" target="_blank">Enroll Alumni</NavLink></li>
                                    <li><NavLink to="https://www.curtina.in/RIS/forms/frmStdPayOnline.aspx" target="_blank">Pay Fee</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="tc">Terms & Conditions | Privacy Policy | Refund & Cancellation | Terms & Conditions for Online Registration</p>
                            </div>
                            <div className="col-md-6">
                                <p className="copyright">© 2023 Rainbow International School Nagrota – All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* ----- Footer ----- */}

        </div>

    )
}
export default Footer