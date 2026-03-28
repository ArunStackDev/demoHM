import React, { Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import HomeHero from "../assets/HomePageimg/HomeHero.svg";
import Homepagearrow from "../assets/HomePageimg/Homepagearrow.svg";
import HomeMain1 from "../assets/HomePageimg/HomeMain1.svg";
import HomeMain2 from "../assets/HomePageimg/HomeMain2.svg";
import HomeService1 from "../assets/HomePageimg/HomeService1.svg";
import HomeService2 from "../assets/HomePageimg/HomeService2.svg";

import HomeService3 from "../assets/HomePageimg/HomeService3.svg";

import HomeService4 from "../assets/HomePageimg/HomeService4.svg";

import HomeService5 from "../assets/HomePageimg/HomeService5.svg";

import HomeService6 from "../assets/HomePageimg/HomeService6.svg";
import HomeServicesCard from "../components/HomeServiceCard.jsx";
import HomePeopleGraphic from "../assets/HomePageimg/HomePeopleGraphic.svg";
import HomeDottedCircle from "../assets/HomePageimg/HomeDottedCircle.svg";
import HomeEllipse from "../assets/HomePageimg/HomeEllipse.svg";
import HomeHolisticCircle from "../assets/HomePageimg/HomeHolistic.svg";
import HomeActiveCircle from "../assets/HomePageimg/HomeActiveCircle.svg";
import HomeTrustedCircle from "../assets/HomePageimg/HomeTrustedCircle.svg";
import HomeTailoredCircle from "../assets/HomePageimg/HomeTailoredCircle.svg";
import HomeCenterCircle from "../assets/HomePageimg/HomeCenterCircle.svg";
import HomeLeftArrow from "../assets/HomePageimg/HomeLeftArrow.svg";
import HomeRightArrow from "../assets/HomePageimg/HomeRightArrow.svg";
import HomeClientPic1 from "../assets/HomePageimg/HomeClientPic1.svg";
import HomeClientPic2 from "../assets/HomePageimg/HomeClientPic2.svg";
import HomeClientPic3 from "../assets/HomePageimg/HomeClientPic3.svg";
import HomeClientReview from "../components/HomeClientsReview.jsx";
const HomePagination = React.lazy(
  () => import("../components/HomePagination.jsx"),
);
const ClientForm = React.lazy(
  () => import("../components/ClientForm.jsx"),
);
import HomeStartup1 from "../assets/HomePageimg/HomeStartup1.svg";
import HomeStartup2 from "../assets/HomePageimg/HomeStartup2.svg";
import ClientFormContent from "../components/ClientFormContent.jsx";

// Service cards shown in the "Specialised Support Initiatives" section
const cardData = [
  {
    id: 1,
    image: HomeService1,
    title: "Active Ageing Centre",
    route: "/services/active-ageing-centre",
  },
  {
    id: 2,
    image: HomeService2,
    title: "Community Intervention Model",
    route: "/services/community",
  },
  {
    id: 3,
    image: HomeService3,
    title: "Personalized Interventions",
    route: "/services/personalized-interventions",
  },
  {
    id: 4,
    image: HomeService4,
    title: "Home Health Care",
    route: "/services/home-health-care",
  },
  {
    id: 5,
    image: HomeService5,
    title: "Senior Friendly Travel",
    route: "/services/senior-friendly-travel",
  },
  {
    id: 6,
    image: HomeService6,
    title: "Digital Care",
    route: "/services/digital-care",
  },
];

// Stats used for the animated counters in the "Why Choose Us" section
const statsData = [
  { id: 1, value: 500, suffix: "+", label: "Happy families" },
  { id: 2, value: 25, suffix: "+", label: "Hospital Partners" },
  { id: 3, value: 200, suffix: "+", label: "Community Activations" },
  { id: 4, value: 50, suffix: "+", label: "Committed professionals" },
  { id: 5, value: 30, suffix: "+", label: "Specialized doctors" },
];

// Circle highlights shown in the "Our Reach" section
const reachCircles = [
  {
    id: 1,
    image: HomeHolisticCircle,
    title: "Holistic Support",
    description:
      "Complete well-being programs across physical, mental, and social domains.",
    className: "h-48 w-48 top-65 left-110",
  },
  {
    id: 2,
    image: HomeTrustedCircle,
    title: "Trusted Expertise",
    description:
      "Experienced caregivers and partners providing dependable, compassionate care.",
    className: "h-55 w-55 top-42 left-185",
  },
  {
    id: 3,
    image: HomeActiveCircle,
    title: "Active Living",
    description:
      "Empowering seniors to stay engaged, healthy, and independent.",
    className: "h-45 w-45 top-128 left-125",
  },
  {
    id: 4,
    image: HomeTailoredCircle,
    title: "Tailored Care",
    description:
      "Personalized plans built around individual needs, routines, and goals.",
    className: "h-60 w-60 top-105 left-208",
  },
];
// Testimonials shown in the "Real Voices of Families" carousel
const clientReviews = [
  {
    id: 1,
    name: "Krishnakumar B",
    clientLocation: "Kochi",
    reviewDescription:
      "“We had a very good experience with Happymindz who are dedicated for caring senior citizens. I came to know about Happymindz from Malayala Manora daily and was eager to know about their services. My mother in law who is 83 years old and requires constant attention and care. My wife cannot carry out all homely needs and taken care of her. ",
    profilePicture: HomeClientPic1,
  },
  {
    id: 2,
    name: "Ananthan Neeleeswaram",
    clientLocation: "Kottayam",
    reviewDescription:
      "“Happymindz has been one of the best finds when it comes to peace of mind. I would like to thank everyone at happymindz home care for their excellent work, professionalism and understanding, especially on those occasions when my parents needed the most. At a time when things were very stressful and anxious, I always felt that however busy everyone was, I was always lent a sympathetic ear which was very much appreciated. I would highly recommend them",
    profilePicture: HomeClientPic2,
  },
  {
    id: 3,
    name: "Sunny Thomas",
    clientLocation: "Thrissur",
    reviewDescription:
      "“Had an awesome experience with Happymindz. The team is 100% committed in providing one of the best elderly care facilities in Kerala and India. My parents had a great time with Happymindz. The best part is that they have taken up new initiatives like, reading, music, yoga, gardening and writing. This has brought a new purpose to their life and more happiness. A big thanks to Jolly, Alphonse, and Ankita. Wish you the best!”",
    profilePicture: HomeClientPic3,
  },
  {
    id: 4,
    name: "Krishnakumar B",
    clientLocation: "Kochi",
    reviewDescription:
      "“We had a very good experience with Happymindz who are dedicated for caring senior citizens. I came to know about Happymindz from Malayala Manora daily and was eager to know about their services. My mother in law who is 83 years old and requires constant attention and care. My wife cannot carry out all homely needs and taken care of her. ",
    profilePicture: HomeClientPic1,
  },
  {
    id: 5,
    name: "Ananthan Neeleeswaram",
    clientLocation: "Kottayam",
    reviewDescription:
      "“Happymindz has been one of the best finds when it comes to peace of mind. I would like to thank everyone at happymindz home care for their excellent work, professionalism and understanding, especially on those occasions when my parents needed the most. At a time when things were very stressful and anxious, I always felt that however busy everyone was, I was always lent a sympathetic ear which was very much appreciated. I would highly recommend them",
    profilePicture: HomeClientPic2,
  },
  {
    id: 3,
    name: "Sunny Thomas",
    clientLocation: "Thrissur",
    reviewDescription:
      "“Had an awesome experience with Happymindz. The team is 100% committed in providing one of the best elderly care facilities in Kerala and India. My parents had a great time with Happymindz. The best part is that they have taken up new initiatives like, reading, music, yoga, gardening and writing. This has brought a new purpose to their life and more happiness. A big thanks to Jolly, Alphonse, and Ankita. Wish you the best!”",
    profilePicture: HomeClientPic3,
  },
];

function Home() {
  // Refs and state for animated counters, reviews carousel, and gallery pagination
  const statsRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const [counts, setCounts] = useState(() => statsData.map(() => 0));
  const [reviewStartIndex, setReviewStartIndex] = useState(0);
  const [galleryPage, setGalleryPage] = useState(0);
  const [galleryPageSize, setGalleryPageSize] = useState(8);
  // Gallery source images displayed in the "Snapshots" section
  const galleryImages = [
    HomeMain1,
    HomeMain2,
    HomeMain1,
    HomeMain2,
    HomeMain1,
    HomeMain2,
    HomeService5,
    HomeMain2,
    HomeMain1,
    HomeMain2,
    HomeMain1,
    HomeMain2,
    HomeMain1,
    HomeMain2,
    HomeService5,
    HomeMain2,
    HomeMain1,
    HomeMain2,
    HomeMain1,
    HomeMain2,
    HomeMain1,
    HomeMain2,
    HomeMain1,
    HomeService5,
  ];
  const totalGalleryPages = Math.ceil(galleryImages.length / galleryPageSize);
  const galleryStart = galleryPage * galleryPageSize;
  const galleryVisible = galleryImages.slice(
    galleryStart,
    galleryStart + galleryPageSize,
  );

  // Responsive gallery pagination based on viewport width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const nextPageSize = width <= 640 ? 4 : width <= 1024 ? 6 : 8;
      setGalleryPageSize(nextPageSize);
      setGalleryPage((prev) =>
        Math.min(
          prev,
          Math.max(0, Math.ceil(galleryImages.length / nextPageSize) - 1),
        ),
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [galleryImages.length]);

  // Animate stats when the section comes into view
  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasAnimatedRef.current) return;
        hasAnimatedRef.current = true;

        const durationMs = 1200;
        const startTime = performance.now();

        const step = (now) => {
          const progress = Math.min((now - startTime) / durationMs, 1);
          setCounts(statsData.map((stat) => Math.floor(stat.value * progress)));

          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };

        requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-screen min-h-screen overflow-x-hidden pb-12">
      <h1 className="sr-only">
        Happymindz senior care, wellness, and community services
      </h1>
      {/* Hero section */}
      <header
        className="relative w-screen overflow-hidden bg-cover bg-center bg-no-repeat min-h-[60vh] sm:min-h-[70vh] lg:min-h-[100vh]"
        style={{ backgroundImage: `url(${HomeHero})` }}
      >
        <div className="absolute inset-0 bg-white/40" aria-hidden="true"></div>
        <div className="absolute inset-0 z-10 flex flex-col justify-end px-6 pb-24 sm:px-10 sm:pb-28 lg:px-20 xl:px-28 2xl:px-40 max-md:justify-start max-md:pt-20 max-md:pb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black max-w-[28rem] lg:max-w-[36rem] max-md:text-left max-md:leading-tight font-body">
            Your One Stop <br />
            for Joyful,{" "}
            <span className="font-light text-3xl sm:text-4xl lg:text-5xl xl:text-6xl ">
              Active <br />
              Ageing
            </span>
          </h1>
          <Link
            to="/letstalk"
            className="mt-6 sm:mt-8 bg-[#32B0A9] hover:bg-[#AB237A] text-white font-bold py-2 px-6 rounded h-12 w-fit font-body rounded-xl duration-500 inline-flex items-center justify-center"
          >
            Contact us
          </Link>
        </div>
      </header>
      {/* What We Do section */}
      <section className="h-160 w-screen bg-white relative flex overflow-hidden max-lg:flex-col max-lg:h-auto max-lg:pb-10">
        <div className=" h-full w-200 grid grid-cols-[auto_1fr] max-lg:w-full max-lg:px-6 max-lg:grid-cols-1">
          <div className="h-50 w-4 bg-gradient-to-b from-[#35B1AA]  to-[#ffffff] max-lg:hidden"></div>
          <div flex flex-col>
            <h2 className="mt-20 ml-28 text-6xl font-bold max-lg:ml-0 max-lg:mt-8 max-lg:text-4xl max-md:text-3xl">
              What{" "}
              <span className="bg-gradient-to-r from-[#36A178] to-[#10B2D4] bg-clip-text  text-transparent">
                We Do
              </span>
              <img
                src={Homepagearrow}
                alt="Decorative arrow accent"
                className="absolute top-18 left-0 size-48 max-lg:hidden"
                fetchpriority="high" loading="eager"
              />
            </h2>
            <p className="w-2xl ml-28 mt-8 text-2xl font-semibold  h-70 text-justify text-gray-800 max-lg:ml-0 max-lg:w-full max-lg:text-base max-lg:h-auto font-body">
              At Happymindz, we believe the best version of yourself is waiting
              at any age. We redefine senior living by combining wellness, and
              healthcare with the joy of travel, and community. For families
              near and far, we offer the security, and peace of mind knowing
              your loved ones are living their lives to the fullest.
            </p>
          </div>
        </div>
        <div className="w-full flex bg-white relative max-lg:flex-col max-lg:items-center max-lg:mt-8">
          {/* Left spacing area */}
          <div className="w-40 max-lg:hidden"></div>

          {/* Gradient background */}
          <div className="left-40 top-0 w-full h-full bg-gradient-to-b from-[#35B1AA] to-white max-lg:hidden"></div>

          {/* First image */}
          <img
            src={HomeMain1}
            alt="people gathering together"
            className="absolute top-12 left-20 w-85 h-60 object-cover z-10 rounded-2xl max-[1100px]:static max-[1100px]:w-80 max-[1100px]:h-52 max-[1100px]:mx-auto"
            fetchpriority="high" loading="eager"
          />

          {/* Second image (overlapping) */}
          <img
            src={HomeMain2}
            alt="Seniors in a Zumba class"
            className="absolute top-50 left-60 w-85 h-60 object-cover z-20 rounded-2xl max-[1100px]:static max-[1100px]:w-80 max-[1100px]:h-52 max-[1100px]:mx-auto max-[1100px]:mt-6"
            fetchpriority="high" loading="eager"
          />
        </div>
      </section>
      {/* Specialised Support Initiatives (service cards) */}
      <section className="h-full w-screen bg-gradient-to-b from-white via-[#E7F1FF] to-white h-full w-full pt-20 max-lg:pt-12">
        <div>
          <h2 className="ml-28 text-6xl font-bold max-lg:ml-6 max-lg:text-4xl max-md:text-3xl">
            Specialised{" "}
            <span className="bg-gradient-to-r from-[#36A178] to-[#10B2D4] bg-clip-text  text-transparent">
              Support Initiatives
            </span>
          </h2>
          <p className="w-2xl ml-28 mt-10 text-2xl font-semibold text-justify text-gray-800 max-lg:ml-6 max-lg:w-full max-lg:text-base max-lg:mt-4">
            Comprehensive care solutions designed for every aspect of senior
            living.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 place-items-center w-full mt-15 max-w-5xl mx-auto max-lg:grid-cols-2 max-md:flex max-md:flex-nowrap max-md:gap-4 max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-lg:px-6 max-md:pb-4">
          {cardData.map((item) => {
            return (
              <div
                key={item.id}
                className="max-md:w-[80vw] max-md:flex-shrink-0 max-md:snap-center"
              >
                <HomeServicesCard
                  image={item.image}
                  title={item.title}
                  Service={item.route}
                />
              </div>
            );
          })}
        </div>
      </section>
      {/* Why Choose Us section */}
      <section className="relative w-screen h-full mt-20 bg-white flex flex-col items-center justify-center max-lg:mt-12">
        <h2 className="text-6xl font-bold mt-25 max-lg:text-4xl max-md:text-3xl max-lg:text-center">
          Why{" "}
          <span className="bg-gradient-to-r from-[#36A178] to-[#10B2D4] bg-clip-text  text-transparent">
            Choose Us
          </span>
        </h2>
        <img
          src={HomePeopleGraphic}
          alt="Illustration of people enjoying together"
          className="mt-15 object-cover h-full w-7xl max-lg:w-full max-lg:px-6"
          loading="lazy"
          decoding="async"
        />
        <div
          ref={statsRef}
          className="absolute top-110 h-40 w-10/12 bg-gradient-to-r from-[#93BB43] to-[#1EA2BF] rounded-xl flex items-center justify-center max-lg:static max-lg:mt-6 max-lg:w-11/12 max-lg:h-auto max-lg:py-6 max-lg:mb-6"
        >
          <div className="w-full px-8 grid grid-cols-5 gap-6 text-white text-center max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:gap-4">
            {statsData.map((stat, index) => (
              <div key={stat.id} className="flex flex-col items-center">
                <div className="text-4xl font-bold leading-none max-lg:text-3xl">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="mt-2 text-sm font-semibold tracking-wide max-lg:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Reach section */}
      <section className="h-195 w-screen relative overflow-hidden bg-gradient-to-b from-[#FBF1BF] to-[#ffffff] max-[1400px]:h-auto max-[1400px]:pb-10 max-[1400px]:pt-8">
        <div className="border border-amber-50 w-screen h-full relative z-20 max-[1400px]:border-0 max-[1400px]:px-6">
          <h2 className="text-6xl  ml-28 font-bold mt-25 w-80 max-lg:ml-0 max-lg:text-4xl max-md:text-3xl max-lg:mt-0">
            Our{" "}
            <span className="bg-gradient-to-r from-[#36A178] to-[#10B2D4] bg-clip-text  text-transparent">
              Reach
            </span>
          </h2>
          <p className="text-2xl font-medium w-120 text-gray-600 mt-5 ml-28 max-lg:ml-0 max-lg:w-full max-lg:text-base">
            Holistic support through trusted expertise and personalized care.
          </p>
        </div>
        <img
          src={HomeDottedCircle}
          alt="Decorative dotted circle graphic"
          className="absolute top-40 object-fit size-8/12 left-60 max-[1400px]:hidden z-0"
          loading="lazy"
          decoding="async"
        />
        <img
          src={HomeEllipse}
          alt="Decorative ellipse graphic"
          className="absolute top-75 size-80 left-140 max-[1400px]:hidden z-0"
          loading="lazy"
          decoding="async"
        />
        <img
          src={HomeCenterCircle}
          alt="Decorative center circle graphic"
          className="absolute size-70 left-145 top-80 max-[1400px]:hidden z-0"
          loading="lazy"
          decoding="async"
        />

        {reachCircles.map((circle) => (
          <div
            key={circle.id}
            className={`absolute ${circle.className}  rounded-full bg-white overflow-hidden z-10 max-[1400px]:static max-[1400px]:mx-auto max-[1400px]:mt-6`}
          >
            <div
              className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-3 text-black bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${circle.image})` }}
            >
              <h3 className="text-sm text-black font-bold leading-tight  drop-shadow">
                {circle.title}
              </h3>
              <p className="mt-1 text-[14px] text-black leading-snug drop-shadow">
                {circle.description}
              </p>
            </div>
          </div>
        ))}
      </section>
      {/* Testimonials section */}
      <section className="h-190 w-screen bg-gradient-to-b from-[#ffffff] via-[#d5fcfa] to-[#35B1AA] max-lg:h-auto max-lg:pb-10">
        <h2 className="text-6xl ml-28 font-bold mt-5 w-180 max-[1400px]:ml-6 max-[1400px]:w-full max-lg:text-4xl max-md:text-3xl max-md:max-w-[90vw] max-[360px]:text-[22px] max-[360px]:leading-tight">
          Real Voices of{" "}
          <span className="bg-gradient-to-r from-[#36A178] to-[#10B2D4] bg-clip-text  text-transparent">
            Families
          </span>
        </h2>
        <p className="text-2xl font-medium w-120 text-gray-700 mt-5 ml-28 max-[1400px]:ml-6 max-[1400px]:w-full max-lg:text-base">
          Stories from the hearts we've touched.
        </p>
        <div className="h-140 w-screen items-center justify-center flex max-lg:h-auto max-lg:flex-col max-lg:gap-6 max-lg:mt-6">
          <button
            type="button"
            onClick={() =>
              setReviewStartIndex(
                (prev) =>
                  (prev - 1 + clientReviews.length) % clientReviews.length,
              )
            }
            className="p-2 mr-5 max-lg:mr-0 z-10 shrink-0"
            aria-label="Previous reviews"
          >
            <img
              src={HomeLeftArrow}
              alt="Previous reviews arrow"
              loading="lazy"
              decoding="async"
            />
          </button>
          <div className="flex items-center gap-8">
            {[0, 1, 2].map((offset) => {
              const index = (reviewStartIndex + offset) % clientReviews.length;
              return (
                <HomeClientReview
                  key={`${clientReviews[index].id}-${index}`}
                  review={clientReviews[index]}
                  isCenter={offset === 1}
                  className={offset === 1 ? "" : "max-md:hidden"}
                />
              );
            })}
          </div>
          <button
            type="button"
            onClick={() =>
              setReviewStartIndex((prev) => (prev + 1) % clientReviews.length)
            }
            className="p-2 ml-5 max-lg:ml-0 z-10 shrink-0"
            aria-label="Next reviews"
          >
            <img
              src={HomeRightArrow}
              alt="Next reviews arrow"
              loading="lazy"
              decoding="async"
            />
          </button>
        </div>
      </section>
      {/*Snapshots Gallery section */}
      <section className="w-screen">
        <div className="flex items-center justify-between px-28 mt-15 max-lg:flex-col max-lg:items-start max-lg:px-6 max-lg:gap-4">
          <h2 className="text-6xl font-bold w-250 max-[1400px]:w-full max-lg:text-4xl max-md:text-3xl max-lg:w-full">
            Snapshots of{" "}
            <span className="bg-gradient-to-r from-[#36A178] to-[#10B2D4] bg-clip-text text-transparent">
              Experience Crafted
            </span>
          </h2>
        </div>
        <div className="mt-15 flex items-center justify-center max-lg:justify-start max-lg:px-6">
          <div className="grid grid-cols-4 grid-rows-2 gap-6 max-lg:grid-cols-3 max-lg:grid-rows-2 max-md:grid-cols-2 max-md:grid-rows-2 max-lg:gap-4 max-md:gap-3">
            {galleryVisible.map((img, index) => (
              <div
                key={`${img}-${index}`}
                className="h-50 w-50 rounded-2xl overflow-hidden bg-white shadow max-lg:h-36 max-lg:w-full max-md:h-32"
              >
                <img
                  src={img}
                  alt={`Gallery snapshot ${galleryStart + index + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center mt-8 gap-4 px-4 max-md:gap-2 max-lg:mt-6">
          <button
            type="button"
            onClick={() =>
              setGalleryPage((prev) =>
                prev === 0 ? totalGalleryPages - 1 : prev - 1,
              )
            }
            className="p-2 shrink-0 min-h-10 min-w-10"
            aria-label="Previous gallery page"
          >
            <img
              src={HomeLeftArrow}
              alt="Previous gallery page"
              className="h-6 w-6"
              loading="lazy"
              decoding="async"
            />
          </button>
          <Suspense
            fallback={
              <nav
                className="flex items-center gap-3"
                aria-label="SnapShots loading..."
              >
                {Array.from({ length: Math.min(3, totalGalleryPages) }).map(
                  (_, index) => (
                    <span
                      key={`pagination-fallback-${index}`}
                      className="h-9 w-9 rounded-full bg-[#CFEFF4] opacity-60"
                      aria-hidden="true"
                    />
                  ),
                )}
              </nav>
            }
          >
            <HomePagination
              totalPages={totalGalleryPages}
              currentPage={galleryPage}
              onPageChange={setGalleryPage}
            />
          </Suspense>
          <button
            type="button"
            onClick={() =>
              setGalleryPage((prev) =>
                prev === totalGalleryPages - 1 ? 0 : prev + 1,
              )
            }
            className="p-2 shrink-0 min-h-10 min-w-10"
            aria-label="Next gallery page"
          >
            <img
              src={HomeRightArrow}
              alt="Next gallery page"
              className="h-6 w-6"
              loading="lazy"
              decoding="async"
            />
          </button>
        </div>
      </section>
      {/* Partners section */}
      <section className="flex w-screen h-80 items-center mt-5 max-sm:flex-col max-sm:h-auto max-sm:items-center max-sm:gap-6 max-sm:py-8 max-sm:px-6">
        <h2 className="ml-28 text-6xl font-bold w-500 max-[1400px]:ml-6 max-[1400px]:w-full max-lg:ml-0 max-lg:text-4xl max-md:text-2xl max-lg:w-full max-md:basis-full">
          Proudly{" "}
          <span className="bg-gradient-to-r from-[#36A178] to-[#10B2D4] bg-clip-text  text-transparent">
            Supported by
          </span>
        </h2>
        <img
          src={HomeStartup1}
          alt="Startup partner logo"
          className="size-2/3 ml-0 mr-2 max-[1100px]:w-48 max-[1100px]:h-auto max-lg:w-64 max-lg:h-auto max-lg:mr-0 max-md:w-24"
          loading="lazy"
          decoding="async"
        />
        <img
          src={HomeStartup2}
          alt="Startup partner logo"
          className="ml-1 size-2/3 mr-15 max-[1100px]:w-48 max-[1100px]:h-auto max-lg:w-64 max-lg:h-auto max-lg:ml-0 max-lg:mr-0 max-md:w-24"
          loading="lazy"
          decoding="async"
        />
      </section>
      {/* Contact form section */}
      <section className="w-screen h-full mt-5 grid grid-cols-2 gap-10 bg-gradient-to-b from-[#E2E8F0] to-[#ffffff] items-start max-lg:grid-cols-1 max-lg:gap-8 max-lg:px-6 max-lg:py-10">
        <ClientFormContent
          titleContent={"Ready to Experience our "}
          spanContent={"Active Ageing Centre?"}
          para={
            "Take the first step towards a happier, healthier life for your loved ones. Our team is here to guide you every step of the way."
          }
          btnpara={"We typically respond within 24 hours"}
        />
        <div className="flex justify-center max-lg:justify-start">
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-10 text-gray-600">
                Loading...
              </div>
            }
          >
            <ClientForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}

export default Home;
