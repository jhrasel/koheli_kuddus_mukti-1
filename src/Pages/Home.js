import axios from "axios";
import React from "react";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import ContactMe from "../Components/ContactMe";
import Introduction from "../Components/Introduction";
import PhotosVideos from "../Components/PhotosVideos";
import PoliticalTour from "../Components/PoliticalTour";
import Programs from "../Components/Programs";
import SocialWorks from "../Components/SocialWorks";
import Strength from "../Components/Strength";

export default function Home() {
  const [allData, setAlldata] = React.useState({});

  async function fetchAboutData() {
    try {
      const response = await axios.get(
        "http://koheli.sscquizcontest.com/api/home/page-data"
      );
      setAlldata(response.data.data);
      console.log(allData);
    } catch (error) {
      //
    }
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
    </>
  );
}
