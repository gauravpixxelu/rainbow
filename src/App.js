import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './assets/css/style.css';
import './assets/css/mobile.css';
import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import Home from "./pages/Home";
import AcademicResources from "./pages/AcademicResources";
import TeachingStaff from "./pages/TeachingStaff";
import Results from "./pages/Results";
import Gallery from "./pages/Gallery";
import SpecialFeatures from "./pages/SpecialFeatures";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import Transport from "./pages/Transport";
import Activities from "./pages/Activities";
import Calender from "./pages/Calender";
import Sports from "./pages/Sports";
import Achievements from "./pages/Achievements";
import HouseSystem from "./pages/HouseSystem";
import PlannersSyllabus from "./pages/PlannersSyllabus";
import Curriculum from "./pages/Curriculum";
import Datesheets from "./pages/Datesheets";
import Primary from "./pages/Primary";
import PrePrimary from "./pages/PrePrimary";
import MiddleWing from "./pages/MiddleWing";
import Secondary from "./pages/Secondary";
import CbseMandatory from "./pages/CbseMandatory";
import BritishCouncil from "./pages/BritishCouncil";
import Admissions from "./pages/Admissions";
import Microsoft from "./pages/Microsoft";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TransferCertificates from "./pages/TransferCertificates.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 1000,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});


function App() {
  const [isBannerOpen, setIsBannerOpen] = useState(false);

  useEffect(() => {
    const currentRoute = window.location.pathname;
    const hasVisitedHomepage = sessionStorage.getItem('hasVisitedHomepage');

    if (!hasVisitedHomepage && currentRoute === '/') {
      setIsBannerOpen(true);
      sessionStorage.setItem('hasVisitedHomepage', 'true');
    }
  }, []);

  const closeBanner = () => {
    setIsBannerOpen(false);
  };

  return (
    <div className={'website'}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teaching-staff" element={<TeachingStaff />} />
          <Route path="/academic-resources" element={<AcademicResources />} />
          <Route path="/admission" element={<Admissions />} />
          <Route path="/results" element={<Results />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/special-features" element={<SpecialFeatures />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/house-system" element={<HouseSystem />} />
          <Route path="/datesheets" element={<Datesheets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/primary" element={<Primary />} />
          <Route path="/pre-primary" element={<PrePrimary />} />
          <Route path="/middle-wing" element={<MiddleWing />} />
          <Route path="/secondary" element={<Secondary />} />
          <Route path="/planners-of-syllabus" element={<PlannersSyllabus />} />
          <Route path="/cbse-mandatory" element={<CbseMandatory />} />
          <Route path="/british-council" element={<BritishCouncil />} />
          <Route path="/microsoft" element={<Microsoft />} />
          <Route path="/transfer-certificate" element={<TransferCertificates />} />          
        </Routes>
        <Footer />
        <ReactModal className="banner-web" isOpen={isBannerOpen} onRequestClose={() => setIsBannerOpen(false)} ariaHideApp={false} contentLabel="Admission Form Modal" >
          <button className="close" onClick={() => setIsBannerOpen(false)} >Close</button>
          <NavLink to="/admission" onClick={closeBanner}> {/* Add onClick handler */}
            <img src="images/Banner.jpg" alt="Banner" />
          </NavLink>
        </ReactModal>
      </Router>
    </div>
  );
}

export default App;


