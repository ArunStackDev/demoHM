import React from "react";
import CIMSupportCardBackground from "../assets/CIMPageimg/CIMSupportCardBackground.svg";

function CIMSupportCard({ title, imageIcon, content }) {
  return (
    <>
      {/* Support Card */}
      <article className="relative h-[275px] max-[425px]:h-[240px] flex justify-center items-center w-[260px] max-w-[320px] sm:max-w-[360px] lg:max-w-[300px] aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-[#eef9ca] to-transparent">
        <img
          src={CIMSupportCardBackground}
          alt="Support card background"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="relative z-10 flex h-70 flex-col p-4 sm:p-5 max-[425px]:h-[220px] max-[425px]:p-3">
          {/* Card Header */}
          <header className="flex items-center gap-2 rounded-2xl px-4 py-3 max-[425px]:px-3 max-[425px]:py-2">
            <img
              src={imageIcon}
              alt={`${title} icon`}
              className="h-6 w-6 object-contain"
              loading="lazy"
          decoding="async"
            />
            <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
          </header>
          {/* Card Body */}
          <div className="mt-2 flex-1 w-[240px] rounded-2xl bg-white/90 p-2 sm:p-5 text-sm sm:text-base max-[425px]:text-xs font-semibold text-gray-700">
            {content}
          </div>
        </div>
      </article>
    </>
  );
}

export default CIMSupportCard;
