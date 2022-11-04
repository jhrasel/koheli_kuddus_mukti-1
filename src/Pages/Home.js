import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [appSettings, setAppSettings] = useState({});

  async function callAPI() {
    try {
      const response = await axios.get(
        "http://koheli.sscquizcontest.com/api/application-settings"
      );

      setAppSettings(response.data.data);
    } catch (error) {
      //   setAppSettings({});
    }
  }

  useEffect(() => {
    callAPI();
  }, [appSettings]);

  return (
    <>
      <Banner />
      <div className="container">
        <Cards />
        <Introduction />
        <Strength />
      </div>
      <Programs />
      <div className="container">
        <PoliticalTour />
        <SocialWorks />
        <PhotosVideos />
        <ContactMe appSettings={appSettings} />
      </div>
    </>
  );
}
