import React from "react";
import { Link } from "react-router-dom";
import LinkedinIcon from "../assets/Footerimg/LinkedinIcon.svg";
import FacebookIcon from "../assets/Footerimg/FacebookIcon.svg";
import InstagramIcon from "../assets/Footerimg/InstagramIcon.svg";
import PinterestIcon from "../assets/Footerimg/PinterestIcon.svg";
import YoutubeIcon from "../assets/Footerimg/YoutubeIcon.svg";
import Happyminzlogo from "../components/Happyminzlogo.jsx";

function Footer() {
  
  return (
    <>
    <footer className="bg-white w-screen mt-2 relative z-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <Happyminzlogo />
          <p className="font-medium font-body">Connect with us</p>
          <div className="flex gap-3">
            <a
              href="https://in.linkedin.com/company/happymindz-elder-care"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img src={LinkedinIcon} alt="LinkedIn" className="size-6"/>
            </a>
            <a
              href="https://www.facebook.com/HappymindzElderCare/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <img src={FacebookIcon} alt="Facebook" className="size-6"/>
            </a>
            <a
              href="https://www.instagram.com/happymindz_elder_care"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img src={InstagramIcon} alt="Instagram" className="size-6"/>
            </a>
            <a
              href="https://in.pinterest.com/happymindz_eldercare/"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
            >
              <img src={PinterestIcon} alt="Pinterest" className="size-6"/>
            </a>
            <a
              href="https://www.youtube.com/channel/UCx11L60hqADUC2ISifQCUMw?themeRefresh=1"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <img src={YoutubeIcon} alt="YouTube" className="size-6"/>
            </a>
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-semibold text-lg text-gray-500">Pages</h3>
          <div className="flex flex-col gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About us
            </Link>
            <Link to="/letstalk" className="hover:underline">
              Let's Talk
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold text-lg text-gray-500">Services</h3>
          <div className="flex flex-col gap-2">
            <Link to="/services/active-ageing-centre" className="hover:underline">
              Active Ageing Centre
            </Link>
            <Link to="/services/personalized-interventions" className="hover:underline">
              Personalized Interventions
            </Link>
            <Link to="/services/community" className="hover:underline">
              CIM
            </Link>
            <Link to="/services/home-health-support" className="hover:underline">
              Home Health Support
            </Link>
            <Link to="/services/senior-friendly-travel" className="hover:underline">
              Senior Friendly Travel
            </Link>
            <Link to="/services/digital-care" className="hover:underline">
              Digital Support
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold text-lg text-gray-500">Resources</h3>
          <div className="flex flex-col gap-2">
            <Link to="/resources/blog" className="hover:underline ">
              Blogs
            </Link>
            <Link to="/resources/events" className="hover:underline">
              Events
            </Link>
            <Link to="/resources/news" className="hover:underline">
              News
            </Link>
            <Link to="/resources/testimonials" className="hover:underline">
              Testimonials
            </Link>
          </div>
        </div>
      </div>
      <hr className=" border-gray-300"/>
      <div className="mt-6">
        <p className="text-center text-sm text-gray-600">
          &copy; 2025 Happymindz. All rights reserved. | Powered by <a href="https://easedementia.com/" className="text-blue-500 hover:underline">Easedementia</a>
        </p>
      </div>
    </footer>
    </>
  );
}

export default Footer;
