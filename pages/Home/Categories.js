import Link from "next/link";
import React from "react";

// const Popolar = [
//   { categorie: "Flight" },
//   { categorie: "Fashion" },
//   { categorie: "Electronics" },
//   { categorie: "Groceries" },
//   { categorie: "Travel" },
//   { categorie: "Medicines" },
//   { categorie: "Bus" },
//   { categorie: "Education" },
//   { categorie: "Hotel" },
//   { categorie: "Kitchen Appliances" },
//   { categorie: "OTT" },
//   { categorie: "Hosting" },
//   { categorie: "Pizza" },
//   { categorie: "Services" },
//   { categorie: "Footwear" },
//   { categorie: "Food" },
//   { categorie: "Lingerie" },
//   { categorie: "Entertainment" },
//   { categorie: "Bike Rentals" },
//   { categorie: "Furniture" },
//   { categorie: "Recharge" },
//   { categorie: "Utility bill Payments" },
//   { categorie: "Gifts And Flowers" },
//   { categorie: "Jewellery" },
//   { categorie: "Protein Supplements" },
//   { categorie: "Lab Tests" },
//   { categorie: "Eyewear" },
//   { categorie: "Kids Lifestyle" },
//   { categorie: "Beauty" },
//   { categorie: "Meat & Dairy" },
// ];

const Categories = ({ data }) => {
  return (
    <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[14px] py-[20px] border-b-[#e7e7e7] border-b-[1px]">
      <h1 className="font-semibold relative after:absolute after:content-[''] after:bg-[#8db654] after:w-[80px] after:h-[3px] after:bottom-[-4px] after:left-0 mb-[24px] text-[22px] text-[#030306]">
        Popular Categories
      </h1>
      <div className="grid sm:grid-cols-5 grid-cols-2">
        {data?.map((item, key) => (
          <Link
            key={key}
            href={`/${item.RetailerName}?merchantId=${item._id}`}
            className="text-[14px] hover:underline mb-[12px]"
          >
            {item.RetailerName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
