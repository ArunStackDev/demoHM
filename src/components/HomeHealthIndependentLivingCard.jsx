import React from 'react'

function HomeHealthIndependentLivingCard({title,content,className}) {
  return (
    <article className='independent-card relative h-auto min-h-40 w-full max-w-[16rem] rounded-2xl bg-gradient-to-r from-[#2C837F] to-[#E6FFFE] sm:m-4 sm:max-w-[20rem] md:max-w-[22rem] lg:m-2 lg:h-35 lg:w-125 lg:max-w-none'>
      {/* Independent living card content */}
      <div className={`${className} absolute inset-2 rounded-2xl p-5 shadow-gray-600 shadow-xs flex flex-col justify-center sm:p-6 md:p-7 lg:top-2 lg:left-2 lg:h-full lg:w-full lg:p-2 lg:pl-10`}>
       <header>
         <h3 className="mb-2 text-xl font-bold md:mt-2 lg:mt-0">{title}</h3>
       </header>
        <p className="w-full font-semibold max-w-full text-xl text-gray-800 lg:w-100 text-justify-center break-words">{content}</p>
      </div>
    </article>
  )
}

export default HomeHealthIndependentLivingCard
