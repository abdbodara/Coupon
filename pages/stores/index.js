import React from "react";
import SeeOffers from "@/components/Common/seeOffers";
import axios from "axios";

const Store = ({ value, totalLength }) => {
  return (
    <>
      <SeeOffers
        title={"Merchants"}
        header={"All Merchants"}
        text={
          " Its the month end but the pizza craving just wont go away, so you desperately search for coupons or promo codes to apply on purchase. We understand and thus provide you with merchant offers, be it late night food ordering or getting a new smartphone. Great deals, coupons, and discounts on every merchant store from Dominos to Decathlon and everything in between. Whether you need legal assistance or simply book a cab, avail discounts on Vakilsearch and Red Cabs"
        }
        total={"Total Merchants"}
        totalOffers={"Total Coupons & Offers"}
        merchantsdigits={value.length}
        trending={"Trending Merchants"}
        browse={"Browse All Merchants"}
        texthide={
          "respectively. All you need to do is keep a lookout for this regularly updated page, with handpicked discounts on all merchant stores that you could possibly want."
        }
        Showmore={"Show More"}
        ShowLess={"Show Less"}
        value={value}
        length={totalLength}
      />
    </>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:3000/api/merchant");
    const value = response.data.data;
    const countLength = await axios.get(
      "http://localhost:3000/api/countlength"
    );
    const length = countLength.data.data;

    return {
      props: {
        value,
        totalLength: length,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        value: [],
        totalLength: [],
      },
    };
  }
}

export default Store;
