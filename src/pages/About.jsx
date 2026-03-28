import { React, useState } from "react";
import AboutpageStar1 from "../assets/AboutPageimg/AboutpageStar1.svg";
import AboutpageStar2 from "../assets/AboutPageimg/AboutpageStar2.svg";
import AboutpageHero1 from "../assets/AboutPageimg/AboutpageHero1.svg";
import AboutpageHero2 from "../assets/AboutPageimg/AboutpageHero2.svg";
import AboutOurValue from "../components/AboutOurValue.jsx";
import AboutPageCampassion from "../assets/AboutPageimg/AboutPageCampassion.svg";
import AboutpageDottedcircle from "../assets/AboutPageimg/AboutpageDottedcircle.svg";
import AboutpageVision from "../assets/AboutPageimg/AboutpageVision.svg";
import AboutpageCoFounder from "../assets/AboutPageimg/AboutpageCoFounder.svg";
import AboutpageQuoteIcon from "../assets/AboutPageimg/AboutpageQuoteIcon.svg";
import AboutpageMemberProfile from "../assets/AboutPageimg/AboutpageMemberProfile.svg";
import AboutMeetTeam from "../components/AboutMeetTeam.jsx";

import ClientForm from "../components/ClientForm.jsx";
import ClientFormContent from "../components/ClientFormContent.jsx";

function About() {
  // Values displayed in the "Our Values" section
  const valueParameters = [
    {
      valuesTitle: "Compassion",
      image: AboutPageCampassion,
      valuesContent:
        "We believe every elder deserves care, dignity, and understanding. Our compassionate approach focuses on listening, supporting, and standing beside seniors and their families at every step. By combining empathy with thoughtful solutions, we aim to create a safe, respectful environment where elders can live with comfort, confidence, and independence.",
    },
    {
      valuesTitle: "Innovation",
      image: AboutPageCampassion,
      valuesContent:
        "Innovation is the practical implementation of ideas that result in the introduction of new goods or services or improvement in offering goods or services. ISO TC 279 in the standard ISO 56000:2020 defines innovation ",
    },
    {
      valuesTitle: "Accountability",
      image: AboutPageCampassion,
      valuesContent:
        "In ethics and governance, accountability is equated with answerability, culpability, liability, and the expectation of account-giving. As in an aspect of governance, it has been central to discussions related to problems in the public sector, nonprofit, private, and individual contexts.",
    },
    {
      valuesTitle: "Empowerment",
      image: AboutPageCampassion,
      valuesContent:
        "Empowerment is the degree of autonomy and self-determination in people and in communities. This enables them to represent their interests in a responsible and self-determined way, acting on their own authority.",
    },
    {
      valuesTitle: "Empathy",
      image: AboutPageCampassion,
      valuesContent:
        "Empathy is generally described as the ability to perceive another person's perspective, to understand, feel, and possibly share and respond to their experience.",
    },
    {
      valuesTitle: "Integrity",
      image: AboutPageCampassion,
      valuesContent:
        "Integrity is the quality of being honest, ethical, and having strong moral principles that are consistently upheld, even when no one is watching. It implies wholeness, where actions align with words and values. Key synonyms include honesty, honor, righteousness, and trustworthiness, while it represents a rather than just a single action. ",
    },
  ];

  // Currently selected value item
  const [selectedValue, setSelectedValue] = useState(valueParameters[0]);

  // Team members displayed in the "Meet Our Team" section
  const teamMembers = [
    {
      name: "Aarav",
      designation: "Co-Founder & CEO",
      linkedinUrl: "https://www.linkedin.com/",
      imageSrc: AboutpageMemberProfile,
    },
    {
      name: "Meera",
      designation: "Chief Operations Officer",
      linkedinUrl: "https://www.linkedin.com/",
      imageSrc: AboutpageMemberProfile,
    },
    {
      name: "josph",
      designation: "Head of Care",
      linkedinUrl: "https://www.linkedin.com/",
      imageSrc: AboutpageMemberProfile,
    },
    {
      name: "AK",
      designation: "Product & Partnerships",
      linkedinUrl: "https://www.linkedin.com/",
      imageSrc: AboutpageMemberProfile,
    },
  ];

  // Update active value tab selection
  const handleValueSelect = (valueObject) => {
    setSelectedValue(valueObject);
  };

  return (
    <main className="w-screen h-4/5 overflow-x-hidden">
      {/* Hero / About intro section */}
      <header className="about-us grid place-items-center w-full relative mt-10 rounded-b-3xl min-h-[950px] pb-12 max-lg:min-h-[750px] max-md:min-h-[650px] max-sm:min-h-[600px] max-md:px-4">
        <h1 className="mx-auto w-2xs inline-flex items-center justify-center gap-4 text-6xl font-bold max-lg:text-3xl max-md:text-2xl relative max-lg:w-full max-lg:max-w-[88vw] max-lg:mx-auto">
          <span>About</span>
          <span className="bg-gradient-to-r from-[#36A178] to-[#10B2D4] bg-clip-text text-transparent">
            Us
          </span>
          <img
            src={AboutpageStar1}
            alt="Decorative star accent"
            className="absolute left-70 top-0 max-lg:left-auto max-lg:right-6 max-lg:top-0 max-lg:w-4 max-lg:h-4 max-md:right-2"
            loading="eager" fetchPriority="high"
          />
          <img
            src={AboutpageStar2}
            alt="Decorative star accent"
            className="absolute left-78 top-6 max-lg:left-auto max-lg:right-2 max-lg:top-4 max-lg:w-3 max-lg:h-3"
            loading="eager" fetchPriority="high"
          />
        </h1>
        <p className="text-2xl mx-auto mt-3 w-4xl text-center text-gray-700 font-body font-semibold max-lg:text-lg max-md:text-base max-lg:max-w-[88vw] max-lg:mx-auto">
          Your One-Stop Partner to Age Joyfully
        </p>
        <div className="bg-gradient-to-b from-[#ffffff] via-[#3AB3AC] to-[#3AB3AC] grid place-items-center rounded-4xl w-full max-w-none px-4 max-lg:px-3">
          <div className="flex items-center overflow-hidden justify-center w-full mt-10 gap-2 max-lg:flex-wrap max-lg:gap-3 max-md:gap-2 max-sm:gap-2 max-lg:max-w-[88vw] max-lg:mx-auto">
            <img
              src={AboutpageHero1}
              alt="Seniors participation group activities"
              className="object-contain w-2xs max-lg:w-32 max-md:w-28 max-lg:mx-auto"
              loading="eager" fetchPriority="high"
            />
            <img
              src={AboutpageHero2}
              alt="Seniors participation group activities"
              className="object-contain w-2xs max-lg:w-32 max-md:w-28 max-lg:mx-auto"
              loading="eager" fetchPriority="high"
            />
            <img
              src={AboutpageHero1}
              alt="Seniors participation group activities"
              className="object-contain w-2xs max-lg:w-32 max-md:w-28 max-lg:mx-auto"
              loading="eager" fetchPriority="high"
            />
            <img
              src={AboutpageHero2}
              alt="Seniors participation group activities"
              className="object-contain w-2xs max-lg:w-32 max-md:w-28 max-lg:mx-auto"
              loading="eager" fetchPriority="high"
            />
          </div>

          <h2 className="text-5xl mt-8 text-center  text-white font-semibold w-6xl max-lg:text-xl max-md:text-lg max-lg:max-w-[88vw] max-lg:mx-auto">
            Empowering our seniors to live their best lives through community,
            healthcare, and joy.
          </h2>
          <p className="text-white text-xl font-medium w-6xl max-lg:text-base max-md:text-sm mt-8 mb-15 max-lg:max-w-[88vw] max-lg:mx-auto">
            At Happymindz, we believe the best version of yourself is waiting at
            any age. We redefine senior living by combining wellness and
            healthcare with the joy of travel and community. For families near
            and far, we offer the security and peace of mind knowing your loved
            ones are living their lives to the fullest.
            <br /> <br />
            We understand the challenges families face when coordinating care
            across different locations. That's why we've curated an extensive,
            trusted network of expert caregivers and healthcare professionals.
            Our mission is to provide a one-stop solution that brings peace of
            mind to families and a renewed sense of purpose for our seniors.
          </p>
        </div>
      </header>

      {/* Our Values section */}
      <section className="our-values w-full max-h-min flex flex-col items-center justify-center py-10 max-sm:px-4">
        <h2 className="text-6xl font-bold mt-2 text-center max-lg:text-4xl max-md:text-3xl max-md:max-w-[90vw] max-[360px]:text-[22px] max-[360px]:leading-tight">
          Our{" "}
          <span className="bg-gradient-to-r from-[#36A178] to-[#10B2D4] bg-clip-text text-transparent">
            Values
          </span>
        </h2>
        <div className="mt-10 w-full max-w-6xl text-center rounded-3xl border border-gray-300 text-gray-800 font-semibold overflow-hidden bg-gray-300 flex flex-wrap md:flex-nowrap gap-px max-sm:grid max-sm:grid-cols-2 max-sm:gap-px">
          {valueParameters.map((valueParameter) => {
            const isActive =
              selectedValue?.valuesTitle === valueParameter.valuesTitle;
            return (
              <div
                key={valueParameter.valuesTitle}
                className={`px-3 py-2 w-full md:w-auto md:flex-1 text-center duration-500 bg-white text-sm md:text-base lg:text-sm ${
                  isActive
                    ? "!text-white !bg-[#3AB3AC]"
                    : "hover:text-white hover:bg-[#3AB3AC]"
                }`}
              >
                <button
                  type="button"
                  className={`w-full ${isActive ? "text-white" : ""}`}
                  onClick={() => handleValueSelect(valueParameter)}
                >
                  {valueParameter.valuesTitle}
                </button>
              </div>
            );
          })}
        </div>
        <AboutOurValue
          valuesTitle={selectedValue.valuesTitle}
          image={selectedValue.image}
          valuesContent={selectedValue.valuesContent}
        />
      </section>
      {/* Vision and Mission section */}
      <section className="relative bg-gradient-to-b from-[#FBF1BF] to-[#ffffff] w-full h-190 flex flex-col items-center justify-center max-lg:h-auto max-lg:py-10">
        <img
          src={AboutpageDottedcircle}
          alt="Decorative dotted circle background"
          className="absolute object-fit h-160 w-[1800px] left-5 mt-25 z-0 hidden lg:block"
          loading="lazy" decoding="async"
        />
        <div className="absolute text-center w-[300px] h-[300px] break-words flex flex-col items-center justify-center overflow-hidden rounded-full bg-white shadow-xl z-10 shadow-gray-700 px-6 py-4 left-248 top-35 max-lg:static max-lg:mb-6 max-lg:mx-auto max-lg:w-[260px] max-lg:h-[260px]">
          <h3 className="font-bold text-2xl mb-4">Our Vision</h3>
          <p className="font-semibold text-gray-800">
            To be the leading force in India for empowering the elder community
            to live their most vibrant and independent lives.
          </p>
        </div>
        <img
          src={AboutpageVision}
          alt="Team vision illustration"
          className="h-75 rounded-2xl w-130 object-cover z-12 absolute top-30 left-120 max-lg:static max-lg:mb-6 max-lg:w-[260px] max-lg:h-auto max-lg:mx-auto"
          loading="lazy" decoding="async"
        />
        <div className="absolute bg-gradient-to-b from-[#3AB3AC] to-[#ffffff] w-[300px] h-[300px] text-center break-words overflow-hidden rounded-full bg-white shadow-xl z-14 shadow-gray-700 left-150 top-95 flex flex-col items-center justify-center px-6 py-4 max-lg:static max-lg:mx-auto max-lg:w-[260px] max-lg:h-[260px]">
          <h3 className="font-bold text-2xl mb-4">Our Mission</h3>
          <p className="font-semibold text-gray-800">
            To brighten the journey of active ageing by providing accessible,
            tech-enabled, and expertly coordinated support that honors our
            seniors and supports their families.
          </p>
        </div>
      </section>
      {/* Founder note section */}
      <section className="relative w-full mt-5 flex flex-col md:flex-row items-center justify-center gap-6 py-8 md:h-150 max-md:h-auto max-sm:py-5 max-sm:px-4 md:px-6">
        <img
          src={AboutpageCoFounder}
          alt="Co-founder portrait"
          className="z-5 rounded-2xl object-cover w-[200px] sm:w-[230px] md:w-[260px] lg:w-[290px] xl:w-[320px] h-auto md:static lg:absolute lg:left-45 lg:top-15 max-md:mb-4"
          loading="lazy" decoding="async"
        />
        <div className="relative w-full max-w-[980px] md:w-full md:max-w-[720px] lg:max-w-[900px] xl:max-w-[980px] md:h-90 rounded-2xl bg-[#65C4BF] text-start p-5 pl-4 sm:pl-6 md:pl-8 lg:pl-14 xl:pl-16">
          <img
            src={AboutpageQuoteIcon}
            alt="Quote icon"
            className="size-8 sm:size-9 md:size-10 mb-3 md:mb-0 md:absolute md:top-8 md:left-6 lg:top-10 lg:left-45"
            loading="lazy" decoding="async"
          />
          <h3 className="text-2xl sm:text-3xl font-bold mt-2 sm:mt-4 p-2 ml-0 sm:ml-16 md:ml-28 lg:ml-50">
            A Note from Our Founder
          </h3>
          <p className="text-base sm:text-lg md:text-xl mt-2 p-2 ml-0 sm:ml-16 md:ml-28 lg:ml-50 h-auto md:h-50 w-full md:w-xl">
            We believe the right support changes everything. By blending
            specialized interventions, healthcare with the joy of travel, and a
            vibrant community, we empower seniors to rediscover their best
            selves. At Happymindz, we ensure your loved ones don't just age but
            they bloom.”
          </p>
          <h4 className="text-base sm:text-lg md:text-xl p-2 font-bold ml-0 sm:ml-16 md:ml-28 lg:ml-50">
            Jolly Jose Pynadath
          </h4>
        </div>
      </section>
      {/* Meet Our Team section */}
      <section className="w-full h-180 mt-5 text-center flex flex-col items-center justify-center max-lg:h-auto max-lg:py-8 max-sm:px-4">
        <h2 className="text-6xl font-bold mt-10 text-center max-lg:text-4xl max-md:text-3xl max-md:max-w-[90vw] max-[360px]:text-[22px] max-[360px]:leading-tight">
          Meet{" "}
          <span className="bg-gradient-to-r from-[#36A178] to-[#10B2D4] bg-clip-text text-transparent">
            Our Team
          </span>
        </h2>
        <p className="text-3xl text-gray-700 mt-2 p-4 max-md:text-xl">
          Teamwork makes the dream work
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {teamMembers.map((member) => (
            <AboutMeetTeam
              key={member.name}
              linkedinUrl={member.linkedinUrl}
              name={member.name}
              designation={member.designation}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </section>
      {/* Contact form section */}
      <section className="w-full h-170 grid grid-cols-2 gap-10 bg-gradient-to-b from-[#E2E8F0] to-[#ffffff] items-start max-sm:grid-cols-1 max-sm:gap-8 max-sm:h-auto max-sm:px-4 max-sm:py-8 px-6 py-10">
        <ClientFormContent
          titleContent={"Get "}
          spanContent={"in Touch"}
          para={
            "Take the first step towards a happier, healthier life for your loved ones. Our team is here to guide you every step of the way."
          }
          btnpara={"We typically respond within 24 hours"}
        />
        <div className="flex justify-center max-sm:justify-start">
          <ClientForm />
        </div>
      </section>
    </main>
  );
}

export default About;
