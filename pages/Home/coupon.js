/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { RiCoupon2Line } from "react-icons/ri";
import { MdTravelExplore } from "react-icons/md";
import { IoFlashOutline, IoShirtOutline } from "react-icons/io5";
import { PiBowlFood } from "react-icons/pi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import Image from "next/image";
import add from "../../public/Assets/Images/banner-add.jpg";
// import drav from "../../public/Assets/Images/drvaidyas-logo.jpg";
// import amzone from "../../public/Assets/Images/amazon-logo.jpg";
// import dell from "../../public/Assets/Images/dell-logos.jpg";
import axios from "axios";

// const CardData = [
//   {
//     text: (
//       <div className="bg-[#f0f2f5] text-[#515151] text-[14px] font-bold flex justify-center items-center text-center p-[6px] lg:w-[122px] w-[85px] h-[72px] overflow-hidden lg:m-0 m-[12px]">
//         INDEPENDENCE DAY SALE
//       </div>
//     ),
//     img: drav,
//     des: "The Great Freedom Sale : Up To 45% OFF + Extra 10% OFF On Prepaid Orders",
//     link: "See All Dr.Vaidya's Offers",
//   },
//   {
//     text: (
//       <div className="bg-[#f0f2f5] text-[#515151] text-[14px] font-bold flex justify-center items-center text-center p-[6px] lg:w-[122px] w-[85px] h-[72px] overflow-hidden lg:m-0 m-[12px]">
//         SALE
//       </div>
//     ),
//     img: dell,
//     des: "Back To College Days - Up to 50% OFF + Extra Rs 2000 OFF",
//     link: "See All Dell Offers",
//   },
//   {
//     text: (
//       <div className="bg-[#f0f2f5] text-[#515151] text-[14px] font-bold flex justify-center items-center text-center p-[6px] lg:w-[122px] w-[85px] h-[72px] overflow-hidden lg:m-0 m-[12px]">
//         80%
//       </div>
//     ),
//     img: amzone,
//     des: "Amazon Great Freedom Festival Sale - Up to 80% OFF+ 10% Discount (SBI Users) On All Categories {LIVE NOW}",
//     link: "See All Amazon Offers",
//   },
//   {
//     text: (
//       <div className="bg-[#f0f2f5] text-[#515151] text-[14px] font-bold flex justify-center items-center text-center p-[6px] lg:w-[122px] w-[85px] h-[72px] overflow-hidden lg:m-0 m-[12px]">
//         INDEPENDENCE DAY SALE
//       </div>
//     ),
//     img: drav,
//     des: "The Great Freedom Sale : Up To 45% OFF + Extra 10% OFF On Prepaid Orders",
//     link: "See All Dr.Vaidya's Offers",
//   },
//   {
//     text: (
//       <div className="bg-[#f0f2f5] text-[#515151] text-[14px] font-bold flex justify-center items-center text-center p-[6px] lg:w-[122px] w-[85px] h-[72px] overflow-hidden lg:m-0 m-[12px]">
//         SALE
//       </div>
//     ),
//     img: dell,
//     des: "Back To College Days - Up to 50% OFF + Extra Rs 2000 OFF",
//     link: "See All Dell Offers",
//   },
//   {
//     text: (
//       <div className="bg-[#f0f2f5] text-[#515151] text-[14px] font-bold flex justify-center items-center text-center p-[6px] lg:w-[122px] w-[85px] h-[72px] overflow-hidden lg:m-0 m-[12px]">
//         80%
//       </div>
//     ),
//     img: amzone,
//     des: "Amazon Great Freedom Festival Sale - Up to 80% OFF+ 10% Discount (SBI Users) On All Categories {LIVE NOW}",
//     link: "See All Amazon Offers",
//   },
//   {
//     text: (
//       <div className="bg-[#f0f2f5] text-[#515151] text-[14px] font-bold flex justify-center items-center text-center p-[6px] lg:w-[122px] w-[85px] h-[72px] overflow-hidden lg:m-0 m-[12px]">
//         INDEPENDENCE DAY SALE
//       </div>
//     ),
//     img: drav,
//     des: "The Great Freedom Sale : Up To 45% OFF + Extra 10% OFF On Prepaid Orders",
//     link: "See All Dr.Vaidya's Offers",
//   },
//   {
//     text: (
//       <div className="bg-[#f0f2f5] text-[#515151] text-[14px] font-bold flex justify-center items-center text-center p-[6px] lg:w-[122px] w-[85px] h-[72px] overflow-hidden lg:m-0 m-[12px]">
//         SALE
//       </div>
//     ),
//     img: dell,
//     des: "Back To College Days - Up to 50% OFF + Extra Rs 2000 OFF",
//     link: "See All Dell Offers",
//   },
//   {
//     text: (
//       <div className="bg-[#f0f2f5] text-[#515151] text-[14px] font-bold flex justify-center items-center text-center p-[6px] lg:w-[122px] w-[85px] h-[72px] overflow-hidden lg:m-0 m-[12px]">
//         80%
//       </div>
//     ),
//     img: amzone,
//     des: "Amazon Great Freedom Festival Sale - Up to 80% OFF+ 10% Discount (SBI Users) On All Categories {LIVE NOW}",
//     link: "See All Amazon Offers",
//   },
// ];

const CouponOffer = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Most Used");
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = async () => {
      const value = await axios
        .get(
          `http://localhost:3000/api/getcategories?categories=${activeCategory}`
        )
        .then((res) => {
          setData(res.data.data);
        })
        .catch((error) => {
          console.log("issue---------->", error);
        });
    };
    response();
  }, [activeCategory]);

  const clickHandler = () => {
    setShowMore(!showMore);
  };

  const displayedCardData = showMore ? data : data.slice(0, 1);

  return (
    <div className="bg-[linear-gradient(to_bottom,#f1f5f8,#dfe8ef)] p-[20px_0] mt-[40px]">
      <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[14px]">
        <h1 className="font-semibold relative after:absolute after:content-[''] after:bg-[#8db654] after:w-[80px] after:h-[3px] after:bottom-[-4px] after:left-0 mb-[24px] sm:text-[22px] text-[18px] text-[#030306]">
          Today's Top Coupons & Offers
        </h1>
        <div className="lg:flex gap-[26px] items-start">
          <div className="lg:min-w-[246px] scroll-hide lg:block flex gap-[24px] p-[16px] bg-white rounded-[10px] lg:mb-0 mb-[12px] overflow-x-auto">
            <div
              className={`flex lg:flex-row flex-col cursor-pointer gap-[10px] text-[14px] lg:mb-[24px] transition-data hover:translate-x-[6px] ${
                activeCategory === "Most Used"
                  ? "text-[#61a800]"
                  : "text-[#16171a]"
              }`}
              onClick={() => {
                setActiveCategory("Most Used");
              }}
            >
              <div className="flex justify-center items-center bg-[#efefef] w-[40px] h-[40px] rounded-full">
                <RiCoupon2Line className="text-[18px]" />
              </div>
              <p className="mt-[10px]">Most Used</p>
            </div>
            <div
              className={`flex lg:flex-row flex-col text-[#16171a] gap-[10px] text-[14px] lg:mb-[24px] transition-data hover:translate-x-[6px] cursor-pointer ${
                activeCategory === "Travel"
                  ? "text-[#61a800]"
                  : "text-[#16171a]"
              }`}
              onClick={() => {
                {
                  setActiveCategory("Travel");
                }
              }}
            >
              <div className="flex justify-center items-center bg-[#efefef] w-[40px] h-[40px] rounded-full">
                <MdTravelExplore className="text-[18px]" />
              </div>
              <p className="mt-[10px]">Travel</p>
            </div>
            <div
              className={`flex lg:flex-row flex-col text-[#16171a] gap-[10px] text-[14px] lg:mb-[24px] cursor-pointer transition-data hover:translate-x-[6px] ${
                activeCategory === "Recharge"
                  ? "text-[#61a800]"
                  : "text-[#16171a]"
              }`}
              onClick={() => {
                setActiveCategory("Recharge");
              }}
            >
              <div className="flex justify-center items-center bg-[#efefef] w-[40px] h-[40px] rounded-full">
                <IoFlashOutline className="text-[18px]" />
              </div>
              <p className="mt-[10px]">Recharge</p>
            </div>
            <div
              className={`flex lg:flex-row flex-col text-[#16171a] gap-[10px] text-[14px] lg:mb-[24px] cursor-pointer transition-data hover:translate-x-[6px] ${
                activeCategory === "Fashion"
                  ? "text-[#61a800]"
                  : "text-[#16171a]"
              }`}
              onClick={() => {
                setActiveCategory("Fashion");
              }}
            >
              <div className="flex justify-center items-center bg-[#efefef] w-[40px] h-[40px] rounded-full">
                <IoShirtOutline className="text-[18px]" />
              </div>
              <p className="mt-[10px]">Fashion</p>
            </div>
            <div
              className={`flex lg:flex-row flex-col text-[#16171a] gap-[10px] text-[14px] lg:mb-[24px] cursor-pointer transition-data hover:translate-x-[6px] ${
                activeCategory === "Food" ? "text-[#61a800]" : "text-[#16171a]"
              }`}
              onClick={() => {
                setActiveCategory("Food");
              }}
            >
              <div className="flex justify-center items-center bg-[#efefef] w-[40px] h-[40px] rounded-full">
                <PiBowlFood className="text-[18px]" />
              </div>
              <p className="mt-[10px]">Food</p>
            </div>
            <div
              className={`flex lg:flex-row flex-col text-[#16171a] gap-[10px] text-[14px] lg:mb-[24px] cursor-pointer transition-data hover:translate-x-[6px] ${
                activeCategory === "Electronics"
                  ? "text-[#61a800]"
                  : "text-[#16171a]"
              } `}
              onClick={() => {
                setActiveCategory("Electronics");
              }}
            >
              <div className="flex justify-center items-center bg-[#efefef] w-[40px] h-[40px] rounded-full">
                <CgSmartHomeRefrigerator className="text-[18px]" />
              </div>
              <p className="mt-[10px]">Electronics</p>
            </div>
          </div>
          <div>
            <Image src={add} alt="add" />
            <div className="grid lg:grid-cols-3 mt-[26px] gap-[16px]">
              {displayedCardData.map((item, key) => (
                <div
                  key={key}
                  className="bg-white cursor-pointer hover:translate-y-[-6px] transition-data hover:shadow-[0_2px_14px_3px_rgba(0,0,0,.03)] shadow-[0_1px_4px_0_rgba(17,19,35,.08)] rounded-md lg:p-[12px] group"
                >
                  <div className="flex justify-between items-start">
                    {item.Title}
                    <p className="text-[#373737] text-[14px] group-hover:underline lg:hidden border-l-[#e9e9e9] border-l-[1px] border-dashed pl-[12px] lg:h-auto h-[98px] flex items-center w-[80%] overflow-hidden">
                      {item.Description}
                    </p>
                    <Image
                      src={`/uploads/${item.MerchantId.RetailerLogo}`}
                      alt="drav"
                      width={65}
                      height={100}
                    />
                  </div>
                  <p className="text-[#373737] h-[67px] overflow-hidden text-[14px] mt-[12px] mb-2 group-hover:underline hidden lg:block">
                    {item.Description}
                  </p>
                  <div className="flex text-[#2491ef] text-[14px] mt-[12px] lg:pb-[4px] lg:bg-transparent bg-[#f3f9ff] lg:p-0 p-[8px_12px]">
                    See all {item.MerchantId.RetailerUrl} offers
                    <div className="bg-[#d9edff] w-[20px] h-[20px] rounded-full flex justify-center items-center ml-[6px]">
                      {">"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-[46px]">
              <button
                className="border-[1px] border-black rounded-[3px] w-[180px] h-[38px] text-[14px]"
                onClick={clickHandler}
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponOffer;

// export async function getServerSideProps(context) {
//   try {
//     const { categories } = context.query;
//     console.log("categories------------------->", categories);
//     console.log("context---------->", context);
//     const response = await axios.get(
//       `http://localhost:3000/api/getcategories?categories=${categories}`
//     );
//     const king = response.data.data;
//     return {
//       props: {
//         king,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);

//     return {
//       props: {
//         king: [],
//       },
//     };
//   }
// }

// http://localhost:3000/api/getcategories?categories=Travel
