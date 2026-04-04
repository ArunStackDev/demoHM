import React from "react";

function HomeHealthSupportNeedsCard({ icon, title, description }) {
  return (
    <>
      {/* Needs card content */}
      <article className="m-4 flex min-h-56 w-full max-w-[18rem] flex-col items-center justify-center gap-2 sm:m-6 sm:max-w-[20rem] md:max-w-[22rem] lg:m-10 lg:h-60 lg:w-96">
        {icon}
        <header className="w-full">
          <h3 className="h-auto w-full text-center text-xl font-bold lg:h-10">{title}</h3>
        </header>
        <p className="h-full w-full p-2 text-center text-xl text-gray-800 font-medium">
          {description}
        </p>
      </article>
      {/* Vertical divider */}
      <div className="mt-20 hidden h-45 w-1 self-stretch bg-[#42B6B0] lg:inline-block"></div>
    </>
  );
}

export default HomeHealthSupportNeedsCard;
