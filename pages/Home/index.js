import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Dell from "../../public/Assets/Images/dell-logo.jpg";
import kaya from "../../public/Assets/Images/kaya2.jpg";
import kavya from "../../public/Assets/Images/kavya.jpg";
import airplane from "../../public/Assets/Images/airplane.png";
import mcd from "../../public/Assets/Images/mcd.jpg";
import DellImg from "../../public/Assets/Images/dell-desktop.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularCard from "./card";
import { useRef } from "react";

const cardData = [
  {
    id: 1,
    des: "Glow Up With Kaya - Up To 72% OFF + Additional 10% OFF On Sitewide Products",
    img: kaya,
    img2: kavya,
    color: "orange",
  },
  {
    id: 2,
    des: "Onam Festive Sale - Up To 40% OFF On Laptops",
    img: Dell,
    img2: DellImg,
    color: "green",
  },
  {
    id: 3,
    des: "GrabOn Top Saver: Upto Rs 1200 OFF On Domestic Flights",
    img: mcd,
    img2: airplane,
    color: "blue",
  },
];

const Home = ({ data, offerdata, categories }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    adaptiveHeight: false,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const ref = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [order, setOrder] = useState([1, 2, 3]);
  const [addClass, setAddClass] = useState(false);

  const handleClick = async (boxIndex) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setOrder((prevOrder) => {
      const currentIndex = prevOrder.indexOf(boxIndex);
      const nextIndex = (currentIndex + 1) % prevOrder.length;
      const newOrder = [...prevOrder];
      [newOrder[currentIndex], newOrder[nextIndex]] = [
        newOrder[nextIndex],
        newOrder[currentIndex],
      ];
      return newOrder;
    });

    await wait(200);
    setIsAnimating(false);

    setAddClass(true);
    setTimeout(() => {
      setAddClass(false);
    }, 300000);
  };
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const openInNewTab = (url) => {
    window.open(url);
  };

  return (
    <div>
      <div
        className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[16px] mt-[12px]"
        ref={ref}
      >
        <div className="md:flex  gap-[20px] justify-between">
          <div className="lg:w-[75%] md:w-[70%] slider-main">
            <Slider {...settings}>
              {data?.map((item, key) => (
                <div
                  key={key}
                  className="lg:h-auto h-[200px] cursor-pointer"
                  onClick={() =>
                    openInNewTab(`/${item.RetailerName}?merchantId=${item._id}`)
                  }
                >
                  <Image
                    src={`/uploads/${item.RetailerImage}`}
                    alt="promo"
                    className="rounded-lg w-full max-h-[310px]  object-cover"
                    height={1000}
                    width={1000}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="lg:w-[25%] w-[30%] relative md:block hidden">
            <div
              className={`g-stack visible-lg ${
                addClass === true ? "active" : ""
              }`}
            >
              {order.map((boxNumber, index) => {
                const slideItem = cardData[index];

                return (
                  <div
                    className={`g-stack-e ${slideItem.color}`}
                    id={`child-${boxNumber}`}
                    key={boxNumber}
                  >
                    <div className="gse-img">
                      <Image
                        className="lazy entered loaded"
                        src={slideItem.img}
                        data-original={slideItem.img}
                        alt="Dell"
                        data-ll-status="loaded"
                      />
                    </div>
                    <div className="gse-img-m">
                      <Image
                        className="lazy entered loaded"
                        src={slideItem.img2}
                        data-original={slideItem.img2}
                        alt={slideItem.des}
                        data-ll-status="loaded"
                      />
                    </div>
                    <p>{slideItem.des}</p>
                    <a
                      href="javascript:void(0);"
                      className="gse-btn go-topPicks go-cpn-show"
                      data-pos="2"
                      data-ctype="tp_h"
                      data-retype="m"
                      data-goid="163492"
                      data-fname="dell-coupons/"
                      data-type="dl"
                    >
                      GRAB NOW
                    </a>
                    <button
                      className={`hstack-btn ${isAnimating ? "disabled" : ""}`}
                      onClick={() => handleClick(boxNumber)}
                    ></button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="relative md:my-[20px] my-[12px]">
          <div className="md:max-w-[500px] max-w-full m-auto text-center bg-white">
            <button className="border-[1px] border-[#979797] text-[#575757] rounded-[30px] md:max-w-[400px] w-full md:h-[45px] font-semibold md:text-[16px] text-[14px] p-[3px]">
              India{"'"}s Leading Coupons & Deals Marketplace
            </button>
          </div>
          <div className="bg-[#d0d0d0] h-[1px] w-full absolute top-[50%] translate-y-[-50%] z-[-1] md:block hidden" />
        </div>
      </div>
      <PopularCard offerdata={offerdata} data={data} categories={categories} />
    </div>
  );
};

export default Home;
