import React from "react";
import Image from "next/image";
import beauty from "../../public/Assets/Images/beauty-logo.jpg";
import food from "../../public/Assets/Images/food-logo.jpg";
import electric from "../../public/Assets/Images/electronics-logo.jpg";
import flight from "../../public/Assets/Images/flight-logo.jpg";
import medicines from "../../public/Assets/Images/medicines-logo.jpg";
import fashion from "../../public/Assets/Images/fashion-logo.jpg";
import bus from "../../public/Assets/Images/bus-logo.jpg";

const store = [
  {
    img: beauty,
    text: "Beauty",
  },
  {
    img: food,
    text: "Food",
  },
  {
    img: electric,
    text: "Electronics",
  },
  {
    img: flight,
    text: "Flight",
  },
  {
    img: medicines,
    text: "Medicines",
  },
];
const recomended = [
  {
    img: fashion,
    text: "Fashion",
  },
  {
    img: bus,
    text: "Bus",
  },
];
const Offer = [
  { text: "Flight", coupon: " 483 Coupons", offer: "628 Offers" },
  { text: "Fashion", coupon: " 868 Coupons", offer: "3404 Offers" },
  { text: "Beauty", coupon: " 1048 Coupons", offer: "3164 Offers" },
  { text: "Recharge", coupon: " 64 Coupons", offer: "410 Offers" },
  { text: "Travel", coupon: " 567 Coupons", offer: "1334 Offers" },
  { text: "Food", coupon: " 592 Coupons", offer: "1404 Offers" },
  { text: "Footwear", coupon: " 123 Coupons", offer: "861 Offers" },
  { text: "Groceries", coupon: " 161 Coupons", offer: "760 Offers" },
  { text: "Laptops", coupon: " 57 Coupons", offer: "213 Offers" },
];

const Categories = () => {
  return (
    <div className="lg:w-[calc(100%-232px)] w-full">
      <div className="flex justify-between mb-[14px] lg:mt-0 mt-[14px]">
        <p className="text-[#383d4e] text-[14px] font-bold mb-[14px]">
          Categories Followed by you
        </p>
        <p className="text-[#bababa] text-[12px]">Showing 5 Stores</p>
      </div>
      <div className="flex flex-wrap gap-[12px] gap-y-[18px]">
        {store.map((data, key) => (
          <div
            key={key}
            className="border-[#e7e7e7] border-[1px] bg-white rounded-md hover:shadow-[0_5px_15px_rgba(0,0,0,.3)] lg:w-[20%] w-[44%] transition-main"
          >
            <div className="h-[68px] w-full flex items-center">
              <Image
                src={data.img}
                alt="myntra-logo"
                className="max-w-[80%] max-h-[80%] w-[69px] mx-auto"
              />
            </div>
            <button className="border-t-[#e7e7e7] border-t-[1px] w-full py-[12px] text-[12px]">
              {data.text}
            </button>
          </div>
        ))}
      </div>
      <div className="bg-[#e1e9f0] rounded-lg lg:p-[24px] p-[12px] mt-[40px]">
        <p className="text-[#16171a] text-[14px] font-bold mb-[14px] my-[14px] leading-[14px]">
          Recomended Add
        </p>
        <div className="flex flex-wrap gap-[12px] gap-y-[18px] pb-[40px]">
          {recomended.map((data, key) => (
            <div
              key={key}
              className="border-[#e7e7e7] border-[1px] bg-white rounded-md hover:shadow-[0_5px_15px_rgba(0,0,0,.3)] lg:w-[20%] w-[44%] transition-main relative"
            >
              <button className="text-black opacity-50 text-[12px] right-1 top-1 absolute">
                + Add
              </button>
              <div className="h-[68px] w-full flex items-center">
                <Image
                  src={data.img}
                  alt="myntra-logo"
                  className="max-w-[80%] max-h-[80%] w-[69px] mx-auto"
                />
              </div>
              <button className="border-t-[#e7e7e7] border-t-[1px] w-full py-[12px] text-[12px]">
                {data.text}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="py-[12px]">
      <div className="lg:flex justify-between items-center">
          <p className="text-[#16171a] text-[14px] font-bold mb-[14px] my-[14px] leading-[14px]">
            Subscribe More Categories
          </p>
          <div className="flex gap-[16px]">
            <button className="bg-[#60a600] text-white min-w-[120px] h-[42px] rounded-[26px] text-[14px]">
              Save
            </button>
            <button className="min-w-[120px] h-[42px] border-[#8db654] border-[1px] rounded-[26px] text-[#8db654] text-[14px]">
              Clear All
            </button>
          </div>
        </div>
        <p className="text-[#bababa] py-[24px] text-[14px]">
          Oops! You missed out on some of your saved coupons. But hold on, they
          might just work. Give it a try. Coupon/Offers in this section will be
          removed automatically in 30 days after expiry
        </p>
        <input
          type="text"
          placeholder="Search your desired store"
          className="max-w-[400px] h-[44px] w-full border-[#ccc] border-[1px] rounded p-[7px_8px] text-[14px] my-[12px]"
        />
        <div className="mb-[40px] mt-[20px] flex gap-[16px] flex-wrap">
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">All</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">A</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">B</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">C</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">D</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">E</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">F</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">G</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">H</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">I</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">J</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">K</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">L</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">M</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">N</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">O</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">P</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">Q</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">R</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">S</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">T</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">U</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">V</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">W</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">X</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">Y</p>
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">Z</p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-[18px] mb-[40px]">
          {Offer.map((data, key) => (
            <div key={key}>
              <label class="container">
                {data.text}
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <p className="text-[#515151] lg:text-[14px] text-[12px] lg:pl-[25px] pl-[22px] flex mt-1 mb-[14px]">
                {data.coupon}
                <span className="block lg:px-[8px] px-[4px]">|</span>
                {data.offer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
