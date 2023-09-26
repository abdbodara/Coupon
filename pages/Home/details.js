import React from "react";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
// import earbuds from "../../public/Assets/Images/earbuds.jpeg";
// import usli from "../../public/Assets/Images/usli.jpeg";
// import boat from "../../public/Assets/Images/boat-airdopes.jpeg";
// import wow from "../../public/Assets/Images/nykaa-wow.jpeg";
import Link from "next/link";

// const DealsData = [
//   {
//     off: "84 % OFF",
//     img: earbuds,
//     head: "Amazon",
//     buds: "Fireboltt Fire Pods TWS Earbuds",
//     num: "Rs. 899",
//     num2: "Rs 5499",
//     buy: "BUY NOW",
//     link: "https://www.amazon.in/Fireboltt-Enhanced-Bluetooth-Playtime-Assistant/dp/B0C6F46GDY?qid=1690871004&refinements=p_36:1318503031,p_72:1318476031&rnid=1318475031&s=electronics&sr=1-14&linkCode=sl1&tag=pdeals0b-21&linkId=90dc57dc0c2420578db96612d917e483&language=en_IN&ref_=as_li_ss_tl",
//   },
//   {
//     off: "40 % OFF",
//     img: usli,
//     head: "Mars by GHC",
//     buds: "Surge Max - Ashwagandha, Shilajit & Safed Musli",
//     num: "Rs. 599",
//     num2: "Rs 999",
//     buy: "BUY NOW",
//     link: "#",
//   },
//   {
//     off: "71 % OFF",
//     img: boat,
//     head: "Flipkart",
//     buds: "boAt Airdopes",
//     num: "Rs. 999",
//     num2: "Rs 3490",
//     buy: "BUY NOW",
//     link: "https://www.flipkart.com/boat-airdopes-alpha-35-hrs-playback-13mm-drivers-dual-mics-enx-beast-mode-bluetooth-headset/p/itm1181f915b81ec?pid=ACCGP2HJA3HKHTF4&lid=LSTACCGP2HJA3HKHTF4VDDILL?affid=amitabhshu&affExtParam2=LD",
//   },
//   {
//     off: "84 % OFF",
//     img: wow,
//     head: "Amazon",
//     buds: "Fireboltt Fire Pods TWS Earbuds",
//     num: "Rs. 499",
//     num2: "Rs 998",
//     buy: "BUY NOW",
//     link: "https://www.nykaa.com/wow-skin-science-vitamin-c-face-cream-face-wash/p/10887078?productId=10887078&pps=7&utm_source=admitad&utm_campaign=321347_&tagtag_uid=ad98abf98ef0a9df5d88435cdcb47f28",
//   },
// ];

const TrendingDeals = ({ categories }) => {
  const data = categories ? categories.slice(0, 4) : categories;
  const openInNewTab = (url) => {
    window.open(url);
  };

  return (
    <div className="py-[20px] border-y-[#e7e7e7] border-y-[1px] mt-[24px]">
      <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[14px]">
        <div className="mb-[24px] flex justify-between items-center">
          <h1 className="font-semibold relative after:absolute after:content-[''] after:bg-[#8db654] after:w-[80px] after:h-[3px] after:bottom-[-4px] after:left-0 sm:text-[22px] text-[18px] text-[#030306]">
            Deals Of The Day
          </h1>
          <Link
            href="/deals"
            className="border-[1px] border-black sm:p-[7px_12px] p-[7px_8px] flex items-center gap-[6px] sm:text-[14px] text-[12px]"
          >
            View More Deals
            <span className="bg-[#42a1f4] w-[20px] h-[20px] shadow-[0_1px_3px_0_rgba(0,0,0,.37)] flex justify-center items-center text-white rounded-full">
              <BiChevronDown className="text-[16px] rotate-[-95deg]" />
            </span>
          </Link>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-[18px] mb-[12px]">
          {data?.map((item, key) => (
            <div
              key={key}
              className="group shadow-[0_1px_4px_0_rgba(17,19,35,.08)] cursor-pointer hover:shadow-[0_1px_4px_0_rgba(112,168,34,.78)] border-[1px] border-[#e7e7e7] p-[12px] rounded-md hover:border-[#70a822] transition-all relative"
            >
              <div className="bg-[#8db654] absolute top-[14px] left-0 text-white text-[12px] p-[4px_8px]">
                {item.offer}
              </div>
              <Image
                src={`/uploads/${item.image}`}
                alt=""
                width={115}
                height={120}
                className="max-w-[115px] h-[120px] mx-auto my-[20px]"
              />
              <h1 className="text-[#a8b9c2] mb-[6px] text-[14px]">
                {item.brand?.brandTitle}
              </h1>
              <p className="text-[#16171a] text-[12px] sm:text-[14px] h-[52px] overflow-hidden">
                {item.description}
              </p>
              <div className="flex justify-between items-end mb-[6px]">
                <div>
                  <p className="text-black font-bold mt-[12px] text-[14px] sm:text-[22px]">
                    {item.price}
                  </p>
                  <span className="line-through text-[#7b7b7b] text-[14px]">
                    {item.oldPrice}
                  </span>
                </div>
                <button
                  onClick={() => openInNewTab(item.productLink)}
                  className="text-[#2491ef] font-bold text-[14px] mr-[14pxs] hidden group-hover:block transition-all"
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

export default TrendingDeals;
