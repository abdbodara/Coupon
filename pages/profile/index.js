import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Subscribe from "../deals/Subscribe";
import Submission from "./submission";
import { useRouter } from "next/router";
import axios from "axios";

const UserProfile = ({ recomandedstore }) => {

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchdata = async () => {
      const value = await localStorage.getItem("user");
      if (value) {
        const parsedData = JSON.parse(value);
        setData(parsedData);
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [router]);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      <div>
        <div className="bg-[linear-gradient(178deg,#1c4a81_-8%,#0c244a_93%)] lg:py-0 py-[12px] lg:h-[154px] h-[136px] mb-[0px]">
          <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[12px]">
            <div className="text-white  items-center text-[14px] pt-[16px] mb-2 lg:flex hidden">
              <Link href="/" className="opacity-70 hover:opacity-100">
                Home
              </Link>
              <span className="px-[4px]">/</span>
              <Link href={"/profile"} className="opacity-70 hover:opacity-100">
                Profile
              </Link>
              <span className="px-[4px]">/</span>
              <p>Overview</p>
            </div>
            <div className="lg:mt-[12px] mt-[26px] flex items-center lg:justify-start justify-center gap-[20px]">
              <div className="lg:w-[232px] w-[160px] lg:h-[140px] h-[125px] lg:p-[20px_0] p-[12px_0] border-[1px] border-[#d6d8da] bg-white rounded">
                <div className="border-[#d6d8daa6] border-[8px] w-[100px] h-[100px] rounded-full mx-auto">
                  <Image
                    src={data.image}
                    alt="image"
                    width={100}
                    height={100}
                    className="rounded-full w-full"
                  />
                </div>
              </div>
              <h1 className="text-[30px] text-white font-bold leading-[37px] mb-[30px] lg:block hidden">
                Hi, <br />
                {data.fullName}
              </h1>
            </div>
          </div>
        </div>
        <h1 className="text-[16px] text-center text-[#16171a] font-bold leading-[37px] block lg:hidden mt-[34px] mb-1">
          Hi,{data.fullName}
        </h1>
      </div>
      <Submission recomandedstore={recomandedstore} />
      <Subscribe />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:3000/api/merchant");
    const recomandedstore = response.data.data;
    return {
      props: {
        recomandedstore,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        recomandedstore: [],
      },
    };
  }
}

export default UserProfile;
