import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularStore from "./popular";
import CouponOffer from "./coupon";
import Offer from "./Offer";
import Deals from "./details";
import Collection from "./Collection";
import Categories from "./Categories";
import { useRouter } from "next/router";

// const offer = [
//   {
//     img: sale,
//     logo: amazone,
//     saledata: (
//       <>
//         <p className="text-black font-medium mb-[14px]">
//           80% <span className="text-[12px]">OFF</span>
//         </p>
//       </>
//     ),
//     amaze:
//       "Amazon Great Freedom Festival Sale - Up to 80% OFF+ 10% Discount (SBI Users) On All Categories {LIVE NOW}",
//   },
//   {
//     img: sale2,
//     logo: rock,
//     saledata: (
//       <>
//         <div className="mb-[14px] flex justify-between">
//           <p className="text-black font-medium"> FREE OFFER </p>
//           <button className="bg-[#8db654] text-white text-[12px] p-[2px_6px] h-[18px] lg:flex hidden justify-center items-center">
//             EXCLUSIVE
//           </button>
//         </div>
//       </>
//     ),
//     amaze: "SSD Web Hosting + Free .COM/.IN Domain @ Rs 120/mo",
//   },
//   {
//     img: sale3,
//     logo: sleep,
//     saledata: (
//       <>
//         <div className="mb-[14px] flex justify-between">
//           <p className="text-black font-medium"> GRABON EXCLUSIVE </p>
// <button className="bg-[#8db654] text-white text-[12px] p-[2px_6px] h-[18px] lg:flex hidden justify-center items-center">
//   EXCLUSIVE
// </button>
//         </div>
//       </>
//     ),
//     amaze: "Get Up To 45% OFF On SmartGRID Mattress + Extra 5% OFF",
//   },
//   {
//     img: sale3,
//     logo: sleep,
//     saledata: (
//       <>
//         <div className="mb-[14px] flex justify-between">
//           <p className="text-black font-medium"> GRABON EXCLUSIVE </p>
//           <button className="bg-[#8db654] text-white text-[12px] p-[2px_6px] h-[18px] lg:flex hidden justify-center items-center">
//             EXCLUSIVE
//           </button>
//         </div>
//       </>
//     ),
//     amaze: "Get Up To 45% OFF On SmartGRID Mattress + Extra 5% OFF",
//   },
// ];

const PopularCard = ({ data, offerdata, categories }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openInNewTab = (url) => {
    window.open(url);
  };

  const router = useRouter();

  return (
    <div>
      <div className="bg-[linear-gradient(to_bottom,#f1f5f8,#dfe8ef)] p-[20px_0]">
        <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[14px]">
          <h1 className="font-semibold relative after:absolute after:content-[''] after:bg-[#8db654] after:w-[80px] after:h-[3px] after:bottom-[-4px] after:left-0 mb-[24px] sm:text-[22px] text-[18px] text-[#030306]">
            Popular Offers of the Day
          </h1>
          <div className="md:hidden mt-[20px] gap-x-[10px] gap-y-4 grid grid-cols-2">
            {offerdata?.map((data, key) => (
              <div
                key={key}
                onClick={() => {
                  openInNewTab(`/coupon_code/${data._id}`);
                  router.push(`/redeem/${data._id}`);
                }}
              >
                <div className="relative cursor-pointer hover:translate-y-[-6px] transition-main hover:shadow-[0_2px_14px_3px_rgba(0,0,0,.03)] rounded">
                  <div className="w-[60px] h-[60px] shadow-[0_5px_6px_3px_rgba(0,0,0,.09)] bg-white rounded-md flex justify-center items-center absolute top-[12px] left-[12px]">
                    <Image
                      src={`/uploads/${data.logo}`}
                      alt="logo"
                      width={42}
                      height={42}
                    />
                  </div>
                  <Image
                    src={`/uploads/${data.image}`}
                    alt="sale"
                    className="w-full h-full max-h-[90px] sm:max-h-[100px] object-cover rounded-[4px_4px_0_0]"
                    height={100}
                    width={100}
                  />
                  <div className="p-[12px] bg-white rounded-[0_0_4px_4px]">
                    {data.title}
                    {/*<button className="bg-[#8db654] text-white text-[12px] p-[2px_6px] h-[18px] lg:flex hidden justify-center items-center">
                      EXCLUSIVE
                    </button>*/}
                    <p className="h-[40px] text-[#515151] leading-[1.4] text-[14px] overflow-hidden mb-[12px]">
                      {data.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <Slider {...settings}>
              {offerdata?.map((data, key) => (
                <div
                  key={key}
                  onClick={() => {
                    openInNewTab(`/coupon_code/${data._id}`);
                    router.push(`/redeem/${data._id}`);
                  }}
                >
                  <div className="relative cursor-pointer hover:translate-y-[-6px] transition-main hover:shadow-[0_2px_14px_3px_rgba(0,0,0,.03)] mt-[20px] rounded">
                    <div className="w-[60px] h-[60px] shadow-[0_5px_6px_3px_rgba(0,0,0,.09)] bg-white rounded-md flex justify-center items-center absolute top-[12px] left-[12px]">
                      <Image
                        src={`/uploads/${data.logo}`}
                        alt="logo"
                        width={42}
                        height={42}
                      />
                    </div>
                    <Image
                      src={`/uploads/${data.image}`}
                      alt="sale"
                      className="w-full h-full max-h-[140px] lg:max-h-[200px] object-cover rounded-[4px_4px_0_0]"
                      height={600}
                      width={600}
                    />
                    <div className="p-[12px] bg-white rounded-[0_0_4px_4px]">
                      {data.title}
                      {/*<button className="bg-[#8db654] text-white text-[12px] p-[2px_6px] h-[18px] lg:flex hidden justify-center items-center">
                        EXCLUSIVE
                      </button>*/}
                      <p className="h-[40px] text-[#515151] leading-[1.4] text-[14px] overflow-hidden mb-[12px]">
                        {data.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <PopularStore data={data} />
      <CouponOffer />
      <Deals categories={categories} />
      <Collection />
      <Offer />
      <Categories data={data} />
    </div>
  );
};

export default PopularCard;
