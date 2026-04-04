import { useRef, useState } from "react";
import LetsTalkHero from "../assets/LetsTalkPageimg/LetsTalkHero.svg";
import LetstalkpageUserReviewCard from "../components/LetstalkpageUserReviewCard.jsx";
import ClientForm from "../components/ClientFormLazy.jsx";
import LetstalkUserReview1 from "../assets/LetsTalkPageimg/LetstalkUserReview1.svg";
import LetstalkDottedLine from "../assets/LetsTalkPageimg/LetstalkDottedLine.svg";
import LetstalkSteps from "../components/LetstalkSteps.jsx";
import CIMLeftArrow from "../assets/CIMPageimg/CIMLeftArrow.svg";
import CIMRightArrow from "../assets/CIMPageimg/CIMRightArrow.svg";
import HomePeopleGraphic from "../assets/HomePageimg/HomePeopleGraphic.svg";
import Seo from "../components/Seo.jsx";

function LetsTalk() {
  const statsData = [
    { id: 1, value: 25, suffix: "+", label: "Hospital Partners" },
    { id: 2, value: 30, suffix: "+", label: "Specialized doctors" },
    { id: 3, value: 50, suffix: "+", label: "Committed professionals" },
    { id: 4, value: 200, suffix: "+", label: "Community Activations" },
    { id: 5, value: 5000, suffix: "+", label: "Happy families" },
  ];
  // User reviews displayed on the page
  const letstalkUserReview = [
    {
      UserName: "John Doe",
      UserImage: LetstalkUserReview1,
      UserReview:
        "Happymindz has been a blessing for our family. My mother feels more confident and joyful every day!",
    },
    {
      UserName: "Priya Nair",
      UserImage: LetstalkUserReview1,
      UserReview:
        "The team is incredibly caring and professional. We couldn't be happier with the support provided.",
    },
    {
      UserName: "John Doe",
      UserImage: LetstalkUserReview1,
      UserReview:
        "Happymindz has been a blessing for our family. My mother feels more confident and joyful every day!",
    },
    {
      UserName: "Priya Nair",
      UserImage: LetstalkUserReview1,
      UserReview:
        "The team is incredibly caring and professional. We couldn't be happier with the support provided.",
    },
  ];
  // Step-by-step process shown in the "What Next?" section
  const steps = [
    {
      stepNumber: 1,
      stepTilte: "Discovery Call",
      stepDescribtion:
        "After you submit the form, we take you through a seamless process designed to help you understand our support offerings.",
    },
    {
      stepNumber: 2,
      stepTilte: "Personalized Plans",
      stepDescribtion:
        "We personalize the Happymindz experience, to fit the specific personality, and requirements of your loved one.",
    },
    {
      stepNumber: 3,
      stepTilte: "Experience the Joy",
      stepDescribtion:
        "You are always welcome to visit our Active Ageing Centre during events for a quick walkthrough to see our community in action.",
    },
  ];

  // Reference to scroll to the form
  const formSectionRef = useRef(null);

  // Review carousel state
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handlePrevReview = () => {
    setCurrentReviewIndex((prev) =>
      prev === 0 ? letstalkUserReview.length - 1 : prev - 1,
    );
  };

  const handleNextReview = () => {
    setCurrentReviewIndex((prev) =>
      prev === letstalkUserReview.length - 1 ? 0 : prev + 1,
    );
  };

  // Smooth scroll handler for the CTA button
  const handleScrollToTopSection = () => {
    formSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="w-screen relative overflow-x-hidden">
      <Seo
        title="Contact Us"
        description="Get in touch with Happymindz to learn about senior care services, community programs, and support options."
        schema="webpage"
      />
      {/* Hero section */}
      <header className="relative  w-screen h-200 flex flex-col items-center justify-center">
        <img
          src={LetsTalkHero}
          alt="Painting of a family with smiling faces"
          className="absolute inset-0 w-full h-full object-cover object-top rounded-b-3xl "
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 rounded-b-3xl bg-gradient-to-b from-[#06403C4D] to-[#025D581A]" />

        <h2
          className="absolute
          text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          top-[5%] sm:top-[8%] md:top-[10%] lg:top-[12%]
          px-2 sm:px-4 md:px-5
          text-white font-bold text-center leading-tight"
        >
          Let's Talk
        </h2>

        <p
          className="absolute
          text-[11px] sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl
          drop-shadow-2xl text-shadow-900
          top-[42%] sm:top-[46%] md:top-[48%] lg:top-[23%]
          px-3 sm:px-6 md:px-4
          text-white font-bold text-center leading-snug
          max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[100%]"
        >
          Explore how we can help your loved ones to age actively.
        </p>
      </header>
      <main>
        {/* Reviews and form section */}
        <section
          className="w-full h-180 bg-gradient-to-b  from-[#E3E9F1] to-[#ffffff]
        grid grid-cols-1 lg:grid-cols-2
        gap-6 sm:gap-8
        items-start
        py-8 sm:py-10 md:py-12 lg:py-16
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
        >
          {/* Reviews  */}
          <div className="flex flex-col items-center  w-full h-full gap-2">
            <div className="review-box h-full w-full  flex items-center justify-center">
              <button
                type="button"
                onClick={handlePrevReview}
                aria-label="Previous review"
              >
                <img
                  src={CIMLeftArrow}
                  alt="Previous review"
                  className="border object-cover h-10 w-10 border-[#33A3A4] border-4 mr-10 rounded-full"
                />
              </button>
              <LetstalkpageUserReviewCard
                key={currentReviewIndex}
                userName={letstalkUserReview[currentReviewIndex].UserName}
                userImage={letstalkUserReview[currentReviewIndex].UserImage}
                userReview={letstalkUserReview[currentReviewIndex].UserReview}
              />
              <button
                type="button"
                onClick={handleNextReview}
                aria-label="Next review"
              >
                <img src={CIMRightArrow} alt="Next review" className="border object-cover h-10 w-10 border-[#33A3A4] border-4 ml-5 rounded-full" />
              </button>
            </div>
            <div className="relative  h-full w-full">
              <img
                src={HomePeopleGraphic}
                alt="Illustration of people enjoying together"
                className="object-cover h-full w-full"
                loading="lazy"
                decoding="async"
              />
              <div className="w-full h-1/2 rounded-2xl flex items-center justify-center heading-gradient absolute top-28">
                {statsData.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex  h-30 w-28 m-2 flex-col items-center justify-center"
                  >
                    <span className="text-base sm:text-3xl md:text-4xl lg:text-xl font-bold text-white">
                      {stat.value}
                      {stat.suffix}
                    </span>
                    <span className="text-sm text-center sm:text-base md:text-lg lg:text-base text-white font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0">
            <div
              ref={formSectionRef}
              className="absolute top-170 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl
            max-lg:static max-lg:mt-6 max-lg:mx-auto"
            >
              <ClientForm />
            </div>
          </div>
        </section>
        {/* Steps section */}
        <section className="flex flex-col items-center w-full bg-gradient-to-b from-[#ffffff] to-[#65C4BF] py-10 px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-4 mb-4 font-bold max-w-4xl">
            What{" "}
            <span className="bg-gradient-to-r  from-[#36A178] to-[#10B2D4] bg-clip-text  text-transparent">
              Next ?
            </span>
          </h2>
          <p className="text-2xl mb-5  p-5 text-center p-2 text-gray-800 font-semibold max-w-8xl max-sm:px-2">
            After you submit the form, we take you through a seamless process
            designed to help you understand our support offerings.
          </p>
          <div className="relative w-full max-w-6xl mt-15">
            <img
              src={LetstalkDottedLine}
              alt="Decorative dotted line connector"
              className="hidden md:block absolute inset-x-0 -top-15  w-full  md:max-w-120 lg:max-w-3xl mx-auto"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-sm:gap-4">
              {steps.map((step) => (
                <LetstalkSteps
                  key={step.stepNumber}
                  stepNumber={step.stepNumber}
                  stepTilte={step.stepTilte}
                  stepDescribtion={step.stepDescribtion}
                />
              ))}
            </div>
          </div>
          {/* Scroll-to-top CTA */}
          <div className="h-12 mt-20 mb-10 w-40 shadow-xs hover:shadow-xl duration-300 shadow-gray-600 flex items-center justify-center bg-[#33A3A4] rounded-xl text-white font-medium  p-2 max-sm:mt-12">
            <button onClick={handleScrollToTopSection}>Get in Touch</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LetsTalk;
