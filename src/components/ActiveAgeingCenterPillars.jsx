import React from "react";
import ActiveAgeingCenterPillarDIV from "../assets/ActiveAgeingPageimg/ActiveAgeingCenterPillarDIV.svg";
import ActiveAgeingCenterPillarMainDiv from "../assets/ActiveAgeingPageimg/ActiveAgeingCenterPillarMainDiv.svg";

function ActiveAgeingCenterPillars({ mainContent, subContent, subIcon }) {
 return (
    <article className="relative w-full max-w-4xl sm:max-w-3xl lg:max-w-4xl mb-6 px-4 sm:px-0 mx-auto">
      {/* Pillar main content */}
      <section className="rounded-2xl overflow-hidden ">
        <div
          className="
            flex justify-center items-center
            min-h-[64px] sm:min-h-[72px] lg:min-h-[80px]
            [clip-path:polygon(0_0,92%_0,100%_100%,0_100%)]
            bg-[#EAFFFE]
          "
        >
          <p className="w-full sm:max-w-[520px] lg:max-w-[600px]  ml-6 sm:ml-8 px-3 sm:px-6 py-2 sm:py-3 text-xl sm:text-sm md:text-xl font-medium text-gray-700 sm:text-left">
            {mainContent}
          </p>
        </div>
      </section>

      {/* Pillar label */}
      <aside
        className="
          static mt-3 sm:mt-0 sm:absolute sm:-left-8 sm:top-1/2 sm:-translate-y-1/2
          bg-[#3AA7A2] text-white
          px-2 sm:px-3 py-2 sm:py-2 lg:py-3
          min-h-[56px] sm:min-h-[56px] lg:min-h-[64px] w-full sm:w-40 lg:w-45
          rounded-xl
          shadow-md
          rotate-0 sm:-rotate-5
          flex
          items-center
          justify-center
          
        "
      >
        <img
          src={subIcon}
          alt={`${subContent} icon`}
          loading="lazy"
          decoding="async"
          className="size-5 sm:size-6 lg:size-8 rotate-0 sm:rotate-5 m-1"
        />
        <p className="text-xl  md:text-base sm:text-sm w-full font-semibold rotate-0 sm:rotate-5 m-1 text-center sm:text-left">
          {subContent}
        </p>
      </aside>

    </article>
  );
};



export default ActiveAgeingCenterPillars;
