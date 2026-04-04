import React, { useRef, useState } from "react";
import HomeHealthHeroHomeTakeCare from "../../assets/HomeHealthSupportPageimg/HomeHealthHeroHomeTakeCare.svg";
import HomeHealthStandardBackground from "../../assets/HomeHealthSupportPageimg/HomeHealthStandardBackground.svg";
import HomeHealthSupportStandardCard from "../../components/HomeHealthSupportStandardCard.jsx";
import HomeHealthStandardGoalIcon from "../../assets/HomeHealthSupportPageimg/HomeHealthStandardGoalIcon.svg";
import HomeHealthStandardCoordinationIcon from "../../assets/HomeHealthSupportPageimg/HomeHealthStandardCoordinationIcon.svg";
import HomeHealthStandardCareIcon from "../../assets/HomeHealthSupportPageimg/HomeHealthStandardCareIcon.svg";
import HomeHealthSupportNeedHandIcon from "../../assets/HomeHealthSupportPageimg/HomeHealthSupportNeedHandIcon.svg";
import HomeHealthSupportNeedHomeIcon from "../../assets/HomeHealthSupportPageimg/HomeHealthSupportNeedHomeIcon.svg";
import HomeHealthSupportNeedHospitalIcon from "../../assets/HomeHealthSupportPageimg/HomeHealthSupportNeedHospitalIcon.svg";
import HomeHealthSupportNeedPersonIcon from "../../assets/HomeHealthSupportPageimg/HomeHealthSupportNeedPersonIcon.svg";
import HomeHealthSupportNeedSunIcon from "../../assets/HomeHealthSupportPageimg/HomeHealthSupportNeedSunIcon.svg";
import HomeHealthSupportNeedsCard from "../../components/HomeHealthSupportNeedsCard.jsx";
import HomeHealthIndependentLivingCard from "../../components/HomeHealthIndependentLivingCard.jsx";
import SeniorTravelVideo from "../../assets/SeniorTravelPageimg/SeniorTravelVideo.mp4";
import ClientForm from "../../components/ClientForm.jsx";
import ClientFormContent from "../../components/ClientFormContent.jsx";
import VideoPlayIcon from "../../assets/SeniorTravelPageimg/VideoPlayIcon.svg"; 
import Seo from "../../components/Seo.jsx";
function HomeHealthSupport() {
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
  const homeHealthStandardCards = [
    {
      icon: (
        <img
          src={HomeHealthStandardCareIcon}
          alt="Icon representing trained care partners"
          loading="lazy"
          decoding="async"
          className="h-16 w-16 object-contain"
        />
      ),
      title: "Trained Care Partners",
      description:
        "Each caregiver undergoes rigorous training to meet diverse physical, and emotional needs.",
      className:
        "m-2 border-3 border-[#04C0B6] bg-gradient-to-b from-[#ffffff] to-[#C3FDFA] rounded-3xl p-6 w-60 h-95 flex flex-col items-center text-justify-center text-center",
    },
    {
      icon: (
        <img
          src={HomeHealthStandardGoalIcon}
          alt="Icon representing goal focused interventions"
          loading="lazy"
          decoding="async"
          className="h-14 w-14 object-contain"
        />
      ),
      title: "Goal Focused Interventions",
      description:
        "Beyond just monitoring, we work toward specific health, and wellness goals to improve quality of life.",
      className:
        "m-2 border-3 border-[#04C0B6] bg-gradient-to-b from-[#ffffff] via-gray-200 to-[#ffffff] rounded-3xl p-6 w-48 h-80 flex flex-col items-center text-center text-base md:text-base lg:text-base",
    },
    {
      icon: (
        <img
          src={HomeHealthStandardCoordinationIcon}
          alt="Icon representing seamless coordination"
          loading="lazy"
          decoding="async"
          className="h-16 w-16 object-contain"
        />
      ),
      title: "Seamless Coordination",
      description:
        "From medication management to coordination with your family doctor, we manage the details so you don't have to.",
      className:
        "m-2 border-3 border-[#04C0B6]  bg-gradient-to-b from-[#ffffff]  to-[#C3FDFA] rounded-3xl p-6 w-60 h-95 flex flex-col items-center text-center",
    },
  ];
  const homeHealthSupportNeeds = [
    {
      icon: (
        <img
          src={HomeHealthSupportNeedHomeIcon}
          alt="Icon representing stay at home care support"
          loading="lazy"
          decoding="async"
          className="h-16 w-16 p-1 object-contain"
        />
      ),
      title: "Stay-at-Home Care (24/7)",
      description:
        "Round-the-clock professional support for seniors who require continuous assistance with daily living, and medical monitoring.",
    },
    {
      icon: (
        <img
          src={HomeHealthSupportNeedPersonIcon}
          alt="Icon representing companion care"
          loading="lazy"
          decoding="async"
          className="h-16 w-16 p-1 object-contain"
        />
      ),
      title: "Companion Care",
      description:
        "Heartfelt companionship combined with help for daily activities, ensuring your loved ones never feel alone.",
    },
    {
      icon: (
        <img
          src={HomeHealthSupportNeedHospitalIcon}
          alt="Icon representing post hospitalization support"
          loading="lazy"
          decoding="async"
          className="h-16 w-16 p-1 object-contain"
        />
      ),
      title: "Post-Hospitalization/Bystander Support",
      description:
        "Dedicated support during hospital stays or the recovery period at home to ensure a smooth transition back to health.",
    },
    {
      icon: (
        <img
          src={HomeHealthSupportNeedHandIcon}
          alt="Icon representing bedridden patient support"
          loading="lazy"
          decoding="async"
          className="h-16 w-16 p-1 object-contain"
        />
      ),
      title: "Bedridden Patient Support",
      description:
        "Specialized care focusing on hygiene, and emotional well-being for those with limited mobility.",
    },
    {
      icon: (
        <img
          src={HomeHealthSupportNeedSunIcon}
          alt="Icon representing day care support"
          loading="lazy"
          decoding="async"
          className="h-16 w-16 p-1 object-contain"
        />
      ),
      title: "Day Care Support",
      description:
        " Professional assistance during the day, perfect for families who need a reliable partner while they are at work.",
    },
  ];
  const homeHealthIndependentLiving = [
    {
      title: "Personalized Professional Support",
      content:
        "Families trust our expertise in providing specialized support tailored to the needs of seniors. ",
      className: "bg-gradient-to-r from-[#B1EAE7] to-[#E6FFFE]",
    },
    {
      title: "Specialized Expertise",
      content:
        "Trained professionals with experience in offering ageing support.",
      className: "bg-gradient-to-r from-[#E6FFFE] to-[#B1EAE7]",
    },
    {
      title: "Customized Care Plans",
      content:
        "Support tailored to senior’s specific routines, and medical needs.",
      className: "bg-gradient-to-r from-[#B1EAE7] to-[#E6FFFE]",
    },
    {
      title: "Safety & Security",
      content: "Rigorous background checks, and ongoing professional training.",
      className: "bg-gradient-to-r from-[#E6FFFE] to-[#B1EAE7]",
    },
    {
      title: "Holistic Well-being",
      content:
        "Our home care professionals support physical health, mental engagement, and emotional comfort.",
      className: "bg-gradient-to-r from-[#B1EAE7] to-[#E6FFFE]",
    },
    {
      title: "Peace of Mind",
      content:
        "For those away from their seniors, our support helps them be at peace.",
      className: "bg-gradient-to-r from-[#E6FFFE] to-[#B1EAE7]",
    },
  ];
  return (
    <div className="w-screen overflow-x-hidden">
      <Seo
        title="Home Health Support"
        description="Home health support with trained care partners, coordinated services, and personalized recovery assistance."
        schema="service"
        schemaName="Home Health Support"
      />
      <style>{`
@media (max-width: 425px) {
  .hero-section {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .hero-content {
    align-items: center !important;
    text-align: center !important;
  }
}
@media (max-width: 768px) {
  .hero-section {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .hero-content {
    align-items: center !important;
    text-align: center !important;
  }
}
@media (min-width: 1024px) and (max-width: 1279px) {
  .hero-section {
    width: 100% !important;
  }
  .hero-image {
    width: 100% !important;
    max-width: 26rem !important;
    height: auto !important;
  }
  .standard-cards {
    justify-content: center !important;
  }
  .independent-heading {
    text-align: center !important;
  }
  .independent-grid {
    max-width: 58rem !important;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  .independent-card {
    width: 100% !important;
    max-width: 17rem !important;
    min-height: 13rem !important;
  }
  .stories-heading {
    text-align: center !important;
  }
}
      `}</style>
      {/* Hero section */}
      <header className="hero-section flex  flex-col bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#FBF1C0] w-full mt-6 lg:flex-row lg:rounded-r-3xl lg:mt-10 lg:h-150 lg:w-365">
        <div className="hero-content flex flex-col w-full mx-0 min-w-0 px-4 sm:px-6 gap-5 mr-0 mt-8 items-center lg:w-480 lg:pl-10 lg:mr-5 lg:mt-15 lg:items-start lg:mx-15">
          <h1 className="font-extrabold text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl lg:text-left relative">
            <span>Home </span>
            <span className="heading-gradient bg-clip-text text-transparent">
              Health Support
            </span>
          </h1>
          <p className="text-2xl public text-center lg:text-left text-gray-800 font-body font-bold max-w-[30rem]">
            Excellence in Care,<br></br> Right at Your Doorstep
          </p>
          <p className="p-2 pl-0 w-full max-w-[32rem] text-center lg:text-left text-gray-800 text-xl font-medium lg:w-130 text-justify-center">
            Experience professional elderly support that feels like family,
            delivered in the comfort of home. At Happymindz, we understand that
            as your loved one ages, their needs evolve. Our home health support
            services are designed to provide more than just medical assistance.
            We offer complete peace of mind.
          </p>
        </div>
        <div className="w-full  h-full mt-6 ml-0 flex justify-center px-4 sm:px-6 lg:px-0 lg:mt-15 lg:ml-5">
          <img
            src={HomeHealthHeroHomeTakeCare}
            alt="Professional caregiver supporting seniors at home"
            loading="eager"
            fetchPriority="high"
            className="hero-image z-5 w-full max-w-[16rem] sm:max-w-[20rem] md:max-w-[35rem] lg:w-125  lg:h-145 object-cover rounded-t-4xl rounded-b-4xl"
          />
        </div>
      </header>

      <main className="w-full">
        {/* Happymindz standard section */}
        <section className="relative flex min-h-[auto] w-full flex-col items-center bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#56C3BE] px-4 py-10 sm:px-6 md:px-8 lg:min-h-140 lg:flex-col lg:items-start lg:px-10 lg:py-0 xl:flex-row xl:items-center">
          <div className="flex h-full w-full items-center justify-center lg:w-full lg:justify-start xl:w-auto xl:shrink-0">
            <h2 className="mt-2 w-full  max-w-[18rem] text-center text-3xl font-bold leading-tight sm:max-w-[24rem] sm:text-4xl md:max-w-[32rem] md:text-5xl lg:ml-18 lg:w-xl lg:max-w-none lg:text-start lg:text-6xl max-[360px]:text-[20px] max-[360px]:leading-tight">
              The Happymindz{" "}
              <span className="heading-gradient bg-clip-text text-transparent">
                Standard
              </span>
            </h2>
          </div>
          <div className="relative h-full w-full flex-1 min-w-0">
            <img
              src={HomeHealthStandardBackground}
              alt="Abstract background illustration for the Happymindz standard section"
              loading="lazy"
              decoding="async"
              className="absolute right-0 top-0 hidden h-[28rem] w-full max-w-none object-cover opacity-60 sm:h-[32rem] md:h-[36rem] lg:-top-20 lg:block lg:h-[40rem] lg:w-full lg:max-w-[60rem] lg:opacity-100 xl:-top-25 xl:h-[48rem] xl:w-[55rem]"
            />
            <div className="standard-cards relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 py-6 sm:py-8 md:flex-row md:flex-wrap lg:justify-start xl:justify-center xl:flex-nowrap xl:py-0">
              {homeHealthStandardCards.map((card, index) => (
                <HomeHealthSupportStandardCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  className={card.className}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Specialized support needs section */}
        <section className="flex w-full flex-col bg-gradient-to-b from-[#ffffff] via-white to-[#E3E9F1] px-4 py-10 sm:px-6 md:px-8 lg:min-h-250 lg:px-0 lg:py-0">
          <div className="mt-8 flex w-full max-w-6xl flex-col gap-2 self-center lg:mt-20 lg:ml-8 xl:ml-25 lg:self-auto">
            <h2 className="mt-2 z-12 w-full max-w-[18rem] p-2 text-center text-3xl font-bold sm:max-w-[26rem] sm:text-4xl md:max-w-[34rem] md:text-5xl lg:w-250 lg:max-w-none lg:text-left lg:text-6xl">
              Specialized Support For{" "}
              <span className="heading-gradient bg-clip-text text-transparent">
                All Your Needs
              </span>
            </h2>
            <p className="w-full  max-w-5xl p-2 text-center text-2xl font-medium text-gray-800 lg:text-start">
              We offer tailored support levels to match the unique requirements
              of your seniors.
            </p>
          </div>
          <div className="mt-6 border flex h-full w-full max-w-8xl flex-col items-center justify-center self-center sm:mt-8 md:flex-row md:flex-wrap lg:mx-auto lg:mt-10">
            {homeHealthSupportNeeds.map((need, index) => (
              <HomeHealthSupportNeedsCard
                key={index}
                icon={need.icon}
                title={need.title}
                description={need.description}
              />
            ))}
          </div>
        </section>

        {/* Independent living support section */}
        <section className="flex w-full flex-col bg-gradient-to-b from-[#FBF1BF] to-[#ffffff] px-4 py-10 sm:px-6 md:px-8 lg:min-h-210 lg:px-0 lg:py-0">
          <div className="mt-8 flex w-full max-w-7xl flex-col gap-5 self-center lg:mt-20 lg:ml-8 xl:ml-28 lg:self-auto">
            <h2 className="independent-heading mt-2 w-full p-2 text-center text-2xl font-bold sm:text-4xl md:max-w-[34rem] md:text-5xl lg:max-w-none lg:text-left lg:text-6xl">
              Dedicated Support for{" "}
              <span className="heading-gradient bg-clip-text text-transparent">
                Independent Living
              </span>
            </h2>
          </div>
          <div className="independent-grid mt-6 grid h-full w-full max-w-7xl grid-cols-1 justify-items-center gap-4 self-center sm:mt-8 md:grid-cols-2 md:gap-4 lg:mx-auto lg:mt-10">
            {homeHealthIndependentLiving.map((item, index) => (
              <HomeHealthIndependentLivingCard
                key={index}
                title={item.title}
                content={item.content}
                className={item.className}
              />
            ))}
          </div>
        </section>

        {/* Video stories section */}
        <section className=" flex h-auto w-full flex-col  items-center px-4 py-10 sm:px-6 md:px-8 lg:h-200 lg:px-0 lg:py-0">
          <h2 className="stories-heading   mb-2 mt-8 w-full max-w-7xl p-2 text-center text-2xl font-bold sm:mt-12 sm:text-4xl md:text-5xl lg:mt-20 lg:text-left lg:text-6xl">
            Real{" "}
            <span className="heading-gradient bg-clip-text text-transparent">
              Stories
            </span>
            . Real{" "}
            <span className="heading-gradient bg-clip-text text-transparent">
              Support
            </span>
            . Real{" "}
            <span className="heading-gradient bg-clip-text text-transparent">
              Results
            </span>
          </h2>
          <div className="relative mt-5 w-full max-w-5xl sm:w-[95%] lg:w-[60rem] xl:w-280">
            <video
              ref={videoRef}
              className="h-auto w-full rounded-3xl object-cover lg:h-120"
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
        {/* Contact form section */}
        <section className="w-full grid grid-cols-2 gap-10 bg-gradient-to-b from-[#E2E8F0] to-[#ffffff] items-start max-sm:grid-cols-1 max-sm:gap-8 max-sm:h-auto max-sm:px-4 max-sm:py-8 px-6 py-10">
          <ClientFormContent
            titleContent={"Stop guessing and start giving your loved ones the "}
            spanContent={"specialized support they deserve"}
            para={""}
            btnpara={"We typically respond within 24 hours"}
          />
          <div className="flex justify-center max-sm:justify-start">
            <ClientForm />
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomeHealthSupport;
