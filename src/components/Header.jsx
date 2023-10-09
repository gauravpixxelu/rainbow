import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { faPhoneVolume, faEnvelopeOpenText, faFileLines, faUserGraduate, faUser, faIndianRupeeSign, faChevronDown, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";


const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsSticky(scrollTop > 0); // Update isSticky based on scroll position
        };

        window.addEventListener('scroll', handleScroll); // Add scroll event listener
        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up scroll event listener
        };
    }, []);

    useEffect(() => {
        // Close the mobile menu when navigating to a new page
        setIsMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        // Retrieve the mobile menu state from local storage on page load
        const storedMobileMenuState = localStorage.getItem('mobileMenuState');
        if (storedMobileMenuState) {
            setIsMobileMenuOpen(JSON.parse(storedMobileMenuState));
        }
    }, []);

    useEffect(() => {
        // Store the mobile menu state in local storage
        localStorage.setItem('mobileMenuState', JSON.stringify(isMobileMenuOpen));
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    return (

        <div className={'header'}>


            {/* ----- Header ----- */}

            <div className="marque-block">
                <div className="container">
                    <Marquee>Rainbow International School, Nagrota is one of the best Schools in Himachal Pradesh, providing the highest quality and truly international standards of education.</Marquee>
                </div>
            </div>

            <header className={`site-header ${isSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="header-block">

                        <div className="header-logo">
                            <NavLink to="/"><img src="images/logo.jpg" alt="logo" /></NavLink>
                        </div>

                        <div className="header-info">
                            <div className="top-header">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="phn-detail">
                                            <ul>
                                                <li><FontAwesomeIcon icon={faPhoneVolume} /><NavLink to="tel:7807849222">7807849222</NavLink></li>
                                                <li><FontAwesomeIcon icon={faEnvelopeOpenText} /><NavLink to="mailto:rainbowschoolnagrota@gmail.com">rainbowschoolnagrota@gmail.com</NavLink></li>
                                                <li className="direction"><FontAwesomeIcon icon={faMapPin} /><NavLink to="https://goo.gl/maps/5ESm7UVCP4LzU8fq5" target="_blank">View Directions</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="header-btns">
                                            <ul>
                                                <li><NavLink className="custom-btn green transparent color1" to="https://www.curtina.in/_web/FrmfindTC.aspx" target="_blank"><span><FontAwesomeIcon icon={faFileLines} /> Search TC</span></NavLink></li>
                                                <li><NavLink className="custom-btn green transparent color2" to="https://www.curtina.in/_mobile/login.aspx?AppId=RIS" target="_blank"><span><FontAwesomeIcon icon={faUser} /> Student Login</span></NavLink></li>
                                                <li><NavLink className="custom-btn green transparent color3" to="https://www.curtina.in/ris/forms/frmAlumni_AE_JQ.aspx" target="_blank"><span><FontAwesomeIcon icon={faUserGraduate} /> Enroll Alumni</span></NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bottom-header">
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="header-nav">
                                            <nav className="navbar navbar-expand-lg">
                                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                    <ul className="navbar-nav">
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/">Home</NavLink>
                                                        </li>
                                                        <li className="nav-item dropdown">
                                                            <NavLink className="nav-link dropdown-toggle" to="#" role="button" aria-expanded="false">About <FontAwesomeIcon icon={faChevronDown} /></NavLink>
                                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/teaching-staff"><span>Teaching Staff</span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/house-system"><span>House System</span></NavLink>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/achievements">Achievements</NavLink>
                                                        </li>
                                                        <li className="nav-item dropdown">
                                                            <NavLink className="nav-link dropdown-toggle" to="/academic-resources">Academics <FontAwesomeIcon icon={faChevronDown} /></NavLink>
                                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/curriculum"><span>Curriculum </span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/planners-of-syllabus"><span>Planners of Syllabus (Session 2023-24)</span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/results"><span>Result</span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/calender"><span>Calender</span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/datesheets"><span>Datesheets</span></NavLink>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link dropdown-toggle" to="/activities">Activities <FontAwesomeIcon icon={faChevronDown} /></NavLink>
                                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/pre-primary"><span>Pre Primary </span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/primary"><span>Primary</span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/middle-wing"><span>Middle Wing</span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/secondary"><span>Secondary</span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/excursions"><span>Excursions</span></NavLink>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link dropdown-toggle" to="#" role="button" aria-expanded="false">International Endeavour <FontAwesomeIcon icon={faChevronDown} /></NavLink>
                                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                                <li>
                                                                    <NavLink className="dropdown-item dropdown-toggle" to="#" role="button" aria-expanded="false"><span>International Exchange </span></NavLink>
                                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                                        <li>
                                                                            <NavLink className="dropdown-item" to="/microsoft"><span>Microsoft</span></NavLink>
                                                                        </li>
                                                                        <li>
                                                                            <NavLink className="dropdown-item" to="/british-council"><span>British Council</span></NavLink>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/video-conferencing"><span>Video Conferencing</span></NavLink>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/sports">Sports</NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="header-images">
                                            <ul>
                                                <li><NavLink className="custom-btn pay" to="https://www.curtina.in/RIS/forms/frmStdPayOnline.aspx" target="_blank"><span><FontAwesomeIcon icon={faIndianRupeeSign} /> Pay Fee</span></NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* ----- Header ----- */}





            {/* ----- Mobile Header ----- */}

            <header className={`mobile-header site-header ${isSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="header-block">
                        <div className="header-info">
                            <div className="top-header">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="header-btns">
                                            <ul>
                                                <li><NavLink className="custom-btn green transparent color1" to="https://www.curtina.in/_web/FrmfindTC.aspx" target="_blank"><span><FontAwesomeIcon icon={faFileLines} /> Search TC</span></NavLink></li>
                                                <li><NavLink className="custom-btn green transparent color2" to="https://www.curtina.in/_mobile/login.aspx?AppId=RIS" target="_blank"><span><FontAwesomeIcon icon={faUser} /> Student Login</span></NavLink></li>
                                                <li><NavLink className="custom-btn green transparent color3" to="https://www.curtina.in/ris/forms/frmAlumni_AE_JQ.aspx" target="_blank"><span><FontAwesomeIcon icon={faUserGraduate} /> Enroll Alumni</span></NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bottom-header">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mobile-logo">
                                            <NavLink to="/"><img src="images/logo.jpg" alt="logo" /></NavLink>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="header-nav">
                                            <NavLink className="custom-btn pay" to="https://www.curtina.in/RIS/forms/frmStdPayOnline.aspx" target="_blank"><span><FontAwesomeIcon icon={faIndianRupeeSign} /> Pay Fee</span></NavLink>
                                            <nav className="navbar navbar-expand-lg">
                                                <button
                                                    className={`navbar-toggler ${isMobileMenuOpen ? 'collapsed' : ''}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#navbarSupportedContent"
                                                    aria-controls="navbarSupportedContent"
                                                    aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                                                    aria-label="Toggle navigation"
                                                    onClick={toggleMobileMenu}
                                                >
                                                    <span className="navbar-toggler-icon"></span>
                                                </button>
                                                <div
                                                    className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}
                                                    id="navbarSupportedContent"
                                                >
                                                    <NavLink to="/"><img src="images/logo.jpg" alt="logo" /></NavLink>
                                                    <ul className="navbar-nav">
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/">Home</NavLink>
                                                        </li>
                                                        <li className="nav-item dropdown">
                                                            <NavLink className="nav-link dropdown-toggle" to="#" role="button" aria-expanded="false">About <FontAwesomeIcon icon={faChevronDown} /></NavLink>
                                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/teaching-staff"><span>Teaching Staff</span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/house-system"><span>House System</span></NavLink>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/achievements">Achievements</NavLink>
                                                        </li>
                                                        <li className="nav-item dropdown">
                                                            <NavLink className="nav-link dropdown-toggle" to="/academic-resources">Academics <FontAwesomeIcon icon={faChevronDown} /></NavLink>
                                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/curriculum"><span>Curriculum </span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/planners-of-syllabus"><span>Planners of Syllabus (Session 2023-24)</span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/results"><span>Result</span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/calender"><span>Calender</span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/datesheets"><span>Datesheets</span></NavLink>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link dropdown-toggle" to="/activities">Activities <FontAwesomeIcon icon={faChevronDown} /></NavLink>
                                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/pre-primary"><span>Pre Primary </span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/primary"><span>Primary</span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/middle-wing"><span>Middle Wing</span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/secondary"><span>Secondary</span></NavLink>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/excursions"><span>Excursions</span></NavLink>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link dropdown-toggle" to="#" role="button" aria-expanded="false">International Endeavour <FontAwesomeIcon icon={faChevronDown} /></NavLink>
                                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                                <li>
                                                                    <NavLink className="dropdown-item dropdown-toggle" to="#" role="button" aria-expanded="false"><span>International Exchange </span></NavLink>
                                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                                        <li>
                                                                            <NavLink className="dropdown-item" to="/microsoft"><span>Microsoft</span></NavLink>
                                                                        </li>
                                                                        <li>
                                                                            <NavLink className="dropdown-item" to="/british-council"><span>British Council</span></NavLink>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <NavLink className="dropdown-item" to="/video-conferencing"><span>Video Conferencing</span></NavLink>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/alumni">Alumni</NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/transport">Transport</NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/special-features">Special Features</NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/sports">Sports</NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* ----- Mobile Header ----- */}

            {/* ----- Sidebar Widgets ----- */}

            <div className="sidebar-widgets">
                <ul>
                    <li><NavLink className="color-1" to="/alumni"><img src="icons/alumni.svg" alt="" /> Alumni</NavLink></li>
                    <li><NavLink className="color-2" to="/transport"><img src="icons/schoolbus.svg" alt="" /> Transport</NavLink></li>
                    <li><NavLink className="color-3" to="/special-features"><img src="icons/feature.svg" alt="" /> Special Features</NavLink></li>
                </ul>
            </div>

            {/* ----- Sidebar Widgets ----- */}

        </div>

    )
}
export default Header