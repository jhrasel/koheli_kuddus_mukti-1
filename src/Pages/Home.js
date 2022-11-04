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
        <ContactMe />
      </div>
    </>
  );
}
