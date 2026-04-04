import React from 'react'

function HomeHealthSupportStandardCard({ icon, title, description, className }) {
  return (
    <article
      className={`flex h-95 w-60 max-w-none flex-col items-center overflow-hidden text-xl ${className}`}
    >
      {/* Card icon */}
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      {/* Card content */}
      <header>
        <h3 className="mb-2 font-bold">{title}</h3>
      </header>
      <p className="w-full flex-1 overflow-hidden p-2 text-justify-center text-gray-800 font-medium lg:w-50">
        {description}
      </p>
    </article>
  )
}

export default HomeHealthSupportStandardCard
