import React from "react";
import SeeOffers from "@/components/Common/seeOffers";
import axios from "axios";

const Categories = ({ data, totalLength }) => {
  return (
    <>
      <SeeOffers
        title={"Categories"}
        header={"All Categories"}
        text={
          "Have you been looking for automobile accessories lately but the price threw you off ? Well, worry not.You no longer have to be afraid of the high prices.Get the best and latest offers on all categories from art and craft supplies all the way to baby diapers and everything in between.Avail amazing discounts by choosing from this page full of handpicked and carefully curated offers.Look out for this space to for promo codes on a wide variety of products ranging across all"
        }
        total={"Total Categories"}
        totalOffers={"Total Coupons & Offers"}
        merchantsdigits={data.length}
        merchants={"67,568"}
        trending={"Popular Categories"}
        browse={"Browse All Categories"}
        texthide={"verticals from fashion apparel to footwear."}
        Showmore={"Show More"}
        ShowLess={"Show Less"}
        data={data}
        length={totalLength}
      />
    </>
  );
};

export default Categories;

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/getCategoriesData`
    );
    const data = response.data.data;
    const countLength = await axios.get(
      "http://localhost:3000/api/countlength"
    );
    const length = countLength.data.data;
    return {
      props: {
        data,
        totalLength: length,
      },
    };
  } catch (error) {
    console.log("error----------->", error);
  }
  return {
    props: {
      data: [],
      totalLength: [],
    },
  };
}
