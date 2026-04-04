import React from "react";

function LetstalkpageUserReviewCard({ userName, userImage, userReview }) {
  return (
    <article
      className="relative
      bg-white italic
      w-100 h-40 ml-5 mr-5 shadow-olive-400 shadow-xl
      rounded-lg
      flex flex-col items-center justify-center text-center"
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
      <p className="font-medium  w-75  p-1 sm:p-2 text-xs sm:text-sm md:text-base max-sm:text-[11px]">
        {userReview}
      </p>
      {/* Reviewer name */}
      <h5 className="p-1  ml-5 sm:p-2 font-bold text-xs sm:text-sm md:text-base max-sm:text-[11px] self-start text-left">
        {userName}
      </h5>
    </article>
  );
}

export default LetstalkpageUserReviewCard;
