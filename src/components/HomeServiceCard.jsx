// Service card for homepage initiatives
import { useNavigate } from "react-router-dom";
import HomeBtnarrow from "../assets/HomePageimg/HomeBtnarrow.svg";

const HomeServiceCard = ({ image, title, Service }) => {
  const navigate = useNavigate();

  return (
    <article className="h-70 w-70 p-2 border-none  bg-white rounded-2xl shadow-gray-500 shadow-sm hover:shadow-xl hover:scale-105 transform-gpu transition-all duration-300">
      {/* Card header with service image and title */}
      <header>
        <img
          src={image}
          alt={`${title} service illustration`}
          fetchpriority="high"
          loading="eager"
        />
        <h3 className="text-sm font-semibold p-2 ">{title}</h3>
      </header>
      <hr className="border-gray-300" />
      {/* Card action */}
      <div>
        <button
          onClick={() => navigate(Service)}
          className="bg-[#10B2D4] hover:bg-[#0a88a1] ml-2 mt-5 duration-300 h-10 w-35 flex text-sm rounded-sm text-white text-2xl font-body font-semibold justify-center items-center"
        >
          Know More
          <img
            src={HomeBtnarrow}
            alt="Arrow icon"
            className="ml-2 size-3"
            fetchpriority="high"
            loading="eager"
          />
        </button>
      </div>
    </article>
  );
};

export default HomeServiceCard;
