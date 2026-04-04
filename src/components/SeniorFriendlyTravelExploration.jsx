import React from 'react'

function SeniorFriendlyTravelExploration({ title, content }) {
  return (
    <article className="sft-card bg-[#4FBBB5] m-2 relative w-full max-w-sm h-46 pt-3 shadow shadow-base shadow-gray-600 rounded-2xl overflow-hidden max-sm:w-[95%] max-sm:max-w-[19rem] max-sm:h-44">
      {/* Exploration Card Content */}
      <section className="sft-card-inner w-full bg-white rounded-2xl px-6 py-4 h-full">
        <h3 className="sft-card-title text-start text-xl font-bold text-slate-900">
          {title}
        </h3>
        <p className="sft-card-text mt-2 text-start text-xl font-medium text-gray-800">
          {content}
        </p>
      </section>
      <style>{`
        .sft-card-text {
          display: -webkit-box;
         
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </article>
  )
}

export default SeniorFriendlyTravelExploration
