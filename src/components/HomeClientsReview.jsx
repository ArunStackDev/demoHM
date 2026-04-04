import React from "react";

function HomeClientsReview({ review, isCenter, className = "" }) {
  if (!review) return null;

  return (
    <article
      className={`review-card w-full border border-gray-200 max-w-[20rem] sm:max-w-[22rem] md:max-w-[32rem] lg:max-w-[34rem] xl:max-w-[24rem] 2xl:max-w-[26rem] rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col gap-3 transition-transform duration-400 overflow-hidden h-[22rem] md:h-[24rem] lg:h-[25rem] ${className} ${
        isCenter
          ? "bg-gradient-to-b from-[#BAF5ED] to-[#ffffff] lg:scale-105"
          : "bg-white"
      }`}
    >
      {/* Review text */}
      <p className="review-text flex-1 text-sm sm:text-base font-semibold text-gray-700 leading-relaxed overflow-hidden">
        {review.reviewDescription}
      </p>
      {/* Reviewer identity */}
      <footer className="flex items-center gap-3 mt-2">
        <img
          src={review.profilePicture}
          alt="Review user profile picture"
          className="h-12 w-12 rounded-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="leading-tight">
          <div className="font-semibold text-sm sm:text-base text-black">
            {review.name}
          </div>
          <div className="text-xs sm:text-sm font-semibold text-gray-500">
            {review.clientLocation}
          </div>
        </div>
      </footer>
    </article>
  );
}

export default HomeClientsReview;
