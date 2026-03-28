import React from "react";

function HomeClientsReview({ review, isCenter, className = "" }) {
  if (!review) return null;

  return (
    <article
      className={`h-105 w-80 max-md:h-auto max-md:w-72 rounded-xl shadow-lg p-5 flex flex-col gap-3 overflow-hidden transition-transform duration-600 ${className} ${
        isCenter
          ? "scale-110 max-md:scale-100 bg-gradient-to-b from-[#BAF5ED] to-[#ffffff]"
          : "scale-100 bg-white"
      }`}
    >
      {/* Review text */}
      <p className="flex-1 mt-5 text-sm font-semibold text-gray-700 leading-relaxed overflow-hidden">
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
          <div className="font-semibold text-sm text-black">{review.name}</div>
          <div className="text-sm  font-semibold text-gray-500">
            {review.clientLocation}
          </div>
        </div>
      </footer>
    </article>
  );
}

export default HomeClientsReview;
