import React from "react";
import Image from "next/image";
import { useSelectedCardContext } from "@/context/createContext";

const DealsDay = ({ categories }) => {
  const { setIsOpen, setSelectedCardData } = useSelectedCardContext();

  return (
    <div className="py-[20px] bg-[#e6edf2]">
      <div className="lg:max-w-[1140px] md:max-w-[720px] max-w-[540px] mx-auto px-[14px]">
        <h1 className="font-semibold relative mb-[22px] after:absolute after:content-[''] after:bg-[#8db654] after:w-[80px] after:h-[3px] after:bottom-[-4px] after:left-0 sm:text-[22px] text-[18px] text-[#030306]">
          Deals of the Day
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-[8px] gap-y-[12px] lg:gap-[18px] mb-[12px] lg:gap-y-[28px]">
          {categories?.map((item, key) => (
            <div
              key={key}
              className="group shadow-[0_1px_4px_0_rgba(17,19,35,.08)] cursor-pointer hover:shadow-[0_1px_4px_0_rgba(112,168,34,.78)] border-[1px] border-[#e7e7e7] p-[12px] rounded-md hover:border-[#70a822] transition-all relative bg-white"
            >
              <div className="bg-[#8db654] absolute top-[14px] left-0 text-white text-[12px] p-[4px_8px]">
                {item.offer}
              </div>
              <div className="w-full h-[100px]">
                <Image
                  src={`/uploads/${item.image}`}
                  alt="eardopes"
                  width={100}
                  height={100}
                  className="max-h-[80%] max-w-[80%] my-[20px] w-auto mx-auto"
                />
              </div>
              <h1 className="text-[#a8b9c2] mb-[6px] text-[14px]">
                {item.brand?.brandTitle}
              </h1>
              <p className="text-[#16171a] text-[12px] sm:text-[14px] h-[52px] overflow-hidden">
                {item.description}
              </p>
              <div className="flex justify-between items-end mb-[6px]">
                <div>
                  <p className="text-black font-bold mt-[12px] text-[22px]">
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
        </div>
      </div>
    </div>
  );
};

export default DealsDay;
