import React from "react";
import AboutpageLinkedinIcon from "../assets/AboutPageimg/AboutpageLinkedinIcon.svg";

import AboutpageMemberProfile from "../assets/AboutPageimg/AboutpageMemberProfile.svg";

function AboutMeetTeam({ linkedinUrl, name, designation, imageSrc }) {
  // Fallbacks for missing member data
  const LinkedinUrl = linkedinUrl || "https://linkedin.com/";
  const Name = name || "Name";
  const Designation = designation || "Designation";
  const ImageSrc = imageSrc || AboutpageMemberProfile;
  return (
    <article className="h-80 w-48 rounded-full mt-6 bg-[#E0E0E0] flex flex-col items-center max-md:h-72 max-md:w-42 max-sm:h-64 max-sm:w-36">
      {/* Member photo and name */}
      <header className="flex flex-col items-center">
        <img
          src={ImageSrc}
          alt="Team member Profile picture"
          className="object-cover w-36 h-36 mt-3 max-md:w-32 max-md:h-32 max-sm:w-28 max-sm:h-28"
          loading="lazy" decoding="async"
        />
        <h3 className="text-lg font-semibold mt-2 p-1 max-sm:text-base">
          {Name}
        </h3>
      </header>
      {/* Member role */}
      <p className="text-sm m-2 max-sm:text-xs">{Designation}</p>
      {/* Member social link */}
      <footer>
        <a href={LinkedinUrl} target="_blank" rel="noreferrer">
          <img
            src={AboutpageLinkedinIcon}
            alt="Team member Linkedin profile"
            className="size-5 m-2"
            loading="lazy" decoding="async"
          />
        </a>
      </footer>
    </article>
  );
}

export default AboutMeetTeam;
