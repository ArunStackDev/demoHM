import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

const Navbar = lazy(() => import("./components/Navbar.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Services = lazy(() => import("./pages/Services/Service.jsx"));
const ActiveAgeingCentre = lazy(() => import("./pages/Services/ActiveAgeingCentre.jsx"));
const Community = lazy(() => import("./pages/Services/Community.jsx"));
const DigitalCare = lazy(() => import("./pages/Services/DigitalCare.jsx"));
const HomeHealthCare = lazy(() => import("./pages/Services/HomeHealthCare.jsx"));
const PersonalizedInterventions = lazy(() => import("./pages/Services/PersonalizedInterventions.jsx"));
const SeniorFriendlyTravel = lazy(() => import("./pages/Services/SeniorFriendlyTravel.jsx"));
const Resources = lazy(() => import("./pages/Resources/Resources.jsx"));
const Blog = lazy(() => import("./pages/Resources/Blog.jsx"));
const Events = lazy(() => import("./pages/Resources/Events.jsx"));
const News = lazy(() => import("./pages/Resources/News.jsx"));
const Testimonials = lazy(() => import("./pages/Resources/Testimonials.jsx"));
const Careers = lazy(() => import("./pages/Careers.jsx"));
const Letstalk = lazy(() => import("./pages/Letstalk.jsx"));
const Partners = lazy(() => import("./pages/Partners.jsx"));

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-6 text-gray-600">
            Loading...
          </div>
        }
      >
        <Navbar />
      </Suspense>
      <div className={isHome ? "pt-0" : "pt-20"}>
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-16 text-gray-600">
              Loading...
            </div>
          }
        >
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
        </Suspense>
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
