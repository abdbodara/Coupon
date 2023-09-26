import axios from "axios";
import React, { useEffect } from "react";
import Image from "next/image";
import { BsCheck2 } from "react-icons/bs";

const Id = ({ offer }) => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = offer.MerchantId.RetailerUrl;
    }, 1500);
  }, [offer]);

  return (
    <div>
      <div className="top-0 left-0 h-[100px] shadow-[0_0.0625em_0.3125em_#00000026] w-full bg-[#fff] text-center">
        <a href="" className="py-[25px] px-0 text-center inline-block">
          <Image
            src={"/Assets/Images/go-gray.png"}
            alt=""
            width={100}
            height={48}
            className="max-h-[48px] max-w-[100%] h-[48px] w-[125px]"
          />
        </a>
      </div>
      <div className="container max-w-[1096px] m-auto max-xl:max-w-auto max-xl:px-[15px]">
        <div className="relative my-[24px] mx-auto bg-[#fff] mb-[24px] rounded-md py-[36px] px-0 pb-5 text-center  shadow-[0_2px_13px_0_#00000014]">
          <b className="block text-[20px] text-[#8db654] relative font-[500]">
            <span className="inline-block w-[32px] h-[32px] bg-[#8db654] rounded-[50%] align-middle mr-3 relative top-[-2px] text-center leading-[30px]">
              <BsCheck2 className="text-[#fff] w-[25px] h-[25px] inline-flex" />
            </span>
            Code Successfully Copied!
          </b>
          <p className="text-[16px] leading-[22px] my-[18px] mx-auto mb-6 text-[#575757] font-[300]">
            Paste this code on checkout & carry on shopping
          </p>
          <span className="block max-w-[300px] my-[24px] mx-auto h-[70px] leading-[66px] uppercase text-[24px] bg-[#f0f0f0] text-[#575757] border-[1.5px] border-dashed border-[#979797]">
            {offer.offer}
          </span>
          <div className="text-[#5eaef5] text-[16px] text-center pt-[15px] hidden">
            Copy & Continue
          </div>
          <div className="flex items-center justify-center bg-white">
            <div className="flex flex-col">
              <div className="flex space-x-24">
                <div
                  className="w-12 h-12 rounded-full animate-spin
                    border-x-4 border-solid border-blue-500 border-t-transparent"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <span className="block text-center capitalize text-[16px] leading-[24px]">
          <a href={`/`} className="text-[#7b8b8e] underline">
            go back
          </a>
        </span>
      </div>
    </div>
  );
};

export default Id;

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;
    console.log("🚀 ~ file: [id].js:70 ~ getServerSideProps ~ id:", id);
    if (!id) {
      throw new Error("ID not provided in the query.");
    }
    const response = await axios.get(
      `http://localhost:3000/api/publicoffer/${id}`
    );
    const offer = response.data.data;
    return {
      props: {
        offer,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return {
    props: {
      offer: [],
    },
  };
}
