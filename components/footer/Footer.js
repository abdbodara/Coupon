import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import google1 from "../../public/Assets/Images/google1.png";
import badge from "../../public/Assets/Images/badge_ios.png";
import linkedin from "../../public/Assets/Images/linkedin.svg";
import youtube from "../../public/Assets/Images/youtube.svg";
import instagram from "../../public/Assets/Images/instagram.svg";
import twitter from "../../public/Assets/Images/twitter.svg";
import facebook from "../../public/Assets/Images/facebook.svg";
import pintrest from "../../public/Assets/Images/pintrest.svg";
import telegram from "../../public/Assets/Images/telegram.svg";
import grabon from "../../public/Assets/Images/grabon.svg";
import { LuMail } from "react-icons/lu";
import { BiHomeAlt } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { PiHeadphonesBold } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <div className="bg-[#071938]">
        <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[14px] py-[20px]">
          <div className="block lg:hidden">
            <div className="flex gap-[12px] justify-center">
              <Image src={google1} alt="google1" className="w-[123px]" />
              <Image src={badge} alt="badge" className="w-[123px]" />
            </div>
            <div className="bg-[#ffffff45] h-[2px] w-[30%] mt-[36px] mx-auto" />
            <div className="flex gap-2 mt-[24px] justify-center mb-[36px] flex-wrap cursor-pointer">
              <Image src={linkedin} alt="linkedin" className="w-[36px]" />
              <Image src={youtube} alt="youtube" className="w-[36px]" />
              <Image src={instagram} alt="instagram" className="w-[36px]" />
              <Image src={twitter} alt="twitter" className="w-[36px]" />
              <Image src={facebook} alt="facebook" className="w-[36px]" />
              <Image src={pintrest} alt="pintrest" className="w-[36px]" />
              <Image src={telegram} alt="telegram" className="w-[36px]" />
              <Image src={grabon} alt="grabon" className="w-[36px]" />
            </div>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="lg:block hidden">
              <Image src={logo} alt="logo" className="w-[140px] ml-[-18px]" />
              <p className="text-[14px] text-white my-[14px]">
                Striving towards making the world <br /> a better place to shop
                with great savings! ;)
              </p>
              <div className="flex gap-[12px]">
                <Image src={google1} alt="google1" className="w-[123px]" />
                <Image src={badge} alt="badge" className="w-[123px]" />
              </div>
              <div className="bg-[#ffffff45] h-[2px] w-[84px] mt-[36px]" />
              <div className="flex gap-2 mt-[24px] cursor-pointer">
                <Image src={linkedin} alt="linkedin" className="w-[36px]" />
                <Image src={youtube} alt="youtube" className="w-[36px]" />
                <Image src={instagram} alt="instagram" className="w-[36px]" />
                <Image src={twitter} alt="twitter" className="w-[36px]" />
                <Image src={facebook} alt="facebook" className="w-[36px]" />
              </div>
              <div className="flex gap-2 mt-[14px] cursor-pointer">
                <Image src={pintrest} alt="pintrest" className="w-[36px]" />
                <Image src={telegram} alt="telegram" className="w-[36px]" />
                <Image src={grabon} alt="grabon" className="w-[36px]" />
              </div>
            </div>
            <div className="lg:w-auto w-[50%]">
              <h1 className="text-[#8db654] text-[14px] mb-[18px] font-bold">
                COMPANY
              </h1>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                Branding
              </a>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                Partner With Us
              </a>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                Sitemap
              </a>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                Feedback
              </a>
            </div>
            <div className="lg:w-auto w-[50%]">
              <h1 className="text-[#8db654] text-[14px] mb-[18px] font-bold">
                SPECIALITY PAGES
              </h1>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                AI Tools
              </a>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                Surge 2022
              </a>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                Mobile Apps
              </a>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                Product Deals
              </a>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                Charities
              </a>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                Gift Cards
              </a>
            </div>
            <div className="lg:w-auto w-[50%] lg:mt-0 mt-4">
              <h1 className="text-[#8db654] text-[14px] mb-[18px] font-bold">
                MORE…
              </h1>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                City Offers
              </a>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                Brand Offers
              </a>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                Bank Offers
              </a>
              <a
                href="#"
                className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
              >
                Festival Offers
              </a>
            </div>
            <div className="lg:w-auto w-[50%] lg:mt-0 mt-4">
              <h1 className="text-[#8db654] text-[14px] mb-[18px] font-bold">
                CONTACT US
              </h1>
              <div className="flex gap-[5px]">
                <LuMail className="text-[#8db654]" />
                <a
                  href="#"
                  className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
                >
                  contact@grabon.in
                </a>
              </div>
              <div className="flex gap-[5px]">
                <IoCallOutline className="text-[#8db654]" />
                <a
                  href="#"
                  className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
                >
                  +91-7997443334
                </a>
              </div>
              <div className="flex gap-[5px]">
                <BiHomeAlt className="text-[#8db654]" />
                <a
                  href="#"
                  className="text-[14px] hover:underline text-white block mb-[12px] leading-4"
                >
                  GrabOn <br /> Inspirelabs Solutions Pvt Ltd,
                  <br /> OneWest Building,
                  <br />
                  Gachibowli,
                  <br /> Hyderabad, TS, 500032
                </a>
              </div>
              <button className="bg-[#8db654] text-white flex items-center text-[14px] gap-[5px] p-[.5rem] rounded">
                <PiHeadphonesBold className="text-[16px]" />
                Contact Us
              </button>
            </div>
          </div>
          <div className="text-center border-t-[#fff3] border-t-[1px] pt-[24px] mt-[60px]">
            <h1 className="text-[#8db654] font-bold lg:text-[49px] text-[28px]">
              #SaveOnGrabOn
            </h1>
            <p className="lg:text-[16px] text-[14px] tracking-[.4px] mb-[36px] text-white">
              We help you save on everything
            </p>
            <p className="text-[11px] opacity-80 text-white">
              © Copyright 2023. GrabOn is Registered Trademark of Inspirelabs
              Solutions Pvt. Ltd. All Rights Reserved. Proudly Designed By
              GrabOn Design Team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
