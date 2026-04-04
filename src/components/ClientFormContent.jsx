import React from "react";
import LetsTalkIcon from "../assets/LetsTalkPageimg/LetsTalkIcon.svg";
import { Link } from "react-router-dom";

function ClientFormContent({ titleContent, spanContent, para, btnpara, img }) {
  return (
    <div>
      <h2 className="ml-28 text-6xl lg:text-6xl mt-20  font-bold w-160 leading-18  max-[1400px]:ml-6 max-[1400px]:w-full max-lg:ml-0 max-lg:text-4xl max-md:text-2xl max-lg:w-full max-md:basis-full max-sm:leading-tight">
        {titleContent}
        <span className="heading-gradient bg-clip-text  text-transparent">
          {spanContent}
        </span>
      </h2>
      {para && (
        <p className="font-body ml-28 mt-6 font-semibold text-xl max-[1400px]:ml-6 max-lg:ml-0 max-lg:text-base max-sm:text-sm">
          {para}
        </p>
      )}
      {img && (
        <div className="flex w-full justify-center mt-10">
          <img
            src={img}
            alt={`${spanContent} illustration`}
            className="w-full h-80 max-w-[20rem] sm:max-w-[24rem] lg:max-w-[40rem] object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      <div className="flex h-20 gap-3 items-center ml-28 mt-10 w-150 font-body max-[1400px]:ml-6 max-[1400px]:w-full max-lg:ml-0 max-sm:flex-wrap max-sm:h-auto max-sm:mt-6">
        <Link to="/letstalk" className="hover:underline">
          <img src={LetsTalkIcon} alt="Contact-Us Icon" className="size-12" loading="lazy" decoding="async"/>
            </Link>


        <div className="flex flex-col">
          <h4 className="font-bold">
            <Link to="/letstalk" className="hover:underline">
              Get in Touch
            </Link>
          </h4>
          <p className="text-base">{btnpara}</p>
        </div>
      </div>
    </div>
  );
}

export default ClientFormContent;

