import React from "react";
import Image from "next/image";
import host from "../../public/Assets/Images/hostinger-logo.jpg";
import Slider from "react-slick";
import trip from "../../public/Assets/Images/makemytrip-logo.jpg";
import amazone from "../../public/Assets/Images/amazon-logo.jpg";
import muscle from "../../public/Assets/Images/muscleblaze-logo.jpg";
import { BiChevronRight } from "react-icons/bi";

// const SliderData = [
//   {
//     img: trip,
//     img2: amazone,
//     img3: muscle,
//   },
//   {
//     img: trip,
//     img2: amazone,
//     img3: muscle,
//   },
//   {
//     img: trip,
//     img2: amazone,
//     img3: muscle,
//   },
//   {
//     img: trip,
//     img2: amazone,
//     img3: muscle,
//   },
//   {
//     img: trip,
//     img2: amazone,
//     img3: muscle,
//   },
//   {
//     img: trip,
//     img2: amazone,
//     img3: muscle,
//   },
//   {
//     img: trip,
//     img2: amazone,
//     img3: muscle,
//   },
//   {
//     img: trip,
//     img2: amazone,
//     img3: muscle,
//   },
//   {
//     img: trip,
//     img2: amazone,
//     img3: muscle,
//   },
//   {
//     img: trip,
//     img2: amazone,
//     img3: muscle,
//   },
//   {
//     img: trip,
//     img2: amazone,
//     img3: muscle,
//   },
//   {
//     img: trip,
//     img2: amazone,
//     img3: muscle,
//   },
// ];

const PopularStore = ({ data }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const value1 = data ? data.slice(0, 1) : data;
  const value2 = data ? data.slice(1, 2) : data;
  const value3 = data ? data.slice(2, 3) : data;

  return (
    <div className="p-[20px_0]">
      <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[14px]">
        <h1 className="font-semibold relative after:absolute after:content-[''] after:bg-[#8db654] after:w-[80px] after:h-[3px] after:bottom-[-4px] after:left-0 mb-[24px] sm:text-[22px] text-[18px] text-[#030306]">
          Popular store
        </h1>
        <div className="lg:flex items-start gap-[12px] justify-between">
          <div className="border-[#e7e7e7] hover:border-[#8db654] rounded-md transition-all border-[1px] shadow-[0_3px_12px_0_rgba(2,3,5,.07)] min-w-[240px] lg:p-[12px] p-[6px_12px] group lg:block flex items-center lg:mb-0 mb-[12px]">
            <p className="text-[#7b7b7b] lg:border-b-[#d8d8d8] lg:border-b-[1px] lg:pb-[12px] lg:mb-2 lg:max-w-full  max-w-[84px] lg:text-[16px] text-[12px]">
              Featured Store Of The Month
            </p>
            <Image
              src={host}
              alt="host"
              className="group-hover:scale-[1.1] lg:w-[164px] w-[63px] m-auto cursor-pointer ease-in duration-300"
            />
            <button className="lg:hidden flex bg-[#8db654] w-[20px] h-[20px] rounded-full text-white justify-center items-center">
              <BiChevronRight />
            </button>
            <button className="border-[#41a900] border-[1px] p-[9.5px_0] w-full text-[13px] mt-[10px] rounded lg:block hidden">
              48 Coupons | 25 Offers Available
            </button>
          </div>
          <div className="xl:w-[80%] lg:w-[75%] slider-second cursor-pointer">
            <Slider {...settings}>
              <div className="!grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-[10px]">
                {value1?.map((item, key) => (
                  <div key={key}>
                    <div className="relative group transition-all">
                      <div className="border-[#e7e7e7] border-[1px] relative md:h-[75px] h-[52px] overflow-hidden rounded">
                        <Image
                          src={`/uploads/${item.RetailerLogo}`}
                          width={110}
                          height={100}
                          alt="promo"
                          className="md:w-[121px] w-[110px] mx-auto absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
                        />
                      </div>
                      <div className="absolute bg-[#2d3e50] w-full h-full top-0 text-white group-hover:flex justify-center items-center rounded text-[13px] hidden ">
                        <p className="leading-4">
                          MakeMyTrip <br />
                          <span className="group-hover:underline">
                            63 Coupons
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="!grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-[10px]">
                {value2?.map((item, key) => (
                  <div key={key}>
                    <div className="relative group transition-all">
                      <div className="border-[#e7e7e7] border-[1px] relative md:h-[75px] h-[52px] overflow-hidden rounded">
                        <Image
                          src={`/uploads/${item.RetailerLogo}`}
                          width={110}
                          height={100}
                          alt="promo"
                          className="md:w-[121px] w-[110px] mx-auto absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
                        />
                      </div>
                      <div className="absolute bg-[#2d3e50] w-full h-full top-0 text-white group-hover:flex justify-center items-center rounded text-[13px] hidden ">
                        <p className="leading-4">
                          MakeMyTrip <br />
                          <span className="group-hover:underline">
                            63 Coupons
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="!grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-[10px]">
                {value3?.map((item, key) => (
                  <div key={key}>
                    <div className="relative group transition-all">
                      <div className="border-[#e7e7e7] border-[1px] relative md:h-[75px] h-[52px] overflow-hidden rounded">
                        <Image
                          src={`/uploads/${item.RetailerLogo}`}
                          width={110}
                          height={100}
                          alt="promo"
                          className="md:w-[121px] w-[110px] mx-auto absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
                        />
                      </div>
                      <div className="absolute bg-[#2d3e50] w-full h-full top-0 text-white group-hover:flex justify-center items-center rounded text-[13px] hidden ">
                        <p className="leading-4">
                          MakeMyTrip <br />
                          <span className="group-hover:underline">
                            63 Coupons
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularStore;
