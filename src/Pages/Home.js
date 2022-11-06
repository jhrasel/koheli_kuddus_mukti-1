import axios from "axios";
import React from "react";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import ContactMe from "../Components/ContactMe";
import Introduction from "../Components/Introduction";
import Loader from "../Components/Loader";
import PhotosVideos from "../Components/PhotosVideos";
import PoliticalTour from "../Components/PoliticalTour";
import Programs from "../Components/Programs";
import SocialWorks from "../Components/SocialWorks";
import Strength from "../Components/Strength";

export default function Home() {
  const [loader, setLoader] = React.useState(true);
  const [allData, setAlldata] = React.useState({});

  async function fetchAboutData() {
    // try {
    //   const response = await axios.get(
    //     "http://koheli.sscquizcontest.com/api/home/page-data"
    //   );
    //   setAlldata(response.data.data);
    //   setLoader(false);

    //   // setTimeout(() => {
    //   //   if (loader) {
    //   //     alert("Please check your internet and RELOAD!");
    //   //   }
    //   // }, 10 * 1000);
    // } catch (error) {
    //   console.log(error);
    // }
    axios
      .get("http://koheli.sscquizcontest.com/api/home/page-data")
      .then(({ data }) => {
        setAlldata(data.data);
        setLoader(false);
      });
  }

  React.useEffect(() => {
    fetchAboutData();
  }, [allData]);

  return (
    <>
      <Banner />
      <div className="container">
        <Cards />
        <Introduction allData={allData} />
        <Strength allData={allData} />
      </div>
      <Programs allData={allData} />
      <div className="container">
        <PoliticalTour allData={allData} />
        <SocialWorks allData={allData} />
        <PhotosVideos />
        <ContactMe />
      </div>

      {/* ===== LOADER =====*/}
      {loader && <Loader />}
    </>
  );
}
