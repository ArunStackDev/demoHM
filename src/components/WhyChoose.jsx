import React from "react";

function WhyChoose({ icon, title, content }) {
  return (
    <article className="flex w-full max-w-xl flex-col items-center gap-4 rounded-2xl p-3 text-center sm:flex-row sm:items-start sm:text-left">
      {/* Why choose icon */}
      <figure className="flex-shrink-0">
        <img
          src={icon}
          alt={`${title} icon`}
          loading="lazy"
          decoding="async"
          className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
        />
      </figure>
      {/* Why choose content */}
      <section className="space-y-2">
        <header>
          <h3 className="text-xl sm:text-lg md:text-xl font-bold text-slate-900">
            {title}
          </h3>
        </header>
        <p className="text-xl sm:text-base md:text-xl lg:text-xl font-semibold text-gray-800">
          {content}
        </p>
      </section>
    </article>
  );
}

export default WhyChoose;
