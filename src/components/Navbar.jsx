import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Happyminzlogo from "../components/Happyminzlogo.jsx";
import useScrolled from "../Hooks/useScrolled.js";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const isScrolled = useScrolled(100);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
    setIsResourcesOpen(false);
  };
  const toggleResources = () => {
    setIsResourcesOpen((prev) => !prev);
    setIsServicesOpen(false);
  };
  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsResourcesOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-20 px-4 md:px-8 transition-colors duration-200 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <Link to="/" onClick={closeMenu} className="inline-flex items-center shrink-0">
        <Happyminzlogo />
      </Link>
      <div className="hidden lg:flex gap-4 xl:gap-8">
        <Link
          to="/"
          className="text-black font-semibold font-poppins inline-block gradient-underline hover:text-gray-700 text-xl xl:text-base whitespace-nowrap"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-black font-semibold font-poppins inline-block gradient-underline hover:text-gray-700 text-sm xl:text-base whitespace-nowrap"
          onClick={closeMenu}
        >
          About Us
        </Link>
        <div className="relative">
          <button
            type="button"
            className="text-black font-semibold font-poppins inline-flex items-center gap-2 gradient-underline hover:text-gray-700 text-sm xl:text-base whitespace-nowrap"
            aria-haspopup="menu"
            aria-expanded={isServicesOpen}
            onClick={toggleServices}
          >
            Services
            <svg
              className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isServicesOpen && (
            <div
              className="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50"
              role="menu"
            >
              <div className="py-2 flex flex-col">
                <Link
                  to="/services/active-ageing-centre"
                  className="px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                  onClick={closeMenu}
                  role="menuitem"
                >
                  Active Ageing Centre
                </Link>
                <Link
                  to="/services/personalized-interventions"
                  className="px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                  onClick={closeMenu}
                  role="menuitem"
                >
                  Personalized Interventions
                </Link>
                <Link
                  to="/services/community"
                  className="px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                  onClick={closeMenu}
                  role="menuitem"
                >
                  CIM
                </Link>
                <Link
                  to="/services/home-health-support"
                  className="px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                  onClick={closeMenu}
                  role="menuitem"
                >
                  Home Health Support
                </Link>
                <Link
                  to="/services/senior-friendly-travel"
                  className="px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                  onClick={closeMenu}
                  role="menuitem"
                >
                  Senior Friendly Travel
                </Link>
                <Link
                  to="/services/digital-care"
                  className="px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                  onClick={closeMenu}
                  role="menuitem"
                >
                  Digital Support
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            type="button"
            className="text-black font-semibold font-poppins inline-flex items-center gap-2 gradient-underline hover:text-gray-700 text-sm xl:text-base whitespace-nowrap"
            aria-haspopup="menu"
            aria-expanded={isResourcesOpen}
            onClick={toggleResources}
          >
            Resources
            <svg
              className={`h-4 w-4 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isResourcesOpen && (
            <div
              className="absolute left-0 mt-2 w-44 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50"
              role="menu"
            >
              <div className="py-2 flex flex-col">
                <Link
                  to="/resources/blog"
                  className="px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
                  onClick={closeMenu}
                  role="menuitem"
                >
                  Blogs
                </Link>
                <Link
                  to="/resources/events"
                  className="px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
                  onClick={closeMenu}
                  role="menuitem"
                >
                  Events
                </Link>
                <Link
                  to="/resources/news"
                  className="px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
                  onClick={closeMenu}
                  role="menuitem"
                >
                  News
                </Link>
                <Link
                  to="/resources/testimonials"
                  className="px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
                  onClick={closeMenu}
                  role="menuitem"
                >
                  Testimonials
                </Link>
              </div>
            </div>
          )}
        </div>
        <Link
          to="/careers"
          className="text-black font-semibold font-poppins inline-block gradient-underline hover:text-gray-700 text-sm xl:text-base whitespace-nowrap"
          onClick={closeMenu}
        >
          Careers
        </Link>

        <Link
          to="/partners"
          className="text-black font-semibold font-poppins inline-block gradient-underline hover:text-gray-700 text-sm xl:text-base whitespace-nowrap"
          onClick={closeMenu}
        >
          Partners
        </Link>
        <Link
          to="/letstalk"
          className="font-semibold font-poppins inline-block heading-gradient text-white rounded-full px-3 py-1 mr-2 text-sm xl:text-base whitespace-nowrap"
          onClick={closeMenu}
        >
          Let's Talk
        </Link>
      </div>

      <button
        type="button"
        className={`lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-300 ${isOpen ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 lg:hidden bg-gray-200 shadow-md border-t border-gray-100">
          <div className="flex flex-col gap-4 p-4 items-center justify-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-black font-semibold font-poppins inline-flex items-center justify-center gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full ${isActive ? "mobile-active-pill" : ""}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-black font-semibold font-poppins inline-flex items-center justify-center gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full ${isActive ? "mobile-active-pill" : ""}`
              }
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <div className="flex flex-col items-center gap-2">
              <button
                type="button"
                className="text-black font-semibold font-poppins inline-flex items-center justify-center gap-2 gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full"
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
                onClick={toggleServices}
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="flex flex-col gap-2">
                  <NavLink
                    to="/services/active-ageing-centre"
                    className={({ isActive }) =>
                      `text-black font-semibold font-poppins inline-flex items-center justify-center gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full ${isActive ? "mobile-active-pill" : ""}`
                    }
                    onClick={closeMenu}
                  >
                    Active Ageing Centre
                  </NavLink>
                  <NavLink
                    to="/services/personalized-interventions"
                    className={({ isActive }) =>
                      `text-black font-semibold font-poppins inline-flex items-center justify-center gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full ${isActive ? "mobile-active-pill" : ""}`
                    }
                    onClick={closeMenu}
                  >
                    Personalized Interventions
                  </NavLink>
                  <NavLink
                    to="/services/community"
                    className={({ isActive }) =>
                      `text-black font-semibold font-poppins inline-flex items-center justify-center gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full ${isActive ? "mobile-active-pill" : ""}`
                    }
                    onClick={closeMenu}
                  >
                    CIM
                  </NavLink>
                  <NavLink
                    to="/services/home-health-support"
                    className={({ isActive }) =>
                      `text-black font-semibold font-poppins inline-flex items-center justify-center gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full ${isActive ? "mobile-active-pill" : ""}`
                    }
                    onClick={closeMenu}
                  >
                    Home Health Support
                  </NavLink>
                  <NavLink
                    to="/services/senior-friendly-travel"
                    className={({ isActive }) =>
                      `text-black font-semibold font-poppins inline-flex items-center justify-center gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full ${isActive ? "mobile-active-pill" : ""}`
                    }
                    onClick={closeMenu}
                  >
                    Senior Friendly Travel
                  </NavLink>
                  <NavLink
                    to="/services/digital-care"
                    className={({ isActive }) =>
                      `text-black font-semibold font-poppins inline-flex items-center justify-center gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full ${isActive ? "mobile-active-pill" : ""}`
                    }
                    onClick={closeMenu}
                  >
                    Digital Support
                  </NavLink>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center gap-2">
              <button
                type="button"
                className="text-black font-semibold font-poppins inline-flex items-center justify-center gap-2 gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full"
                aria-haspopup="menu"
                aria-expanded={isResourcesOpen}
                onClick={toggleResources}
              >
                Resources
                <svg
                  className={`h-4 w-4 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="flex flex-col gap-2">
                  <NavLink
                    to="/resources/blog"
                    className={({ isActive }) =>
                      `text-black font-semibold font-poppins inline-flex items-center justify-center gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full ${isActive ? "mobile-active-pill" : ""}`
                    }
                    onClick={closeMenu}
                  >
                    Blogs
                  </NavLink>
                  <NavLink
                    to="/resources/events"
                    className={({ isActive }) =>
                      `text-black font-semibold font-poppins inline-flex items-center justify-center gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full ${isActive ? "mobile-active-pill" : ""}`
                    }
                    onClick={closeMenu}
                  >
                    Events
                  </NavLink>
                  <NavLink
                    to="/resources/news"
                    className={({ isActive }) =>
                      `text-black font-semibold font-poppins inline-flex items-center justify-center gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full ${isActive ? "mobile-active-pill" : ""}`
                    }
                    onClick={closeMenu}
                  >
                    News
                  </NavLink>
                  <NavLink
                    to="/resources/testimonials"
                    className={({ isActive }) =>
                      `text-black font-semibold font-poppins inline-flex items-center justify-center gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full ${isActive ? "mobile-active-pill" : ""}`
                    }
                    onClick={closeMenu}
                  >
                    Testimonials
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `text-black font-semibold font-poppins inline-flex items-center justify-center gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full ${isActive ? "mobile-active-pill" : ""}`
              }
              onClick={closeMenu}
            >
              Careers
            </NavLink>
            <NavLink
              to="/partners"
              className={({ isActive }) =>
                `text-black font-semibold font-poppins inline-flex items-center justify-center gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full ${isActive ? "mobile-active-pill" : ""}`
              }
              onClick={closeMenu}
            >
              Partners
            </NavLink>
            <NavLink
              to="/letstalk"
              className={({ isActive }) =>
                `text-black font-semibold font-poppins inline-flex items-center justify-center gradient-underline hover:text-gray-700 text-sm bg-white rounded-md px-4 py-2 w-full ${isActive ? "mobile-active-pill" : ""}`
              }
              onClick={closeMenu}
            >
              Let's Talk
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
