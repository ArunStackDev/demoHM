// Service card for homepage initiatives
import { useNavigate } from "react-router-dom";
import HomeBtnarrow from "../assets/HomePageimg/HomeBtnarrow.svg";

const HomeServiceCard = ({ image, title, Service }) => {
  const navigate = useNavigate();

  return (
    <article className="group w-full bg-white rounded-2xl shadow-gray-500 shadow-sm hover:shadow-xl hover:-translate-y-1 transform-gpu transition-all duration-300 p-4 sm:p-5 lg:p-6">
      {/* Card header with service image and title */}
      <header>
        <img
          src={image}
          alt={`${title} service illustration`}
          fetchpriority="high"
          loading="eager"
          className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-contain"
        />
        <h3 className="text-base sm:text-lg font-semibold mt-2">{title}</h3>
      </header>
      <hr className="border-gray-300 mt-3" />
      {/* Card action */}
      <div className="mt-4">
        <button
          onClick={() => navigate(Service)}
          className="bg-[#10B2D4] hover:bg-[#0a88a1] duration-300 h-11 w-full sm:w-fit px-6 flex text-sm sm:text-base rounded-lg text-white font-body font-semibold justify-center items-center"
        >
          Know More
          <img
            src={HomeBtnarrow}
            alt="Arrow icon"
            className="ml-2 h-3 w-3"
            fetchpriority="high"
            loading="eager"
          />
        </button>
      </div>
    </article>
  );
};

export default HomeServiceCard;
