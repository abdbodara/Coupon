/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { RiCoupon2Line } from "react-icons/ri";
import { MdTravelExplore } from "react-icons/md";
import { IoFlashOutline, IoShirtOutline } from "react-icons/io5";
import { PiBowlFood } from "react-icons/pi";
import Image from "next/image";
import add from "../../public/Assets/Images/banner-add.jpg";
import axios from "axios";

const CouponOffer = () => {
  const [showMore, setShowMore] = useState(false);
  const [data, setData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  console.log(
    "🚀 ~ file: coupon.js:15 ~ CouponOffer ~ activeCategory:",
    activeCategory
  );
  const [valuableData, setValueableData] = useState([]);
  console.log(
    "🚀 ~ file: coupon.js:17 ~ CouponOffer ~ valuableData:",
    valuableData
  );

  useEffect(() => {
    const response = async () => {
      const value = await axios
        .get(
          `http://localhost:3000/api/getcategories?categoriesId=${activeCategory}`
        )
        .then((res) => {
          setValueableData(res.data.data);
        })
        .catch((error) => {
          console.log("issue---------->", error);
        });
    };
    response();
  }, [activeCategory]);

  useEffect(() => {
    const response = async () => {
      const value = await axios
        .get("http://localhost:3000/api/getCategoriesData")
        .then((res) => {
          setData(res.data.data);
          if (res.data.data.length > 0) {
            setActiveCategory(res.data.data[0]._id);
          }
        })
        .catch((err) => {
          console.log("error------->", err);
        });
    };
    response();
  }, []);

  const clickHandler = () => {
    setShowMore(!showMore);
  };

  const displayedCardData = showMore ? valuableData : valuableData.slice(0, 1);

  return (
    <div className="bg-[linear-gradient(to_bottom,#f1f5f8,#dfe8ef)] p-[20px_0] mt-[40px]">
      <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[14px]">
        <h1 className="font-semibold relative after:absolute after:content-[''] after:bg-[#8db654] after:w-[80px] after:h-[3px] after:bottom-[-4px] after:left-0 mb-[24px] sm:text-[22px] text-[18px] text-[#030306]">
          Today's Top Coupons & Offers
        </h1>
        <div className="lg:flex gap-[26px] items-start">
          <div className="lg:min-w-[246px] scroll-hide lg:block flex gap-[24px] p-[16px] bg-white rounded-[10px] lg:mb-0 mb-[12px] overflow-x-auto">
            {data.map((item, key) => {
              return (
                <div
                  className={`flex lg:flex-row flex-col cursor-pointer gap-[10px] text-[14px] lg:mb-[24px] transition-data hover:translate-x-[6px] ${
                    activeCategory === item._id
                      ? "text-[#61a800]"
                      : "text-[#16171a]"
                  }`}
                  key={key}
                  onClick={() => {
                    setActiveCategory(item._id);
                  }}
                >
                  <div
                    className={`flex justify-center items-center ${
                      activeCategory === item._id
                        ? "bg-[#e8f7d3]"
                        : "bg-[#efefef]"
                    } w-[40px] h-[40px] rounded-full`}
                  >
                    {key === 0 ? (
                      <RiCoupon2Line className="text-[18px]" />
                    ) : key === 1 ? (
                      <MdTravelExplore className="text-[18px]" />
                    ) : key === 2 ? (
                      <IoFlashOutline className="text-[18px]" />
                    ) : key == 3 ? (
                      <IoShirtOutline className="text-[18px]" />
                    ) : (
                      <PiBowlFood className="text-[18px]" />
                    )}
                  </div>
                  <p className="mt-[10px]">{item.categoriesName}</p>
                </div>
              );
            })}
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
