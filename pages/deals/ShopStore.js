import React from "react";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import { useRouter } from "next/router";

const ShopStore = ({ data }) => {
  const displayedData = data ? data?.slice(0, 5) : data;
  const router = useRouter();
  const handleItemClick = async (itemId) => {
    await router.push({
      pathname: `/product/${itemId}`,
    });
  };

  return (
    <div className="lg:max-w-[1140px] md:max-w-[720px] max-w-[540px] mx-auto px-[14px] py-[24px]">
      <div className="mb-[24px] flex justify-between items-center">
        <h1 className="font-semibold relative after:absolute after:content-[''] after:bg-[#8db654] after:w-[80px] after:h-[3px] after:bottom-[-4px] after:left-0 sm:text-[22px] text-[18px] text-[#030306]">
          Shop by Store
        </h1>
        <button className="border-[1px] border-black sm:p-[7px_12px] p-[7px_8px] flex items-center gap-[6px] sm:text-[14px] text-[12px]">
          Show All Deals Stores
          <span className="bg-[#42a1f4] w-[20px] h-[20px] shadow-[0_1px_3px_0_rgba(0,0,0,.37)] flex justify-center items-center text-white rounded-full">
            <BiChevronDown className="text-[16px] rotate-[-95deg]" />
          </span>
        </button>
      </div>
      <div
        className="grid lg:grid-cols-7 grid-cols-3 gap-[26px] items-center mb-[24px]"
        id="dealsDay"
      >
        {displayedData?.map((item, key) => (
          <div
            key={key}
            className="border-[#e7e7e7] hover:border-[#70a822] border-[1px] rounded h-[55px] overflow-hidden relative flex justify-center items-center cursor-pointer"
            onClick={() => {
              handleItemClick(item._id);
            }}
          >
            <Image
              src={`/uploads/${item.brandLogo}`}
              width={200}
              height={200}
              alt="amazon-logo"
              className="max-w-[190%] max-h-[190%] lg:w-auto w-[107px] object-cover mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopStore;
