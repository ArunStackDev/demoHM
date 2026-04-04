import React from "react";

function ActiveAgeingCenterForCard({ icon, title, content }) {
  return (
    <article className="group  relative flex h-full w-full max-w-sm flex-col overflow-hidden rounded-2xl p-4 sm:p-5 min-h-[240px] sm:min-h-[260px]">
      {/* Card icon */}
      <figure className="flex h-12 w-12 items-center justify-center rounded-xl">
        <img
          src={icon}
          alt={`${title} icon`}
          loading="lazy"
          decoding="async"
          className="h-10 w-10 object-cover rounded-xl"
        />
      </figure>

      {/* Card copy */}
      <header>
        <h3 className="mt-4 text-xl sm:text-xl font-bold text-slate-900">
          {title}
        </h3>
      </header>
      <p className="mt-2 text-start text-sm sm:text-base md:text-xl lg:text-xl font-medium text-gray-800">
        {content}
      </p>
    </article>
  );
}

export default ActiveAgeingCenterForCard;
