import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services/Service.jsx";
import PersonalizedInterventions from "./pages/Services/PersonalizedInterventions.jsx";
import Resources from "./pages/Resources/Resources.jsx";
import Blog from "./pages/Resources/Blog.jsx";
import Events from "./pages/Resources/Events.jsx";
import News from "./pages/Resources/News.jsx";
import Testimonials from "./pages/Resources/Testimonials.jsx";
import Careers from "./pages/Careers.jsx";
import Partners from "./pages/Partners.jsx";
import Footer from "./components/Footer.jsx";

const About = lazy(() => import("./pages/About.jsx"));
const Letstalk = lazy(() => import("./pages/Letstalk.jsx"));
const Community = lazy(() => import("./pages/Services/Community.jsx"));
const ActiveAgeingCentre = lazy(
  () => import("./pages/Services/ActiveAgeingCentre.jsx"),
);
const SeniorFriendlyTravel = lazy(
  () => import("./pages/Services/SeniorFriendlyTravel.jsx"),
);
const HomeHealthSupport = lazy(
  () => import("./pages/Services/HomeHealthSupport.jsx"),
);
const DigitalCare = lazy(() => import("./pages/Services/DigitalCare.jsx"));

const PageFallback = () => (
  <div className="w-full py-16 flex items-center justify-center text-gray-600">
    Loading page…
  </div>
);

function AppLayout() {
  const location = useLocation();
  const noTopPaddingRoutes = ["/", "/letstalk", "/services/senior-friendly-travel"];
  const isNoTopPadding = noTopPaddingRoutes.includes(location.pathname);

  return (
    <>
      <Navbar />
      <div className={isNoTopPadding ? "pt-0" : "pt-20"}>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/services/active-ageing-centre"
              element={<ActiveAgeingCentre />}
            />
            <Route path="/services/community" element={<Community />} />
            <Route path="/services/digital-care" element={<DigitalCare />} />
            <Route
              path="/services/home-health-support"
              element={<HomeHealthSupport />}
            />
            <Route
              path="/services/personalized-interventions"
              element={<PersonalizedInterventions />}
            />
            <Route
              path="/services/senior-friendly-travel"
              element={<SeniorFriendlyTravel />}
            />
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

export default App;
