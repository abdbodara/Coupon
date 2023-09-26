import Main from "./Home";
import axios from "axios";

export default function Home({ data, offerdata, categories }) {
  return (
    <>
      <Main data={data} offerdata={offerdata} categories={categories} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:3000/api/merchant");
    const data = response.data.data;
    const offer = await axios.get("http://localhost:3000/api/getOffer");
    const offerdata = offer.data.data;
    const value = await axios.get(
      "http://localhost:3000/api/getdeals?categories=deals of the day"
    );
    const categories = value.data.data;
    return {
      props: {
        data,
        offerdata,
        categories,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: [],
        offerdata: [],
        categories: [],
      },
    };
  }
}
