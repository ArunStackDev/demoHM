import React from 'react'

function SeniorFriendlyTravelExploration({ title, content }) {
  return (
    <article className="sft-card bg-[#4FBBB5] m-2 relative w-full max-w-sm h-36 shadow shadow-base shadow-gray-600 rounded-2xl overflow-hidden max-sm:h-auto max-sm:w-[95%] max-sm:max-w-[19rem] max-sm:pt-3 max-sm:pb-0">
      {/* Exploration Card Content */}
      <section className="sft-card-inner bg-white pl-6 absolute h-34 top-3 rounded-2xl max-[1024px]:left-3 max-[1024px]:right-3 max-sm:static max-sm:mx-0 max-sm:mt-0 max-sm:h-auto max-sm:w-full max-sm:pl-4 max-sm:pr-4 max-sm:pb-4 max-sm:rounded-2xl">
        <h3 className="sft-card-title text-start pt-5 text-base sm:text-lg font-bold text-slate-900 max-sm:pt-4">
          {title}
        </h3>
        <p className="sft-card-text mt-2 text-start text-sm sm:text-base md:text-lg lg:text-sm font-medium text-gray-800 max-sm:text-xs">
          {content}
        </p>
      </section>
      <style>{`
        @media (max-width: 768px) {
          .sft-card { height: 125px; }
          .sft-card-inner { height: 122px; overflow: hidden; }
          .sft-card-title { font-size: 0.875rem; line-height: 1.25rem; }
          .sft-card-text { font-size: 0.75rem; line-height: 1rem; }
        }
      `}</style>
    </article>
  )
}

export default SeniorFriendlyTravelExploration
