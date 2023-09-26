import React from "react";
import Image from "next/image";
import gnc from "../../public/Assets/Images/gnc.jpg";
import collection from "../../public/Assets/Images/collection.jpg";
import dell2 from "../../public/Assets/Images/dell2.jpg";
import dellLogo from "../../public/Assets/Images/dell-logo.jpg";
import puma from "../../public/Assets/Images/puma.jpg";
import pumaicon from '../../public/Assets/Images/puma-icon.jpeg';
import dominos from '../../public/Assets/Images/dominos.jpg';
import merchant from '../../public/Assets/Images/merchant.jpg';
import mcd from '../../public/Assets/Images/mcd.jpg';
import food from '../../public/Assets/Images/food.webp';

const offerData = [
  {
    offer: "GNC OFFERS",
    img1: gnc,
    text1:
      "Buy 1 Get 1 FREE Products On GNC Total Lean Triple Strength L-Carnitine Liquid",
    img2: gnc,
    text2: "Six In One Stack - GNC Pro Performance Power Protein At Rs 3400",
    img3: (
      <>
        <Image src={gnc} alt="gnc" className="w-[50px]" />
      </>
    ),
    text3: "Flat Rs 200 OFF On All Orders",
    text4: "GNC Offers",
    collect: collection,
  },
  {
    offer: "DELL OFFERS",
    img1: dellLogo,
    text1: "Inspiron 7620 - Flat Rs 18000 OFF + Extra Rs 5000 OFF ",
    img2: dellLogo,
    text2:
      "Back To College Offer - Flat Rs 11,500 OFF + Extra Rs 5000 OFF On Inspiron 16",
    img3: "",
    text4: "DELL OFFERS",
    collect: dell2,
  },
  {
    offer: "Puma OFFERS",
    img1: pumaicon,
    text1:
      "Puma Outlet - Up To 60% OFF + Extra 5% OFF",
    img2: pumaicon,
    text2: "Footwear - Up To 60% OFF",
    img3: "",
    text4: "Puma Offers",
    collect: puma,
  },
  {
    offer: "FOOD OFFERS",
    img1: dominos,
    text1:
      "Flat 40% OFF On All Pizza Orders",
    img2: merchant,
    text2: "Special Offer: Get 40% OFF Up To Rs 100 On All Orders",
    img3: (
        <>
          <Image src={mcd} alt="gnc" className="w-[50px]" />
        </>
      ),
    text3: "Grab Complementary McAloo Tikki Burger or Masala McEgg Burger on orders above Rs 149",
    text4: "GNC Offers",
    collect: food,
  },
];

const Collection = () => {
  return (
    <div className="border-b-[#e7e7e7] border-b-[1px]">
      <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[14px] py-[20px]">
        <h1 className="font-semibold relative after:absolute after:content-[''] after:bg-[#8db654] after:w-[80px] after:h-[3px] after:bottom-[-4px] after:left-0 mb-[24px] sm:text-[22px] text-[18px] text-[#030306]">
          GrabOn Collections
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-[18px] mb-[24px]">
          {offerData.map((data, key) => (
            <div key={key} className="relative group overflow-hidden">
              <div className="bg-[#f5f5f5] rounded-md">
                <p className="border-b-[#ccc] border-b-[1px] p-[6px_8px] font-bold text-[14px]">
                  {data.offer}
                </p>
                <div className="lg:h-[258px] h-[130px] overflow-y-auto custom-scroll">
                  <div className="flex items-center gap-[12px] m-[12px_0] p-[0_8px] group cursor-pointer">
                    <Image src={data.img1} alt="gnc" className="w-[50px]" />
                    <p className="text-[#16171A] text-[14px] leading-[17px] my-[14px] group-hover:underline">
                      {data.text1}
                    </p>
                  </div>
                  <div className="flex items-center gap-[12px] m-[12px_0] p-[0_8px] group cursor-pointer">
                    <Image src={data.img2} alt="gnc" className="w-[50px]" />
                    <p className="text-[#16171A] text-[14px] leading-[17px] my-[14px] group-hover:underline">
                      {data.text2}
                    </p>
                  </div>
                  <div className="flex items-center gap-[12px] m-[12px_0] p-[0_8px] group cursor-pointer">
                    {data.img3}

                    <p className="text-[#16171A] text-[14px] leading-[17px] my-[14px] group-hover:underline">
                      {data.text3}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 w-full h-full object-cover group-hover:translate-x-[-100%] transition-data">
                <h1 className="lg:text-[18px] text-center w-full sm:w-auto text-[16px] font-bold absolute top-[18px] translate-x-[-50%] left-[50%]">
                  {data.text4}
                </h1>
                <Image
                  src={data.collect}
                  alt="collection"
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
