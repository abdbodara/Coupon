import React from "react";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelectedCardContext } from "@/context/createContext";

const TrandinDeals = ({ data }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const scrollToTop = () => {
    const dealsDayElement = document.getElementById("trendingdeal");
    if (dealsDayElement) {
      dealsDayElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const displayedData = data ? data?.slice(0, 5) : data;

  const { setIsOpen, setSelectedCardData } = useSelectedCardContext();

  return (
    <div className="py-[20px] bg-[#e6edf2]">
      <div className="lg:max-w-[1140px] md:max-w-[720px] max-w-[540px] mx-auto px-[14px]">
        <div className="mb-[24px] flex justify-between items-center">
          <h1 className="font-semibold relative after:absolute after:content-[''] after:bg-[#8db654] after:w-[80px] after:h-[3px] after:bottom-[-4px] after:left-0 md:text-[22px] sm:text-[18px] text-[#030306]">
            Today{"'"}s Trending Deals
          </h1>
          <button
            className="border-[1px] border-black sm:p-[10px_15px] lg:max-w-[228px] lg:w-full p-[7px_8px] flex items-center gap-[6px] sm:text-[16px] text-[12px]"
            onClick={scrollToTop}
          >
            <span className="flex-1">View All Deals</span>
            <span className="bg-[#42a1f4] w-[20px] h-[20px] shadow-[0_1px_3px_0_rgba(0,0,0,.37)] flex justify-center items-center text-white rounded-full">
              <BiChevronDown className="text-[16px]" />
            </span>
          </button>
        </div>
        <Slider {...settings}>
          {displayedData?.map((item, key) => (
            <div
              key={key}
              className="group shadow-[0_1px_4px_0_rgba(17,19,35,.08)] cursor-pointer hover:shadow-[0_1px_4px_0_rgba(112,168,34,.78)] border-[1px] border-[#e7e7e7] p-[12px] rounded-md hover:border-[#70a822] transition-all relative bg-white"
            >
              <div className="bg-[#8db654] absolute top-[14px] left-0 text-white text-[12px] p-[4px_8px]">
                {item.offer}
              </div>
              <div className="h-[150px] w-full">
                <Image
                  src={`/uploads/${item.image}`}
                  alt="eardopes"
                  width={100}
                  height={100}
                  className="mx-auto my-[20px] h-auto max-w-[80%] max-h-[80%] w-auto"
                />
              </div>
              <h1 className="text-[#a8b9c2] mb-[6px] text-[14px]">
                {item.brand?.brandTitle}
              </h1>
              <p className="text-[#16171a] text-[14px]  overflow-hidden">
                {item.description}
              </p>
              <div className="flex justify-between items-end mb-[6px]">
                <div>
                  <p className="text-black font-bold mt-[12px] lg:text-[22px] text-[14px]">
                    {item.price}
                  </p>
                  <span className="line-through text-[#7b7b7b] text-[14px]">
                    {item.oldPrice}
                  </span>
                </div>
                <button
                  className="text-[#2491ef] font-bold text-[14px] mr-[14pxs] hidden group-hover:block transition-all"
                  onClick={() => {
                    setIsOpen(true), setSelectedCardData(item);
                  }}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrandinDeals;
