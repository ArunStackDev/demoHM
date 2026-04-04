import React from 'react'

function DigitalCareBenefitsCard({ icon, title, description, className }) {
  return (
    <article
      className={`dc-benefit-card flex w-full max-w-[560px] relative h-auto lg:h-[220px] min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] mt-6 sm:mt-8 lg:mt-10 bg-[#ffffff] shadow-2xs gap-4 sm:gap-6 p-4 sm:p-5 justify-start sm:justify-center items-start sm:items-center shadow-gray-600 rounded-br-full rounded-tl-full bg-cover bg-center ${className}`}
    >
      {/* Benefit Icon */}
      <img
        src={icon}
        alt={title}
        className="h-12 w-12 sm:h-14 sm:w-14 lg:h-15 lg:w-15 relative z-10 shrink-0"
        loading="lazy"
        decoding="async"
      />
      {/* Benefit Content */}
      <div className="w-full max-w-[360px] relative z-10">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold">{title}</h3>
        <p className="text-sm sm:text-base lg:text-[17px]">{description}</p>
      </div>
    </article>
  )
}

export default DigitalCareBenefitsCard
