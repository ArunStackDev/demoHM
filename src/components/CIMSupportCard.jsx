import React from "react";
import CIMSupportCardBackground from "../assets/CIMPageimg/CIMSupportCardBackground.svg";

function CIMSupportCard({ title, imageIcon, content }) {
  return (
    <>
      {/* Support Card */}
      <article className="relative h-[230px] max-[425px]:h-[150px] flex justify-center items-center w-[300px] max-w-[320px] sm:max-w-[360px] lg:max-w-[300px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#eef9ca] to-transparent mb-3">
        <img
          src={CIMSupportCardBackground}
          alt="Support card background"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="relative z-10 flex h-full flex-col p-2 sm:p-3 max-[425px]:p-2">
          {/* Card Header */}
          <header className="flex items-center gap-2 rounded-2xl px-3 py-2 max-[425px]:px-2 max-[425px]:py-1">
            <img
              src={imageIcon}
              alt={`${title} icon`}
              className="h-6 w-6 object-contain"
              loading="lazy"
              decoding="async"
            />
            <h3 className="text-xl md:text-xl sm:text-lg font-semibold leading-tight">{title}</h3>
          </header>
          {/* Card Body */}
          <div className="flex-1 w-full p-5  text-justify-center rounded-2xl bg-white/90  text-xl md:text-xl sm:text-sm  max-[425px]:text-sm font-semibold text-gray-800 overflow-hidden">
            {content}
          </div>
        </div>
      </article>
    </>
  );
}

export default CIMSupportCard;
