import React from "react";
import DigitalCareHero from "../../assets/DigitalCareimg/DigitalCareHero.svg";
import DigitalCareHeroStar from "../../assets/DigitalCareimg/DigitalCareHeroStar.svg";
import DigitalCareHeroPeopleIcon from "../../assets/DigitalCareimg/DigitalCareHeroPeopleIcon.svg";
import DigitalCareHeroGaurdIcon from "../../assets/DigitalCareimg/DigitalCareHeroGaurd.svg";
import DigitalCareBenefitsCard from "../../components/DigitalCareBenefitsCard.jsx";
import digi from "../../assets/DigitalCareimg/digi.svg";
import WhyChoose from "../../components/WhyChoose.jsx";
import DigitalCareComprehensiveSupportFamilyArt from "../../assets/DigitalCareimg/DigitalCareComprehensiveSupportFamilyArt.svg";
import DigitalCareComprehensiveSupportCareIcon from "../../assets/DigitalCareimg/DigitalCareComprehensiveSupportCareIcon.svg";
import DigitalCareComprehensiveSupportTransparencyIcon from "../../assets/DigitalCareimg/DigitalCareComprehensiveSupportTransparencyIcon.svg";
import DigitalCareComprehensiveSupportBackground from "../../assets/DigitalCareimg/DigitalCareComprehensiveSupportBackground.svg";
import ClientForm from "../../components/ClientFormLazy.jsx";
import ClientFormContent from "../../components/ClientFormContent.jsx";
import DigitalCareClientSesctionSeniors from "../../assets/DigitalCareimg/DigitalCareClientSesctionSeniors.svg";
import DigitalCareBenefitsCardBackground from "../../assets/DigitalCareimg/DigitalCareBenefitsCardBackground.svg";
import Seo from "../../components/Seo.jsx";

function DigitalCare() {
  const benefits = [
    {
      icon: digi,
      title: "Expert-Led Support",
      description:
        "Sessions featuring cognitive games, are conducted by health specialists focusing on memory, brain development, and delaying the onset of dementia.",
      className: "static xl:absolute xl:top-10 xl:right-25 mx-auto xl:mx-0",
    },
    {
      icon: digi,
      title: "Holistic Wellness",
      description:
        "Daily routines featuring guided yoga, meditation, and emotional wellness exercises.",
      className: "static xl:absolute xl:right-70 xl:top-70 mx-auto xl:mx-0",
    },
    {
      icon: digi,
      title: "A Global Social Circle",
      description:
        "A curated community where seniors connect from across the world for meaningful conversation and friendship.",
      className: "static xl:absolute xl:right-25 xl:top-130 mx-auto xl:mx-0",
    },
  ];

  const whyChoose = [
    {
      icon: DigitalCareComprehensiveSupportCareIcon,
      title: "24/7 Support",
      content:
        "A dedicated call center, and SOS features for immediate assistance.",
    },
    {
      icon: DigitalCareComprehensiveSupportTransparencyIcon,
      title: "Complete Transparency",
      content:
        "Regular progress reports sent to family members, keeping you connected to your loved one’s journey.",
    },
    {
      icon: DigitalCareComprehensiveSupportTransparencyIcon,
      title: "Certified Professionals",
      content:
        "Every session is led by top-tier specialists in active ageing, and psychological care.",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Seo
        title="Digital Care"
        description="Digital care services that keep seniors connected through expert-led sessions, wellness activities, and ongoing support."
        schema="service"
        schemaName="Digital Care"
      />
      <style>{`
        @media (max-width: 425px) {
          .dc-hero-title { text-align: center !important; }
          .dc-hero-content { align-items: center !important; }
          .dc-hero-circles { display: none !important; }
          .dc-hero-image { position: static !important; margin: 0 auto !important; }
          .dc-hero-badge { position: static !important; transform: none !important; margin-top: 12px !important; }
          .dc-hero-badges { display: flex !important; flex-direction: column !important; align-items: center !important; gap: 10px !important; margin-top: 12px !important; }
          .dc-benefit-card { border-radius: 0 !important; }
          .dc-form-section form { margin-left: 0 !important; max-width: 340px !important; width: 100% !important; }
          .dc-form-section .dc-form-wrap { width: 100% !important; justify-content: center !important; }
        }
        @media (max-width: 375px) {
          .dc-form-section form { max-width: 320px !important; }
        }
        @media (max-width: 320px) {
          .dc-form-section form { max-width: 290px !important; }
        }
        @media (min-width: 720px) and (max-width: 860px) {
          .dc-hero-badge--seniors { left: 18% !important; bottom: 10% !important; }
          .dc-hero-badge--support { left: 78% !important; top: 12% !important; }
        }
        @media (min-width: 992px) and (max-width: 1120px) {
          .dc-hero-content { margin-left: 0 !important; align-items: flex-start !important; }
          .dc-hero-title { width: 100% !important; max-width: 100% !important; }
          .dc-hero-figure { justify-content: center !important; }
          .dc-benefits-section { flex-direction: column !important; align-items: center !important; }
          .dc-benefits-cards { margin-top: 12px !important; min-height: auto !important; padding-top: 8px !important; }
          .dc-benefit-card { max-width: 520px !important; }
          .dc-whychoose p { font-size: 18px !important; }
          .dc-benefits-cards { margin-top: 20px !important; }
        }
      `}</style>
      {/* Hero Section */}
      <header className="relative w-full flex flex-col items-center justify-center gap-8 px-4 sm:px-6 lg:px-12 py-10 lg:py-0 lg:flex-row lg:min-h-[520px] lg:h-150 max-[425px]:px-3 max-[375px]:px-3 max-[320px]:px-3">
        {/* Hero Content */}
        <section className="dc-hero-content w-full max-w-3xl p-5 flex flex-col lg:ml-8">
          <h1 className="dc-hero-title mt-2 font-extrabold text-start lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-7xl relative max-w-[88vw] w-full lg:w-175">
            <span>Staying Connected, </span>
            <span className="heading-gradient bg-clip-text text-transparent">
              Staying Sharp
            </span>
          </h1>

          <p className="p-2 text-center lg:text-left text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mt-6 mb-8">
            Ageing shouldn't mean isolation. Our Digital Care platform is a
            vibrant online safe space designed to bring the world to our
            seniors. Whether it's for friendship, laughter, or cognitive health,
            we provide a professional gateway for seniors from the comfort of
            home.
          </p>
        </section>

        {/* Hero Image Cluster */}
        <figure className="dc-hero-figure w-full flex justify-center items-center relative max-[728px]:flex-col max-[728px]:px-4">
          <div className="dc-hero-circles w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[480px] lg:h-[480px] bg-[#D1EFED] rounded-full flex items-center justify-center">
            <div className="dc-hero-circles w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[380px] lg:h-[380px] bg-[#78CFCB] rounded-full flex items-center justify-center"></div>
          </div>
          <img
            src={DigitalCareHero}
            alt="Senior enjoying digital care activities"
            className="dc-hero-image w-[240px] h-[170px] sm:w-[340px] sm:h-[230px] lg:w-[465px] lg:h-[300px] absolute top-16 sm:top-18 lg:top-20 object-cover rounded-3xl max-[728px]:static max-[728px]:mt-4"
            loading="lazy"
            decoding="async"
          />
          <div className="dc-hero-badges">
            <aside className="dc-hero-badge dc-hero-badge--seniors h-14 w-36 sm:h-15 sm:w-40 absolute left-10 sm:left-16 lg:left-20 -translate-x-1/2 bottom-4 sm:bottom-6 lg:bottom-20 lg:left-[22%] bg-white shadow-gray-500 p-2 gap-2 shadow-xs rounded-2xl flex items-center">
              <img
                src={DigitalCareHeroPeopleIcon}
                alt="Active seniors icon"
                loading="lazy"
                decoding="async"
                className="h-10 w-10"
              />

              <div className="flex flex-col leading-tight">
                <span className="font-extrabold">500+</span>
                <p className="text-[12px] font-medium">Active Seniors</p>
              </div>
            </aside>
            <aside className="dc-hero-badge dc-hero-badge--support h-14 w-40 sm:h-15 sm:w-45 absolute left-1/2 -translate-x-1/2 bottom-14 sm:bottom-16 lg:top-15 lg:left-[80%] bg-white shadow-gray-500 p-2 gap-2 shadow-xs rounded-2xl flex items-center">
              <img
                src={DigitalCareHeroGaurdIcon}
                alt="24/7 support shield icon"
                loading="lazy"
                decoding="async"
                className="h-10 w-10"
              />

              <div className="flex flex-col leading-tight">
                <span className="font-extrabold">24/7</span>
                <p className="text-[12px] font-medium">Support Available</p>
              </div>
            </aside>
          </div>
          <img
            src={DigitalCareHeroStar}
            alt="Decorative star icon"
            className="hidden sm:block absolute top-0 left-20 lg:left-35 size-8 lg:size-10 max-[728px]:hidden"
            loading="lazy"
            decoding="async"
          />
          <img
            src={DigitalCareHeroStar}
            alt="Decorative star icon"
            className="hidden sm:block absolute top-10 left-28 lg:left-50 size-5 lg:size-6 max-[728px]:hidden"
            loading="lazy"
            decoding="async"
          />
          <img
            src={DigitalCareHeroStar}
            alt="Decorative star icon"
            className="hidden sm:block absolute bottom-4 right-20 lg:right-45 size-8 lg:size-10 max-[728px]:hidden"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </header>
      <main>
        {/* Benefits Section */}
        <section className="dc-benefits-section flex flex-col lg:flex-row w-full min-h-[700px] lg:min-h-[900px] bg-gradient-to-b from-[#FBF2C2] to-[#ffffff] py-10 max-[425px]:px-3 max-[375px]:px-3 max-[320px]:px-3">
          <header className="flex flex-col w-full lg:w-480 mt-6 sm:mt-10 lg:mt-50 px-2 sm:px-4 lg:px-0 items-center lg:items-start">
            <h2 className="w-full lg:ml-20 max-w-3xl p-2 text-center lg:text-left text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 max-lg:ml-0 max-lg:max-w-2xl">
              Benefits from{" "}
              <span className="heading-gradient bg-clip-text text-transparent">
                Digital Care
              </span>
            </h2>
            <p className="p-2 lg:ml-20 text-center lg:text-left text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-xl mt-2 mb-8 max-lg:ml-0 max-lg:max-w-3xl">
              Digital care combines expert support, wellness activities, and
              social connection to help seniors stay mentally active,
              emotionally balanced, and meaningfully engaged in everyday life.
            </p>
          </header>
          <section className="dc-benefits-cards w-full lg:relative flex mt-6 sm:mt-10 lg:mt-15 flex-col items-center gap-4 p-4 min-h-[540px] sm:min-h-[620px] lg:min-h-[700px] pb-16 sm:pb-20 max-lg:gap-4 max-lg:p-4">
            {benefits.map((benefit, index) => (
              <DigitalCareBenefitsCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                className={benefit.className}
              />
            ))}
          </section>
        </section>
        {/* Comprehensive Support Section */}
        <section
          className="relative w-full h-auto lg:h-160 mt-5 bg-cover bg-center bg-no-repeat overflow-hidden py-8 lg:py-0 max-[425px]:px-3 max-[375px]:px-3 max-[320px]:px-3"
          style={{
            backgroundImage: `url(${DigitalCareComprehensiveSupportBackground})`,
          }}
        >
          <header>
            <h2 className="w-full lg:w-3xl lg:ml-25 p-2 text-center lg:text-left text-2xl sm:text-4xl md:text-5xl lg:text-6xl [@media(width:1024px)]:text-[3.5rem] font-bold">
              Comprehensive Support,{" "}
              <span className="bg-gradient-to-r from-[#489740] via-[#32a176] to-[#10B2D4] bg-clip-text text-transparent">
                Every Step of the Way
              </span>
            </h2>
          </header>
          <div className="relative flex flex-col lg:flex-row mt-5 ml-0 lg:ml-15 w-full justify-center items-center gap-6 lg:gap-0">
            <figure>
              <img
                src={DigitalCareComprehensiveSupportFamilyArt}
                alt="Family illustration for comprehensive support"
                className="w-[260px] h-[200px] sm:w-[360px] sm:h-[260px] lg:w-100 lg:h-80 mt-2 sm:mt-4 lg:mt-5 rounded-2xl object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <section className="dc-whychoose flex flex-col justify-center items-center w-full gap-2 place-items-center place-content-center lg:w-1/2 px-4 sm:px-0">
              {whyChoose.map((item) => (
                <WhyChoose
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </section>
          </div>
        </section>
        {/* Contact Form Section */}
        <section className="dc-form-section w-full relative grid grid-cols-1 lg:grid-cols-2 gap-10 bg-gradient-to-b from-[#E2E8F0] to-[#ffffff] items-start px-4 sm:px-6 lg:px-6 py-10 max-[425px]:px-3 max-[375px]:px-3 max-[320px]:px-3">
          <ClientFormContent
            titleContent={"Simplify Things for your Loved Ones.  "}
            spanContent={"Book a Trial Session."}
            para={""}
            btnpara={"We typically respond within 24 hours"}
            img={DigitalCareClientSesctionSeniors}
          />
          <aside className="dc-form-wrap flex justify-center lg:justify-end">
            <ClientForm />
          </aside>
        </section>
      </main>
    </div>
  );
}

export default DigitalCare;
