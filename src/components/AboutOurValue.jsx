import React from "react";
import AboutPageCampassion from "../assets/AboutPageimg/AboutPageCampassion.svg";

function AboutOurValue({ valuesTitle, image, valuesContent }) {
  // Default content used when no value is selected
  const defValue = "Compassion";
  const defValueImg = AboutPageCampassion;
  const defValueContent =
    "We believe every elder deserves care, dignity, and understanding. Our compassionate approach focuses on listening, supporting, and standing beside seniors and their families at every step. By combining empathy with thoughtful solutions, we aim to create a safe, respectful environment where elders can live with comfort, confidence, and independence.";
  const Title = valuesTitle ? valuesTitle : defValue;
  const Content = valuesContent ? valuesContent : defValueContent;
  const ImageSrc = image ? image : defValueImg;
  return (
    <section className="mt-10  w-full max-w-6xl border mx-auto px-4 grid place-items-center">
      <div className="grid grid-cols-2 gap-8 items-center max-md:grid-cols-1 w-full max-w-5xl mx-auto">
        {/* Value title and description */}
        <div className="md:min-h-[300px]">
          <h2 className="text-6xl lg:text-6xl font-bold mt-2 pt-5 mb-2 pb-1 heading-gradient bg-clip-text text-transparent text-center xl:text-left max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
            {Title}
          </h2>
          <p className="text-gray-900 text-xl text-justify p-2 font-medium xl:text-left max-md:text-base">
            {Content}
          </p>
        </div>
        {/* Value image */}
        <figure className="flex justify-center xl:justify-end">
          <img
            src={ImageSrc}
            alt={`${Title} illustration`}
            className="rounded-4xl w-full max-w-[520px] lg:max-w-[420px] h-auto"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}

export default AboutOurValue;

