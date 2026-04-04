import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import AboutpageStar1 from "../../assets/AboutPageimg/AboutpageStar1.svg";
import AboutpageStar2 from "../../assets/AboutPageimg/AboutpageStar2.svg";
import CIMHeroimg from "../../assets/CIMPageimg/CIMHeroimg.svg";
import CIMCommunitySupportBackground from "../../assets/CIMPageimg/CIMCommunitySupportBackground.svg";
import CIMCardHeartIcon from "../../assets/CIMPageimg/CIMCardHeartIcon.svg";
import CIMCardSunIcon from "../../assets/CIMPageimg/CIMCardSunIcon.svg";
import CIMCardArrowIcon from "../../assets/CIMPageimg/CIMCardArrowIcon.svg";
import CIMCardBirdIcon from "../../assets/CIMPageimg/CIMCardBirdIcon.svg";
import CIMCardFlowerIcon from "../../assets/CIMPageimg/CIMCardFlowerIcon.svg";
import CIMSupportCard from "../../components/CIMSupportCard.jsx";

import CIMImpactBackground from "../../assets/CIMPageimg/CIMImapctBackground.svg";
import CIMImpactCommunitySessionRating from "../../assets/CIMPageimg/CIMImpactCommunitysSessionRating.svg";
import CIMImpactLocationCoveredRating from "../../assets/CIMPageimg/CIMImpactLocationCoveredRating.svg";
import CIMImpactOutingRating from "../../assets/CIMPageimg/CIMImpactOutingsRating.svg.svg";
import CIMImpactSeniorsReachRating from "../../assets/CIMPageimg/CIMImpactSeniorsReachRating.svg";
import CIMDynamicImage1 from "../../assets/CIMPageimg/CIMDynamicImage1.svg";
import CIMDynamicImage2 from "../../assets/CIMPageimg/CIMDynamicImage2.svg";
import CIMDynamicImage3 from "../../assets/CIMPageimg/CIMDynamicImage3.svg";
import CIMDynamicImage4 from "../../assets/CIMPageimg/CIMDynamicImage4.svg";

import CIMLeftArrow from "../../assets/CIMPageimg/CIMLeftArrow.svg";
import CIMRightArrow from "../../assets/CIMPageimg/CIMRightArrow.svg";
import CIMPartnerBtn from "../../assets/CIMPageimg/CIMPartnerBtn.svg";
import Seo from "../../components/Seo.jsx";

const dynamicImages = [
  { src: CIMDynamicImage1, alt: "Community moment 1" },
  { src: CIMDynamicImage2, alt: "Community moment 2" },
  { src: CIMDynamicImage3, alt: "Community moment 3" },
  { src: CIMDynamicImage4, alt: "Community moment 4" },
];

function Community() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrevImage = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev === 0 ? dynamicImages.length - 1 : prev - 1,
    );
  }, []);

  const handleNextImage = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev === dynamicImages.length - 1 ? 0 : prev + 1,
    );
  }, []);

  const communitySupportCard = [
    {
      title: "True Belonging",
      imgIcon: CIMCardHeartIcon,
      content:
        "A warm space where every senior is seen, and valued by a circle of peers.",
    },
    {
      title: "Daily Purpose",
      imgIcon: CIMCardSunIcon,
      content:
        "Meaningful opportunities to contribute, share wisdom, and stay engaged.",
    },
    {
      title: "Shared Discovery",
      imgIcon: CIMCardArrowIcon,
      content:
        "The journey from being alone to finding companionship through group travel and outings."
    },
    {
      title: "Peace of Mind",
      imgIcon: CIMCardBirdIcon,
      content:
        "Professional support that works quietly in the background so families can rest easy.",
    },
    {
      title: "Space to Bloom",
      imgIcon: CIMCardFlowerIcon,
      content:
        "Encouragement to rediscover old hobbies and explore new passions.",
    },
  ];

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Seo
        title="Community Intervention Model"
        description="Engage with our community intervention model that connects seniors through meaningful activities, friendships, and support."
        schema="service"
        schemaName="Community Intervention Model"
      />
      {/* Hero Section */}
      <header className="  h-180 bg-gradient-to-b from-[#ffffff] to-[#e7f5f5] w-full flex flex-col items-center justify-center px-4 py-16 sm:py-20">
        <h1 className="mx-auto mt-2  inline-flex items-center justify-center gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold relative max-w-[88vw]">
          <span>Bloom </span>
          <span className="heading-gradient bg-clip-text text-transparent">
            Circle
          </span>
          <img
            src={AboutpageStar1}
            alt="Star accent"
            className="absolute  -right-5 -top-2 max-lg:left-auto max-lg:right-6 max-lg:top-0 max-lg:w-4 max-lg:h-4 max-md:right-2 "
            loading="eager"
            fetchPriority="high"
          />
          <img
            src={AboutpageStar2}
            alt="Star accent"
            className="absolute -right-8 top-5 max-lg:left-auto max-lg:right-2 max-lg:top-4 max-lg:w-3 max-lg:h-3"
            loading="eager"
            fetchPriority="high"
          />
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mx-auto mt-3 text-center text-gray-700 font-body font-semibold max-w-4xl">
          Community Intervention Model
        </p>
        <img
          src={CIMHeroimg}
          alt="Community group session"
          loading="eager"
          fetchPriority="high"
          className="w-full max-w-6xl rounded-4xl object-cover h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px] mt-6 p-2"
        />
        <p className="text-gray-800 text-center text-xl sm:text-base md:text-xl lg:text-xl font-medium max-w-5xl mt-10 mb-8">
          It is a proactive, group-based approach to wellness. Instead of
          treating aging as an isolated journey, we view it as a social one. We
          strive to create structured environments where specialized care,
          cognitive stimulation, and social engagement happen naturally within a
          supportive senior community.
        </p>
      </header>
      <main className="w-full ">
        {/* Community Support Section */}
        <section
          className="relative w-full bg-gradient-to-b from-[#e5f8f8] to-[#3fb5ae] px-4 py-16 sm:py-20"
          aria-labelledby="community-support-heading"
        >
          <img
            src={CIMCommunitySupportBackground}
            alt="Community support background"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="relative z-10 flex flex-col items-center">
            <h2
              id="community-support-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 text-center max-w-[90vw]"
            >
              Community{" "}
              <span className="heading-gradient bg-clip-text text-transparent">
                Support Matters
              </span>
            </h2>
            <p className="text-gray-800 p-2 text-center text-sm sm:text-base md:text-2xl  font-medium max-w-7xl mt-4">
              Isolation is often the greatest challenge for seniors. At Bloom
              Circle we create an atmosphere that offers :
            </p>
            {/* Support Cards */}
            <div className="mt-8 flex w-5xl flex-wrap justify-center gap-6 max-sm:gap-4">
              {communitySupportCard.map((card) => (
                <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                  <CIMSupportCard
                    key={card.title}
                    title={card.title}
                    imageIcon={card.imgIcon}
                    content={card.content}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Impact Section */}
        <section
          className="w-full flex flex-col items-center px-4 py-16 sm:py-20"
          aria-labelledby="impact-heading"
        >
          <h2
            id="impact-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-[90vw]"
          >
            The{" "}
            <span className="heading-gradient bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <div className="mt-8 w-full max-w-6xl">
            <div className="hidden lg:block relative w-full">
              <img
                src={CIMImpactBackground}
                alt="Impact highlights background"
                className="w-full h-auto object-fill"
                loading="lazy"
                decoding="async"
              />
              <img
                src={CIMImpactLocationCoveredRating}
                alt="Locations covered rating"
                className="w-50 object-cover h-50  absolute left-[0%] top-[11%]"
                loading="lazy"
                decoding="async"
              />
              <img
                src={CIMImpactOutingRating}
                alt="Outings rating"
                className="w-50 object-cover h-50 absolute left-[20%] top-[4%]"
                loading="lazy"
                decoding="async"
              />
              <img
                src={CIMImpactCommunitySessionRating}
                alt="Community sessions rating"
                className="w-50 object-cover h-50  absolute left-[50%] -top-[5%]"
                loading="lazy"
                decoding="async"
              />
              <img
                src={CIMImpactSeniorsReachRating}
                alt="Seniors reached rating"
                className="w-50 object-cover h-50  absolute left-[80%] top-[6%]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:hidden">
              <img
                src={CIMImpactLocationCoveredRating}
                alt="Locations covered rating"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
              <img
                src={CIMImpactOutingRating}
                alt="Outings rating"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
              <img
                src={CIMImpactCommunitySessionRating}
                alt="Community sessions rating"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
              <img
                src={CIMImpactSeniorsReachRating}
                alt="Seniors reached rating"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>
        {/* Communities In Action Section */}
        <section
          className="w-full flex flex-col items-center px-4 py-16 sm:py-20"
          aria-labelledby="communities-action-heading"
        >
          <h2
            id="communities-action-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl"
          >
            Our Communities in{" "}
            <span className="heading-gradient bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-gray-800 p-2 text-center text-base md:text-2xl  font-medium max-w-7xl mt-5">
            At Happymindz, we create a stage for our seniors to shine, and
            discover the best version of themselves. These are the moments where
            laughter, friendship, and purpose come together through community
            support.
          </p>
          {/* Dynamic Images */}
          <div className="w-full px-4 py-10 sm:py-14">
            <div className="hidden min-[426px]:flex gap-4 sm:gap-6 items-center justify-center">
              <button
                type="button"
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                <img
                  src={CIMLeftArrow}
                  alt="Previous"
                 className="sm:h-10 sm:w-10 hover:bg-blue-500 hover:rounded-full  h-10 w-10 bg-[#33A3A4]  object-center border-2 rounded-full border-[#33A3A4] hover:border-3"
                  loading="lazy"
                  decoding="async"
                />
              </button>
              <div className="flex flex-col items-center justify-center gap-4">
                <img
                  src={dynamicImages[activeImageIndex].src}
                  alt={dynamicImages[activeImageIndex].alt}
                  className="max-w-[75vw] sm:max-w-[70vw] lg:max-w-[900px] max-h-[55vh] w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="flex items-center justify-center gap-2 bg-blue-300 h-5 w-20 rounded-2xl"
                  role="tablist"
                  aria-label="Community image selector"
                >
                  {dynamicImages.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        index === activeImageIndex
                          ? "bg-white"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Show image ${index + 1}`}
                      aria-pressed={index === activeImageIndex}
                    />
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={handleNextImage}
                aria-label="Next image"
              >
                <img
                  src={CIMRightArrow}
                  alt="Next"
                  className="sm:h-10 sm:w-10 hover:bg-blue-500 hover:rounded-full  h-10 w-10 bg-[#33A3A4]  object-center border-2 rounded-full border-[#33A3A4] hover:border-3"
                   loading="lazy"
                  decoding="async"
                />
              </button>
            </div>
            <div className="flex min-[426px]:hidden gap-4 overflow-x-auto snap-x snap-mandatory px-2 pb-2">
              {dynamicImages.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt="Our community Activities"
                  className="h-[200px] w-[280px] object-cover rounded-2xl snap-center flex-shrink-0"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </section>
        {/* Partner Section */}
        <section
          className="w-full bg-gradient-to-b from-[#E2E8F0] to-[#ffffff] flex flex-col items-center px-4 py-16 sm:py-20"
          aria-labelledby="partner-heading"
        >
          <h2
            id="partner-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl heading-gradient bg-clip-text text-transparent font-bold  text-center max-w-4xl"
          >
            Partner{" "}
            <span className="text-black">with{" "}</span>
            Us
          </h2>
          <p className="text-gray-800 p-2 text-center text-base md:text-2xl font-medium max-w-6xl  mt-5">
            Represent a community looking to partner with us for a session? We
            would love to hear from you.
          </p>
          <button className="sm:mt-8 mt-5 p-2 bg-[#33A3A4] hover:bg-[#2c8b8d] hover:shadow-gray-500 hover:shadow-xl text-white font-bold h-12 w-35 justify-center items-center flex font-body rounded-xl duration-200">
            <Link
              to="/partners"
              className="flex gap-2 items-center justify-center"
            >
              Let's Talk
              <img
                src={CIMPartnerBtn}
                alt="Arrow icon"
                className="w-4 h-4 object-contain"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </button>
        </section>
      </main>
    </div>
  );
}

export default Community;
