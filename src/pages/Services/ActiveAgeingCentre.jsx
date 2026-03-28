import React, { Suspense, lazy } from "react";
import ActiveAgeingCenterFor from "../../assets/ActiveAgeingPageimg/ActiveAgeingCenterFor.svg";
import ActiveAgeingCenterForBackground from "../../assets/ActiveAgeingPageimg/ActiveAgeingCenterForBackground.svg";
import ActiveAgeingCenterForBrainIcon from "../../assets/ActiveAgeingPageimg/ActiveAgeingCenterForBrain.svg";
import ActiveAgeingCenterForPeopleIcon from "../../assets/ActiveAgeingPageimg/ActiveAgeingCenterForPeopleIcon.svg";
import ActiveAgeingCenterForPlantIcon from "../../assets/ActiveAgeingPageimg/ActiveAgeingCenterForPlantIcon.svg";
import ActiveAgeingCenterForSupportIcon from "../../assets/ActiveAgeingPageimg/ActiveAgeingCenterForSupport.svg";
import ActiveAgeingCenterPillarBodyIcon from "../../assets/ActiveAgeingPageimg/ActiveAgeingCenterPillarBodyIcon.svg";
import ActiveAgeingCenterPillarBrainIcon from "../../assets/ActiveAgeingPageimg/ActiveAgeingCenterPillarBrainIcon.svg";
import ActiveAgeingCenterPillarFaceMask from "../../assets/ActiveAgeingPageimg/ActiveAgeingCenterPillarFaceMask.svg";
import ActiveAgeingCenterPillarPeopleIcon from "../../assets/ActiveAgeingPageimg/ActiveAgeingCenterPillarPeopleIcon.svg";
import ActiveAgeingCenterPillarStarIcon from "../../assets/ActiveAgeingPageimg/ActiveAgeingCenterPillarStarIcon.svg";
import ActiveAgeingHeroFamily from "../../assets/ActiveAgeingPageimg/ActiveAgeingHeroFamily.svg";
import ActiveAgeingHeroHeartIcon from "../../assets/ActiveAgeingPageimg/ActiveAgeingHeroHeartIcon.svg";
import ActiveAgeingWhyChooseHeartIcon from "../../assets/ActiveAgeingPageimg/ActiveAgeingWhyChooseHeartIcon.svg";
import ActiveAgeingWhyChooseGaurdIcon from "../../assets/ActiveAgeingPageimg/ActiveAgeingWhyChooseGaurdIcon.svg.svg";
import ActiveAgeingWhyChooseStarIcon from "../../assets/ActiveAgeingPageimg/ActiveAgeingWhyChooseStarIcon.svg.svg";
import ActiveAgeingWhyChooseLarge from "../../assets/ActiveAgeingPageimg/ActiveAgeingWhyChooseLarge.svg";
import ActiveAgeingWhyChooseSmall from "../../assets/ActiveAgeingPageimg/ActiveAgeingWhyChooseSmall.svg";
import ActiveAgeingCenterForCard from "../../components/ActiveAgeingCenterForCard.jsx";
import ActiveAgeingCenterPillars from "../../components/ActiveAgeingCenterPillars.jsx";
import ActiveAgeingWhyChoose from "../../components/ActiveAgeingWhyChoose.jsx";
import ClientFormContent from "../../components/ClientFormContent.jsx";
const ClientForm = lazy(() => import("../../components/ClientForm.jsx"));
function ActiveAgeingCentre() {
  const centerFor = [
    {
      icon: ActiveAgeingCenterForPeopleIcon,
      title: "Seek Social Connection",
      content:
        "Exchange stories, and build lasting friendships within a warm, supportive circle of like-minded seniors.",
    },
    {
      icon: ActiveAgeingCenterForBrainIcon,
      title: "Value Mental Sharpness",
      content:
        "Stay ahead of cognitive changes with expertly curated activities, brain games, and skill-building sessions designed to keep the mind agile.",
    },
    {
      icon: ActiveAgeingCenterForSupportIcon,
      title: "Prioritize Wellness",
      content:
        "Maintain physical independence, and daily vitality through gentle, professionally guided movements tailored for senior health.",
    },
    {
      icon: ActiveAgeingCenterForPlantIcon,
      title: "Embrace New Horizons",
      content:
        "Rediscover the joy of discovery. Whether mastering digital tools, exploring arts, or picking up a new hobby.",
    },
  ];
  const centerPillar = [
    {
      mainContent:
        "Proven brain games, and exercises to enhance memory and focus.",
      subContent: "Cognitive Vitality",
      subIcon: ActiveAgeingCenterPillarBrainIcon,
    },
    {
      mainContent:
        "Special fitness sessions like Zumba, yoga, and mobility exercises to maintain independence.",
      subContent: "Physical Wellness",
      subIcon: ActiveAgeingCenterPillarBodyIcon,
    },
    {
      mainContent:
        "A vibrant community setting to foster friendships, and prevent loneliness.",
      subContent: "Social Connection",
      subIcon: ActiveAgeingCenterPillarPeopleIcon,
    },
    {
      mainContent:
        "Workshops in art, music, drama, and storytelling to enhance social skills, and self awareness.",
      subContent: "Creative Expression",
      subIcon: ActiveAgeingCenterPillarFaceMask,
    },
    {
      mainContent:
        "Contribute to the society by engaging our seniors in social service initiatives.",
      subContent: "Community Initiatives",
      subIcon: ActiveAgeingCenterPillarStarIcon,
    },
  ];
  const whyChoose = [
    {
      icon: ActiveAgeingWhyChooseGaurdIcon,
      title: "Expert Supervision",
      content:
        "Our programs are designed by professionals specializing in senior support.",
    },
    {
      icon: ActiveAgeingWhyChooseHeartIcon,
      title: "Safe & Inclusive Environment",
      content:
        "Our centre offers a space where everyone feels at home, we ensure our seniors stay safe, and comfortable.",
    },
    {
      icon: ActiveAgeingWhyChooseStarIcon,
      title: "A Complete Approach",
      content:
        "Good health starts with a happy mind, we integrate cognitive stimulation, and emotional support into everything we do.",
    },
  ];
  return (
    <>
      <header className="relative w-full flex flex-col items-center justify-center gap-8 px-4 sm:px-6 lg:px-12 py-10 lg:py-0 lg:flex-row lg:h-150">
        {/* Hero content */}
        <section className="w-full max-w-3xl p-5 flex flex-col justify-center lg:ml-8">
          <h1 className="mt-2 font-extrabold gap-4 text-center lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-7xl relative max-w-[88vw]">
            <span>Active </span>
            <span className="bg-gradient-to-r from-[#489740] via-[#32a176] to-[#10B2D4] bg-clip-text text-transparent">
              Ageing Centre
            </span>
          </h1>
          <p className="p-2 text-center lg:text-left text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mt-6 mb-8">
            Our Active Ageing Centre is a dedicated space designed for seniors
            to stay physically active, mentally sharp, and socially connected.
            Backed by the Easedementia framework, we provide a gentle
            environment where every senior is empowered to age with dignity,
            joy, and purpose.
          </p>
          <button className="self-center lg:self-start bg-[#33A3A4] text-white m-2 w-45 text-sm p-2 font-medium hover:bg-[#2e8e90] duration-300 h-12 rounded-full">
            ??Join Our Community ??
          </button>
        </section>
        {/* Hero image */}
        <figure className="w-full flex justify-center items-center">
          <img
            src={ActiveAgeingHeroFamily}
            alt="Happy family illustration"
            loading="eager"
            fetchPriority="high"
            className="w-full max-w-xl m-2 object-cover rounded-2xl h-auto"
          />
        </figure>
        {/* Hero stat badge */}
        <aside className="h-15 w-40 absolute left-1/2 -translate-x-1/2 bottom-6 lg:bottom-30 lg:left-[58%] bg-white shadow-gray-500 p-2 gap-2 shadow-xs rounded-2xl flex items-center">
          <img
            src={ActiveAgeingHeroHeartIcon}
            alt="Active members icon"
            loading="eager"
            fetchPriority="high"
            className="h-10 w-10"
          />

          <div className="flex flex-col leading-tight">
            <span className="font-extrabold">500+</span>
            <p className="text-[12px] font-medium">Active members</p>
          </div>
        </aside>
      </header>
      <main>
        {/* Center For section */}
        <section className="w-full flex flex-col gap-8 bg-gradient-to-b from-[#E2E8F0] to-[#ffffff] px-4 sm:px-6 lg:px-12 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full ml-0 flex flex-col lg:ml-8 lg:w-2/5">
            <h2 className="w-full max-w-xl p-2 text-center lg:text-left sm:text-4xl md:text-5xl lg:text-5xl font-bold mt-2">
              Who is the{" "}
              <span className="bg-gradient-to-r from-[#489740] via-[#32a176] to-[#10B2D4] bg-clip-text text-transparent">
                Active Ageing Center{" "}
              </span>
              For?
            </h2>
            <figure>
              <img
                src={ActiveAgeingCenterFor}
                alt="Active Ageing Center illustration"
                loading="lazy"
                decoding="async"
                className="mt-5 object-cover w-full max-w-[90%] sm:max-w-xl rounded-2xl mx-auto lg:mx-0"
              />
            </figure>
          </div>
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-4 place-items-center place-content-center lg:w-1/2">
            {centerFor.map((card) => (
              <ActiveAgeingCenterForCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                content={card.content}
              />
            ))}
          </div>
        </section>
        {/* Pillars section */}
        <section className="flex flex-col items-center mt-10 w-full bg-gradient-to-b from-[#ffffff] via-[#8cd1cd] to-[#3EB4AE] px-4 sm:px-6 lg:px-12 py-10">
          <h2 className="w-full max-w-2xl mt-4 p-2 text-center lg:text-left sm:text-4xl md:text-5xl lg:text-5xl font-bold">
            Active Ageing Centre{" "}
            <span className="bg-gradient-to-r from-[#489740] via-[#32a176] to-[#10B2D4] bg-clip-text text-transparent">
              Pillars{" "}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-medium max-w-3xl text-center text-gray-800 mt-4">
            We focus on key areas to ensure a well-rounded experience for our
            members.
          </p>
          <div className="flex flex-col items-center justify-center w-full mt-6">
            {centerPillar.map((item) => (
              <ActiveAgeingCenterPillars
                key={item.subContent}
                mainContent={item.mainContent}
                subContent={item.subContent}
                subIcon={item.subIcon}
              />
            ))}
          </div>
        </section>
        {/* Why Choose section */}
        <section className="w-full h-auto lg:h-180 flex flex-col gap-8 bg-white px-4 sm:px-6 lg:px-12 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative ml-0 lg:ml-8 flex flex-col w-full max-w-2xl items-center lg:items-start">
            <h2 className="w-full p-2 text-center lg:text-left sm:text-4xl md:text-5xl lg:text-5xl font-bold ">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#489740] via-[#32a176] to-[#10B2D4] bg-clip-text text-transparent">
                Happymindz?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-medium text-center lg:text-left p-5 text-gray-800 mt-2 max-w-2xl">
              We focus on key areas to ensure a well-rounded experience for our
              members.
            </p>
            {/* Why Choose illustration */}
            <figure>
              <img
                src={ActiveAgeingWhyChooseLarge}
                alt="Why choose Happymindz illustration"
                loading="lazy"
                decoding="async"
                className="w-full max-w-[90%] sm:max-w-xl lg:max-w-lg xl:max-w-xl h-auto object-contain mx-auto lg:mx-0"
              />
              <img
                src={ActiveAgeingWhyChooseSmall}
                alt="Why choose overlay illustration"
                loading="lazy"
                decoding="async"
                className="hidden lg:block absolute -bottom-20 right-10 w-32 sm:w-48 md:w-56 lg:w-80 xl:w-100 h-auto object-contain"
              />
            </figure>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2 place-items-center place-content-center lg:w-1/2">
            {whyChoose.map((item) => (
              <ActiveAgeingWhyChoose
                key={item.title}
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </section>
        {/* Contact form section */}
        <section className="w-full h-170 grid grid-cols-2 gap-10 bg-gradient-to-b from-[#E2E8F0] to-[#ffffff] items-start max-sm:grid-cols-1 max-sm:gap-8 max-sm:h-auto max-sm:px-4 max-sm:py-8 px-6 py-10">
          <ClientFormContent
            titleContent={"Ready to Rediscover Your "}
            spanContent={"Spark?"}
            para={
            "Take the first step towards a happier, healthier life for your loved ones. Our team is here to guide you every step of the way."   
            }
            btnpara={"We typically respond within 24 hours"}
          />
          <div className="flex justify-center max-sm:justify-start">
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
    </>
  );
}

export default ActiveAgeingCentre;
