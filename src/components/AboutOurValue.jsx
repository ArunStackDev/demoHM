import React from "react";
import AboutPageCampassion from "../assets/AboutPageimg/AboutPageCampassion.svg";

function AboutOurValue({ valuesTitle, image, valuesContent }) {
  // Default content used when no value is selected
  const defValue = "Compassion";
  const defValueImg = AboutPageCampassion;
  const defValueContent =
    "We believe every elder deserves care, dignity, and understanding. Our compassionate approach focuses on listening, supporting, and standing beside seniors and their families at every step. By combining empathy with thoughtful solutions, we aim to create a safe, respectful environment where elders can live with comfort, confidence, and independence.";
  const resolvedTitle = valuesTitle ? valuesTitle : defValue;
  const resolvedContent = valuesContent ? valuesContent : defValueContent;
  const resolvedImageSrc = image ? image : defValueImg;
  return (
    <section className="mt-10 w-full max-w-6xl mx-auto px-4 grid place-items-center">
      <div className="grid grid-cols-2 gap-8 items-center max-md:grid-cols-1 w-full max-w-5xl mx-auto">
        {/* Value title and description */}
        <div>
          <h2 className="text-6xl font-bold mt-2 pt-5 mb-5 pb-2 bg-gradient-to-r from-[#36A178] to-[#10B2D4] bg-clip-text text-transparent text-center xl:text-left max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
            {resolvedTitle}
          </h2>
          <p className="text-gray-900 text-xl font-medium text-center xl:text-left max-md:text-base">
            {resolvedContent}
          </p>
        </div>
        {/* Value image */}
        <figure className="flex justify-center xl:justify-end">
          <img
            src={resolvedImageSrc}
            alt={`${resolvedTitle} illustration`}
            className="rounded-4xl w-full max-w-[520px] lg:max-w-[420px] h-auto"
            loading="eager" fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  );
}

export default AboutOurValue;
