import React, { useState } from "react";
import Image from "next/image";
import myntra from "../../public/Assets/Images/myntra-logo.jpg";
import trip from "../../public/Assets/Images/makemytrip-logo.jpg";
import dominos from "../../public/Assets/Images/dominos-logo.jpg";
import pepperfry from "../../public/Assets/Images/pepperfry-logo.jpg";
import goibibo from "../../public/Assets/Images/goibibo-logo.jpg";
import amazone from "../../public/Assets/Images/amazon-logo.jpg";
import hostinger from "../../public/Assets/Images/hostinger-logo.jpg";

const store = [
  {
    img: myntra,
    text: "Myntra",
  },
  {
    img: trip,
    text: "MakeMyTrip",
  },
  {
    img: dominos,
    text: "Dominos",
  },
  {
    img: pepperfry,
    text: "Pepperfry",
  },
  {
    img: goibibo,
    text: "Goibibo",
  },
  {
    img: amazone,
    text: "Amazon",
  },
  {
    img: hostinger,
    text: "Hostinger",
  },
];

const Store = ({ recomandedstore }) => {
  const [selectedLetter, setSelectedLetter] = useState("");
  const filteredOffers = recomandedstore?.filter((data) =>
    selectedLetter ? data.RetailerName.startsWith(selectedLetter) : true
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const token = JSON.parse(localStorage.getItem("user"));
  //       console.log("token -->>", token);
  //       const response = await axios.get("http://localhost:3000/api/stores", {
  //         headers: {
  //           Authorization: `Bearer ${token.token}`,
  //         },
  //       });
  //       setData(response.data.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const valuable = () => {
    console.log("hello--------->");
  };

  return (
    <div className="lg:w-[calc(100%-232px)] w-full">
      <div className="flex justify-between mb-[14px] lg:mt-0 mt-[14px]">
        <p className="text-[#383d4e] text-[14px] font-bold">
          Here Are The Coupons/Offers Saved
        </p>
        <p className="text-[#bababa] text-[12px]">Showing 7 Stores</p>
      </div>
      <div className="flex flex-wrap gap-[12px] gap-y-[18px]">
        {store?.map((data, key) => (
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
          {recomandedstore?.map((data, key) => (
            <div
              key={key}
              className="border-[#e7e7e7] border-[1px] bg-white rounded-md hover:shadow-[0_5px_15px_rgba(0,0,0,.3)] lg:w-[20%] w-[44%] transition-main relative"
            >
              <button className="text-black opacity-50 text-[12px] right-1 top-1 absolute">
                + Add
              </button>
              <div className="h-[68px] w-full flex items-center">
                <Image
                  src={`/uploads/${data.RetailerLogo}`}
                  alt="myntra-logo"
                  className="max-w-[80%] max-h-[80%] w-[69px] mx-auto"
                  width={80}
                  height={80}
                />
              </div>
              <button
                className="border-t-[#e7e7e7] border-t-[1px] w-full py-[12px] text-[12px]"
                onClick={valuable}
              >
                {data.RetailerName}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="py-[12px]">
        <div className="lg:flex justify-between items-center">
          <p className="text-[#16171a] text-[14px] font-bold mb-[14px] my-[14px] leading-[14px]">
            Subscribe More Brands
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
          {/* <p className="text-[14px] hover:text-[#8db654] cursor-pointer">All</p>
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
          <p className="text-[14px] hover:text-[#8db654] cursor-pointer">Z</p> */}

          {Array.from({ length: 26 }, (_, index) => {
            const letter = String.fromCharCode(65 + index);
            return (
              <p
                key={index}
                className={`text-[14px] ${
                  selectedLetter === letter
                    ? "text-[#8db654]"
                    : "hover:text-[#8db654]"
                } cursor-pointer`}
                onClick={() => setSelectedLetter(letter)}
              >
                {letter}
              </p>
            );
          })}
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-[18px] mb-[40px]">
          {filteredOffers?.map((data, key) => (
            <div key={key}>
              <label className="container">
                {data.RetailerName}
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <p className="text-[#515151] lg:text-[14px] text-[12px] lg:pl-[25px] pl-[22px] flex mt-1 mb-[14px]">
                1<span className="block lg:px-[8px] px-[4px]">|</span>2
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
