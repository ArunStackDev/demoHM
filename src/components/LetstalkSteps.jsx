import React from "react";

function LetstalkSteps({ stepNumber, stepTilte, stepDescribtion }) {
  return (
    <article className="relative shadow shadow-2xl shadow-gray-500 text-start p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-gradient-to-b from-[#ffffff] to-[#FBF2C194] flex flex-col rounded-3xl mx-auto max-sm:max-w-[92%] max-sm:p-3">
      {/* Step number badge */}
      <div className="absolute shadow shadow-2xl flex justify-center items-center -top-6 left-1/2 -translate-x-1/2 shadow-gray-400 h-12 w-12 sm:h-14 sm:w-14 rounded-full text-center text-lg sm:text-xl text-gray-700 z-2 bg-white max-sm:h-11 max-sm:w-11 max-sm:text-base">
        {stepNumber}
      </div>
      {/* Step title */}
      <h3 className="text-center mt-8 w-full p-1 text-xl font-bold">
        {stepTilte}
      </h3>
      {/* Step description */}
      <p className="p-2 text-xl text-center font-medium">
        {stepDescribtion}
      </p>
    </article>
  );
}

export default LetstalkSteps;
