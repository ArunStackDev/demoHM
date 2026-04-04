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
import AboutPageOurValueBackground from "../assets/AboutPageimg/AboutPageOurValueBackground.svg";
import Seo from "../components/Seo.jsx";

import ClientForm from "../components/ClientFormLazy.jsx";
import ClientFormContent from "../components/ClientFormContent.jsx";

function About() {
  // Values displayed in the "Our Values" section
  const valueParameters = [
    {
      valuesTitle: "Compassion",
      image: AboutPageCampassion,
      valuesContent:
        "Compassion at Happymindz is a commitment to proactive support. We offer proactive support that empowers seniors and their families. By prioritizing dignity and practical solutions, we ensure every individual feels seen, valued, and supported through every stage of their journey toward active, healthy aging and community well-being.",
    },
    {
      valuesTitle: "Innovation",
      image: AboutPageCampassion,
      valuesContent:
        "Innovation at Happymindz is at our heart. We continuously evolve our community intervention model, organize activities with a fresh twist, and make travel fun for seniors. By redefining traditional support, we empower seniors to lead fulfilling, engaged lives, ensuring our solutions remain effective and impactful in an ever-changing social landscape.",
    },
    {
      valuesTitle: "Accountability",
      image: AboutPageCampassion,
      valuesContent:
        "Accountability at Happymindz ensures we remain responsible to our community. We take full ownership of our impact, delivering on promises with transparency and consistency. By maintaining high standards in every activity and interaction, we build lasting trust, ensuring our members and their families feel confident in our commitment to excellence.",
    },
    {
      valuesTitle: "Empowerment",
      image: AboutPageCampassion,
      valuesContent:
        "Empowerment at Happymindz is about restoring autonomy. We provide the atmosphere and opportunities for seniors to reclaim their independence and lead vibrant lives. By fostering confidence through community engagement and new experiences, we enable every individual to take charge of their well-being and move ahead with purpose and energy.",
    },
    {
      valuesTitle: "Empathy",
      image: AboutPageCampassion,
      valuesContent:
        "Empathy at Happymindz is our foundation for deep understanding. By listening to the unique stories of seniors and their families, we gain the insight needed to tailor our approach and plan activities. This ensures every event, interaction is meaningful, personal, and respectful. This fosters an environment where individuals feel heard and genuinely understood.",
    },
    {
      valuesTitle: "Integrity",
      image: AboutPageCampassion,
      valuesContent:
        "Integrity at Happymindz is our commitment to absolute transparency. We uphold the highest ethical standards in every interaction, ensuring our actions consistently align with our promises. By prioritizing honesty and reliability, we build enduring trust with seniors and their families, providing a dependable foundation for all our offerings.",
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
    <>
      <Seo
        title="About Us"
        description="Learn about Happymindz, our mission, values, and the team dedicated to joyful, active ageing."
        schema="webpage"
      />
      {/* Hero / About intro section */}
      <header className="w-screen  rounded-b-3xl overflow-x-hidden about-us  flex flex-col items-center relative  min-h-[900px] max-lg:min-h-[750px] max-md:min-h-[650px] max-sm:min-h-[600px] max-md:px-4">
        <h1 className="mx-auto w-2xs mt-10 inline-flex items-center justify-center gap-4 text-6xl lg:text-7xl font-bold max-lg:text-3xl max-md:text-2xl relative max-lg:w-full max-lg:max-w-[88vw] max-lg:mx-auto">
          <span>About</span>
          <span className="heading-gradient bg-clip-text text-transparent">
            Us
          </span>
          <img
            src={AboutpageStar1}
            alt="Decorative star accent"
            className="absolute left-70 -top-5 max-lg:left-auto max-lg:right-6 max-lg:top-0 max-lg:w-4 max-lg:h-4 max-md:right-2"
            loading="eager"
            fetchPriority="high"
          />
          <img
            src={AboutpageStar2}
            alt="Decorative star accent"
            className="absolute left-78 top-2 max-lg:left-auto max-lg:right-2 max-lg:top-4 max-lg:w-3 max-lg:h-3"
            loading="eager"
            fetchPriority="high"
          />
        </h1>
        <p className="text-2xl public mx-auto mt-2 w-4xl text-center text-gray-700 font-body font-semibold max-lg:text-lg max-md:text-base max-lg:max-w-[88vw] max-lg:mx-auto">
          Your One-Stop Partner to Age Joyfully
        </p>
        <div className="hero-child bg-gradient-to-b from-[#ffffff] via-[#3AB3AC]  to-[#3AB3AC] grid place-items-center rounded-4xl flex-1 w-full max-w-none px-4 pb-12 max-lg:px-3">
          <div className="flex items-center  overflow-hidden justify-center w-full mt-10 gap-2 max-lg:flex-wrap max-lg:gap-3 max-md:gap-2 max-sm:gap-2 max-lg:max-w-[88vw] max-lg:mx-auto">
            <img
              src={AboutpageHero1}
              alt="Seniors participation group activities"
              className="object-contain w-2xs max-lg:w-32 max-md:w-28 max-lg:mx-auto"
              loading="eager"
              fetchPriority="high"
            />
            <img
              src={AboutpageHero2}
              alt="Seniors participation group activities"
              className="object-contain w-2xs max-lg:w-32 max-md:w-28 max-lg:mx-auto"
              loading="eager"
              fetchPriority="high"
            />
            <img
              src={AboutpageHero1}
              alt="Seniors participation group activities"
              className="object-contain w-2xs max-lg:w-32 max-md:w-28 max-lg:mx-auto"
              loading="eager"
              fetchPriority="high"
            />
            <img
              src={AboutpageHero2}
              alt="Seniors participation group activities"
              className="object-contain w-2xs max-lg:w-32 max-md:w-28 max-lg:mx-auto"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <h2 className="text-5xl lg:text-6xl mt-8 text-center  text-white font-semibold w-6xl max-lg:text-xl max-md:text-lg max-lg:max-w-[88vw] max-lg:mx-auto">
            Empowering our seniors to live their best lives through community,
            healthcare, and joy.
          </h2>
          <p className="text-white text-xl font-medium w-6xl mt-8 mb-15 max-lg:max-w-[88vw] max-lg:mx-auto">
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
      <main>
        {/* Our Values section */}
        <section className="relative w-screen our-values min-h-[750px] flex items-center justify-center py-10 max-sm:px-4">
          <img
            src={AboutPageOurValueBackground}
            alt="Our values background"
            className="absolute inset-0 w-screen h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-6xl lg:text-6xl font-bold mt-2 text-center max-lg:text-4xl max-md:text-3xl max-md:max-w-[90vw] max-[360px]:text-[22px] max-[360px]:leading-tight">
              Our{" "}
              <span className="heading-gradient bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <div className="mt-10  w-full max-w-6xl text-center rounded-3xl border border-gray-300 text-gray-800 font-semibold overflow-hidden bg-gray-300 flex flex-wrap md:flex-nowrap gap-px max-sm:grid max-sm:grid-cols-2 max-sm:gap-px">
              {valueParameters.map((valueParameter) => {
                const isActive =
                  selectedValue?.valuesTitle === valueParameter.valuesTitle;
                return (
                  <button
                    key={valueParameter.valuesTitle}
                    type="button"
                    className={`px-3 py-2 w-full md:w-auto md:flex-1 text-center duration-500 bg-white text-sm md:text-base lg:text-xl ${
                      isActive
                        ? "!text-white !bg-[#3AB3AC]"
                        : "hover:text-white hover:bg-[#3AB3AC]"
                    }`}
                    onClick={() => handleValueSelect(valueParameter)}
                  >
                    {valueParameter.valuesTitle}
                  </button>
                );
              })}
            </div>
            <AboutOurValue
              valuesTitle={selectedValue.valuesTitle}
              image={selectedValue.image}
              valuesContent={selectedValue.valuesContent}
            />
          </div>
        </section>
        {/* Vision and Mission section */}
        <section className="relative  bg-gradient-to-b from-[#FBF1BF] to-[#ffffff] w-full h-190 flex flex-col items-center justify-center max-lg:h-auto max-lg:py-10">
          <img
            src={AboutpageDottedcircle}
            alt="Decorative dotted circle background"
            className="absolute object-fit h-160 w-[1800px] left-5 mt-25 z-0 hidden lg:block"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute text-center w-[300px] h-[300px] break-words flex flex-col items-center justify-center overflow-hidden rounded-full bg-white shadow-xl z-10 shadow-gray-700 px-6 py-4 left-248 top-35 max-lg:static max-lg:mb-6 max-lg:mx-auto max-lg:w-[260px] max-lg:h-[260px]">
            <h3 className="font-bold text-2xl mb-4">Our Vision</h3>
            <p className="font-semibold text-gray-800 text-xl">
              To be the leading force in India for empowering the elder
              community to live their most vibrant and independent lives.
            </p>
          </div>
          <img
            src={AboutpageVision}
            alt="Team vision illustration"
            className="h-75 rounded-2xl w-130 object-cover z-12 absolute top-30 left-120 max-lg:static max-lg:mb-6 max-lg:w-[260px] max-lg:h-auto max-lg:mx-auto"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute bg-gradient-to-b from-[#3AB3AC] to-[#ffffff] w-[320px] h-[320px] text-center break-words overflow-hidden rounded-full bg-white shadow-xl z-14 shadow-gray-700 left-150 top-95 flex flex-col items-center justify-center px-6 py-4 max-lg:static max-lg:mx-auto max-lg:w-[260px] max-lg:h-[260px]">
            <h3 className="font-bold text-2xl mb-2">Our Mission</h3>
            <p className="font-semibold text-gray-800 text-xl">
              To brighten the journey of active ageing by providing accessible,
              tech-enabled, and expertly coordinated support that honors our
              seniors and supports their families.
            </p>
          </div>
        </section>
        {/* Founder note section */}
        <section className="relative  w-full mt-15 flex  flex-col md:flex-row items-center justify-center gap-6 py-8 md:h-150 max-md:h-auto max-sm:py-5 max-sm:px-4 md:px-6">
          <img
            src={AboutpageCoFounder}
            alt="Co-founder portrait"
            className="z-5 rounded-2xl object-cover w-[200px] sm:w-[230px] md:w-[260px] lg:w-[290px] xl:w-[320px] h-auto md:static lg:absolute lg:left-25 lg:top-15 max-md:mb-4"
            loading="lazy"
            decoding="async"
          />
          <div className="relative w-full max-w-[980px] md:w-full md:max-w-[720px] lg:max-w-[900px] xl:max-w-[980px] md:h-90 rounded-2xl bg-[#65C4BF] text-start p-5 pl-4 sm:pl-6 md:pl-8 lg:pl-14 xl:pl-16">
            <img
              src={AboutpageQuoteIcon}
              alt="Quote icon"
              className="size-8 sm:size-9 md:size-10 mb-3 md:mb-0 md:absolute md:top-8 md:left-6 lg:top-10 lg:left-45"
              loading="lazy"
              decoding="async"
            />
            <h3 className="text-2xl sm:text-3xl font-bold mt-2 sm:mt-4 p-2 ml-0 sm:ml-16 md:ml-28 lg:ml-50">
              A Note from Our Founder
            </h3>
            <p className="text-xl mt-2 p-2 ml-0 sm:ml-16 md:ml-28 lg:ml-50 h-auto md:h-40 text-justify md:w-4/6">
              We believe the right support changes everything. By blending
              specialized interventions, healthcare with the joy of travel, and
              a vibrant community, we empower seniors to rediscover their best
              selves. At Happymindz, we ensure your loved ones don't just age
              but they bloom.”
            </p>
            <h4 className="text-base sm:text-lg md:text-xl p-2 font-bold ml-0 sm:ml-16 md:ml-28 lg:ml-50">
              Jolly Jose Pynadath
            </h4>
          </div>
        </section>
        {/* Meet Our Team section */}
        <section className="w-full h-180 mt-5  text-center flex flex-col items-center justify-center max-lg:h-auto max-lg:py-8 max-sm:px-4">
          <h2 className="text-6xl lg:text-6xl font-bold mt-10 text-center max-lg:text-4xl max-md:text-3xl max-md:max-w-[90vw] max-[360px]:text-[22px] max-[360px]:leading-tight">
            Meet{" "}
            <span className="heading-gradient bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>
          <p className="text-2xl public mx-auto mt-2 w-4xl text-center text-gray-700 font-body font-semibold max-lg:text-lg max-md:text-base max-lg:max-w-[88vw] max-lg:mx-auto">
            Teamwork makes the dream work
          </p>
          <div className="grid grid-cols-2 mt-5 md:grid-cols-4 gap-10 place-items-center">
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
        <section className="w-full h-190 grid grid-cols-2 gap-10 bg-gradient-to-b from-[#E2E8F0] to-[#ffffff] items-start max-sm:grid-cols-1 max-sm:gap-8 max-sm:h-auto max-sm:px-4 max-sm:py-8 px-6 py-10">
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
    </>
  );
}

export default About;
