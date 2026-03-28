import React from "react";

function LetstalkpageUserReview({ userName, userImage, userReview }) {
  return (
    <article
      className="relative
      bg-white italic
      w-full shadow-olive-400 shadow-xl
      max-w-[450px]
      md:ml-0
      lg:max-w-[380px] lg:ml-10
      xl:max-w-[450px] xl:ml-40
      mx-auto
      mt-0
      mb-6 sm:mb-8 md:mb-8
      pl-10 sm:pl-10 md:pl-14
      pt-4 sm:pt-10
      pr-4 sm:pr-10
      pb-4 sm:pb-10
      max-sm:pl-9 max-sm:pr-3 max-sm:pb-3 max-sm:pt-3
      text-start rounded-2xl border flex flex-col border-[#33A3A4]
      min-h-[110px] sm:min-h-[130px] md:min-h-[150px]
      max-sm:max-w-[92%]"
    >
      {/* Reviewer avatar */}
      <img
        src={userImage}
        alt={`${userName} profile`}
        className="absolute
          -left-8 sm:-left-10 md:-left-12
          -top-3 sm:-top-4 md:-top-5
          size-16 sm:size-20 md:size-22
          max-sm:-left-6 max-sm:-top-2 max-sm:size-14"
      />

      {/* Review text */}
      <p className="font-medium p-1 sm:p-2 text-xs sm:text-sm md:text-base leading-snug max-sm:text-[11px]">
        {userReview}
      </p>
      {/* Reviewer name */}
      <h5 className="p-1 sm:p-2 font-bold text-xs sm:text-sm md:text-base max-sm:text-[11px]">
        {userName}
      </h5>
    </article>
  );
}

export default LetstalkpageUserReview;
