import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services/Service.jsx";
import ActiveAgeingCentre from "./pages/Services/ActiveAgeingCentre.jsx";
import Community from "./pages/Services/Community.jsx";
import DigitalCare from "./pages/Services/DigitalCare.jsx";
import HomeHealthCare from "./pages/Services/HomeHealthCare.jsx";
import PersonalizedInterventions from "./pages/Services/PersonalizedInterventions.jsx";
import SeniorFriendlyTravel from "./pages/Services/SeniorFriendlyTravel.jsx";
import Resources from "./pages/Resources/Resources.jsx";
import Blog from "./pages/Resources/Blog.jsx";
import Events from "./pages/Resources/Events.jsx";
import News from "./pages/Resources/News.jsx";
import Testimonials from "./pages/Resources/Testimonials.jsx";
import Careers from "./pages/Careers.jsx";
import Letstalk from "./pages/Letstalk.jsx";
import Partners from "./pages/Partners.jsx";
import Footer from "./components/Footer.jsx";

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar />
      <div className={isHome ? "pt-0" : "pt-20"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/active-ageing-centre" element={<ActiveAgeingCentre />} />
          <Route path="/services/community" element={<Community />} />
          <Route path="/services/digital-care" element={<DigitalCare />} />
          <Route path="/services/home-health-care" element={<HomeHealthCare />} />
          <Route path="/services/personalized-interventions" element={<PersonalizedInterventions />} />
          <Route path="/services/senior-friendly-travel" element={<SeniorFriendlyTravel />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/events" element={<Events />} />
          <Route path="/resources/news" element={<News />} />
          <Route path="/resources/testimonials" element={<Testimonials />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/letstalk" element={<Letstalk />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App
