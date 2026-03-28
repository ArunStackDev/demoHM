import React, { Suspense, lazy, useRef } from "react";
import LetsTalkHero from "../assets/LetsTalkPageimg/LetsTalkHero.svg";
import LetstalkpageUserReview from "../components/LetstalkpageUserReview.jsx";
import LetstalkUserReview1 from "../assets/LetsTalkPageimg/LetstalkUserReview1.svg";
import LetstalkDottedLine from "../assets/LetsTalkPageimg/LetstalkDottedLine.svg";
import LetstalkSteps from "../components/LetstalkSteps.jsx";

const ClientForm = lazy(() => import("../components/ClientForm.jsx"));

function LetsTalk() {
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

  // Reference to scroll back to the hero message
  const topSectionRef = useRef(null);

  // Smooth scroll handler for the CTA button
  const handleScrollToTopSection = () => {
    topSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="w-screen relative overflow-x-hidden">
      {/* Hero section */}
      <header className="relative w-screen  flex flex-col items-center justify-center">
        <img
          src={LetsTalkHero}
          alt="Painting of a family with smiling faces"
          className="w-full h-auto"
          loading="eager" fetchPriority="high"
        />

        <h2
          className="absolute
          text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          top-[5%] sm:top-[8%] md:top-[10%] lg:top-[12%]
          px-2 sm:px-4 md:px-5
          text-white font-bold text-center leading-tight"
        >
          Let's Talk
        </h2>

        <p
          className="absolute
          text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl
          top-[22%] sm:top-[26%] md:top-[28%] lg:top-[30%]
          font-bold px-2 sm:px-4
          text-white text-center leading-snug"
        >
          We're here to help your loved ones age joyfully
        </p>

        <p
          className="absolute
          text-[11px] sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
          top-[42%] sm:top-[46%] md:top-[48%] lg:top-[50%]
          px-3 sm:px-6 md:px-4
          text-white font-bold text-center leading-snug
          max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%]"
          ref={topSectionRef}
        >
          Get in touch with us to explore how we can help your loved one to age
          actively.
        </p>
      </header>

      {/* Reviews and form section */}
      <section
        className="w-full bg-gradient-to-b from-[#E3E9F1] to-[#ffffff]
        grid grid-cols-1 lg:grid-cols-2
        gap-6 sm:gap-8
        items-start
        py-8 sm:py-10 md:py-12 lg:py-16
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
      >
        {/* Mobile horizontal review carousel */}
        <div
          className="flex lg:hidden
          overflow-x-auto
          gap-6
          px-6 pt-10 pb-6
          max-sm:px-4 max-sm:pt-6
          scroll-smooth
          snap-x snap-mandatory
          [&::-webkit-scrollbar]:hidden"
        >
          {letstalkUserReview.map((review) => (
            <div key={review.UserName} className="snap-start flex-shrink-0">
              <LetstalkpageUserReview
                userName={review.UserName}
                userImage={review.UserImage}
                userReview={review.UserReview}
              />
            </div>
          ))}
        </div>

        {/* Desktop stacked reviews */}
        <div className="hidden lg:flex flex-col gap-4 w-full">
          {letstalkUserReview.map((review) => (
            <LetstalkpageUserReview
              key={review.UserName}
              userName={review.UserName}
              userImage={review.UserImage}
              userReview={review.UserReview}
            />
          ))}
        </div>

        {/* Contact form */}
        <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0">
          <div
            className="absolute top-160 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl
            max-lg:static max-lg:mt-6 max-lg:mx-auto"
          >
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
        <p className="text-sm mb-5 p-5 sm:text-base md:text-lg text-center p-2 text-gray-800 font-semibold max-w-3xl max-sm:px-2">
          After you submit the form, we take you through a seamless process
          designed to help you understand our support offerings.
        </p>
        <div className="relative w-full max-w-6xl mt-8">
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
  );
}

export default LetsTalk;
