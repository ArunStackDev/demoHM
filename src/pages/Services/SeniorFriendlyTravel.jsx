import React, { useRef, useState } from "react";
import SeniorTravelHeroTourPicThree from "../../assets/SeniorTravelPageimg/SeniorTravelHeroTourPicThree.svg";
import SeniorTravelHeroTourPicOne from "../../assets/SeniorTravelPageimg/SeniorTravelHeroTourPicOne.svg";
import SeniorTravelHeroTourPicTwo from "../../assets/SeniorTravelPageimg/SeniorTravelHeroTourPicTwo.svg";
import SeniorTravelHeroBackground from "../../assets/SeniorTravelPageimg/SeniorTravelHeroBackground.svg";
import SeniorTravelAdvantagesGraphicDiagram from "../../assets/SeniorTravelPageimg/SeniorTravelAdvantagesGraphicDiagram.svg";
import SeniorTravelAdvantagesLeafIcon from "../../assets/SeniorTravelPageimg/SeniorTravelAdvantagesLeafIcon.svg";
import SeniorTravelAdvantagesPlaneIconc from "../../assets/SeniorTravelPageimg/SeniorTravelAdvantagesPlaneIconc.svg";
import SeniorTravelAdvantagesTourPic from "../../assets/SeniorTravelPageimg/SeniorTravelAdvantagesTourPic.svg";
import SeniorFriendlyTravelExploration from "../../components/SeniorFriendlyTravelExploration.jsx";
import WhyChoose from "../../components/WhyChoose.jsx";
import SeniorTravelVideo from "../../assets/SeniorTravelPageimg/SeniorTravelVideo.mp4";
import ClientFormContent from "../../components/ClientFormContent.jsx";
import ClientForm from "../../components/ClientForm.jsx";
import VideoPlayIcon from "../../assets/SeniorTravelPageimg/VideoPlayIcon.svg";
import Seo from "../../components/Seo.jsx";
function SeniorFriendlyTravel() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  const exploration = [
    {
      title: "Customized Trips",
      content:
        "Have a specific destination in mind for your group of friends? We make it happen.",
    },
    {
      title: "End-to-End Planning",
      content:
        "From flight logistics, visa assistance to selecting senior-friendly, accessible stays, we handle it all.",
    },
    {
      title: "On-Ground Support",
      content:
        "Each group is supported by our expert team, ensuring comfort, care, and overall well-being always.",
    },
    {
      title: "Stress-Free Journey",
      content:
        "No rushed schedules, just meaningful moments, and plenty of time to soak it all in.",
    },
    {
      title: "Better Together",
      content:
        "From just sightseeing to shared celebration of independence, joy, and friendships.",
    },
  ];
  const advantages = [
    {
      icon: SeniorTravelAdvantagesLeafIcon,
      title: "Peace of Mind",
      content:
        "Regular updates to families back home, so they can share in the joy without the worry.",
    },
    {
      icon: SeniorTravelAdvantagesPlaneIconc,
      title: "Seamless Travel Support",
      content:
        "Guided by our active ageing specialists, ensuring a smooth and comfortable journey, helping individuals embrace active, healthy & fulfilling ageing.",
    },
  ];
  return (
    <div className="w-screen max-w-[100vw]">
      <Seo
        title="Senior Friendly Travel"
        description="Senior-friendly travel experiences with curated trips, safety-first planning, and caring companions."
        schema="service"
        schemaName="Senior Friendly Travel"
      />
      {/* Hero Section */}
      <header
        className="relative w-full max-w-[100vw] overflow-x-hidden flex flex-col items-center justify-center gap-8 px-4 sm:px-6 lg:px-12 lg:flex-row lg:h-170 bg-cover bg-center max-lg:gap-6 max-md:gap-4 brightness-98"
        style={{ backgroundImage: `url(${SeniorTravelHeroBackground})` }}
      >
        {/* Hero content */}
        <section className="w-full  max-w-3xl flex flex-col justify-center lg:ml-8">
          <h1 className="mt-2 ml-8 font-extrabold gap-4 text-center lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-7xl relative max-lg:ml-0">
            <span>Senior Friendly </span>
            <span className="bg-gradient-to-r from-[#489740] via-[#32a176] to-[#10B2D4] bg-clip-text text-transparent">
              Travel
            </span>
          </h1>
          <p className="p-2 ml-8 text-center  w-xl lg:text-left text-gray-800 text-xl font-medium  mt-6 mb-8 max-lg:ml-0">
            Our travel programs are designed to turn dreams into reality by
            removing logistical hurdles, and addressing the support concerns
            that often keep seniors at home. We curate journeys that are filled
            with fun, prioritizing well-being at every step.
          </p>
        </section>
        {/* Hero image */}
        <figure className="w-full max-w-2xl h-full flex justify-center items-center  relative  max-lg:mt-2 max-md:mt-0 max-md:pb-6 max-sm:pb-10">
          <img
            src={SeniorTravelHeroTourPicOne}
            alt="Senior-friendly travel hero background illustration"
            loading="eager"
            fetchPriority="high"
            className="w-full max-w-xl  m-2 object-cover rounded-2xl h-65 max-md:max-w-md max-sm:max-w-xs"
          />
          <img
            src={SeniorTravelHeroTourPicTwo}
            alt="Travel moment"
            loading="eager"
            fetchPriority="high"
            className="absolute w-65 h-40  object-cover rounded-2xl -rotate-5 -left-25 top-45 max-md:w-28 max-md:h-24 max-md:top-4 max-md:-left-1 max-sm:w-22 max-sm:h-18 max-sm:top-3 max-sm:left-0"
          />
          <img
            src={SeniorTravelHeroTourPicThree}
            alt="Senior travel group"
            loading="eager"
            fetchPriority="high"
            className="absolute w-65 h-65 object-cover rotate-4 rounded-3xl left-5 top-90 max-md:w-32 max-md:h-32 max-md:left-2 max-md:top-60 max-sm:w-24 max-sm:h-24 max-sm:left-1 max-sm:top-48"
          />
        </figure>
      </header>
      <main className="w-full max-w-[100vw] overflow-x-hidden min-h-full">
        {/* Exploration Section */}
        <section className="w-full max-w-[100vw] h-195 bg-gradient-to-b from-[#ffffff] via-[#d2f8f6] to-[#4CBAB4] flex flex-col items-center max-lg:h-auto max-lg:pb-10">
          <div className="w-full  lg:ml-22 mt-15 px-4 sm:px-6 lg:px-0">
            <h2 className="w-full ml-20   max-w-8xl mb-5 p-2  text-center lg:text-left sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 max-lg:ml-0 max-lg:max-w-2xl">
              The Happymindz Way{" "}
              <span className="bg-gradient-to-r from-[#489740] via-[#32a176] to-[#10B2D4] bg-clip-text text-transparent">
                Effortless Exploration
              </span>
            </h2>
            <p className="p-2 ml-20  text-center lg:text-left text-gray-700 text-2xl font-semibold  max-w-7xl mt-6 mb-2 max-lg:ml-0 max-lg:max-w-3xl">
              More than just booking trips. We curate experiences where you can
              focus on the destination while we manage every detail.
            </p>
          </div>
          <div className="flex   flex-wrap justify-center gap-4 mt-5 w-full max-sm:gap-3 max-sm:mt-6">
            {exploration.map((items, index) => {
              return (
                <SeniorFriendlyTravelExploration
                  key={`exploration-${index}`}
                  title={items.title}
                  content={items.content}
                />
              );
            })}
          </div>
        </section>
        {/* Advantages Section */}
        <section className="flex flex-col items-center w-full h-180 max-lg:h-auto max-lg:pb-10">
          <h2 className="w-full  max-w-4xl mb-2 mt-20 p-2  text-center lg:text-left sm:text-4xl md:text-5xl lg:text-6xl font-bold ">
            The Happymindz{" "}
            <span className="bg-gradient-to-r from-[#489740] via-[#32a176] to-[#10B2D4] bg-clip-text text-transparent">
              Advantages
            </span>
          </h2>
          <p className="p-2 mt-2 mb-2  text-center lg:text-left text-gray-800 text-2xl font-medium max-w-6xl">
            We bridge the gap for children, and families who want their loved
            ones to see the world but worry about the risks.
          </p>
          <div className="flex mt-5 justify-center  h-120 w-full max-lg:flex-col max-lg:items-center max-lg:h-auto">
            <figure className=" m-5  mr-10 mt-5  h-90 rounded-3xl max-lg:mr-0 max-lg:h-auto max-lg:w-full max-lg:flex max-lg:justify-center">
              <img
                src={SeniorTravelAdvantagesTourPic}
                alt="Senior-friendly tour experience"
                loading="lazy"
                decoding="async"
                className="w-110 h-100 object-cover rounded-3xl max-lg:w-[90%] max-lg:h-auto max-md:w-full"
              />
            </figure>
            <div className=" h-100 w-120  mt-5  ml-10 flex flex-col  items-center justify-center max-lg:w-full max-lg:h-auto max-lg:ml-0 max-lg:mt-6 max-lg:px-4">
              {advantages.map((items, index) => (
                <WhyChoose
                  key={`advantage-${index}`}
                  icon={items.icon}
                  title={items.title}
                  content={items.content}
                />
              ))}
              <img
                src={SeniorTravelAdvantagesGraphicDiagram}
                alt="Tourists travel graphic diagram"
                loading="lazy"
                decoding="async"
                className=" w-110 h-50 object-cover max-lg:w-[90%] max-lg:h-auto max-md:w-full"
              />
            </div>
          </div>
        </section>
        {/* Experience Video Section */}
        <section className="flex flex-col mt-20 items-center w-full h-200 max-lg:h-auto max-lg:pb-10">
          <h2 className="w-full max-w-5xl mb-2 mt-20 p-2 text-center sm:text-4xl md:text-5xl lg:text-6xl font-bold mx-auto">
            <span className="bg-gradient-to-r from-[#489740] via-[#32a176] to-[#10B2D4] bg-clip-text text-transparent">
              Experience{" "}
            </span>
            the World{" "}
            <span className="bg-gradient-to-r from-[#489740] via-[#32a176] to-[#10B2D4] bg-clip-text text-transparent">
              Your Way
            </span>
          </h2>
          <p className="p-2 mt-2 mb-2 text-center text-gray-800 text-2xl font-medium max-w-6xl">
            Our team ensures you don’t just visit a destination but truly bloom
            from experiences.
          </p>
          <div className="relative mt-5 w-280 max-lg:w-[95%] max-md:w-full">
            <video
              ref={videoRef}
              className="w-full h-120 object-cover rounded-3xl max-lg:h-auto"
              preload="metadata"
              playsInline
              controls
              controlsList="nodownload"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
              aria-label="Video playback"
            >
              <source src={SeniorTravelVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <button
                type="button"
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play video"
              >
                <img
                  src={VideoPlayIcon}
                  alt="Play video"
                  className="h-16 w-16"
                />
              </button>
            )}
          </div>
        </section>
      </main>
      {/* Contact Form Section */}
      <section className="w-full h-190 grid grid-cols-2 gap-10 bg-gradient-to-b from-[#E2E8F0] to-[#ffffff] items-start max-md:grid-cols-1 max-md:gap-8 max-md:h-auto max-md:px-4 max-md:py-8 px-6 py-10">
        <ClientFormContent
          titleContent={"Got a destination in mind? "}
          spanContent={"Let’s make it happen."}
          para={
            "Take the first step towards a happier, healthier life for your loved ones. Our team is here to guide you every step of the way."
          }
          btnpara={"We typically respond within 24 hours"}
        />
        <div className="flex justify-center max-sm:justify-start">
          <ClientForm />
        </div>
      </section>
    </div>
  );
}

export default SeniorFriendlyTravel;
