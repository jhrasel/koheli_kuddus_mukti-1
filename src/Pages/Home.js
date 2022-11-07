import axios from "axios";
import React, { useRef } from "react";
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
import serverURL from "../URL/serverURL";

export default function Home() {
  const targetForm = useRef(null);
  const [loader, setLoader] = React.useState(true);
  const [allData, setAlldata] = React.useState({});

  function fetchAboutData() {
    axios.get(serverURL + "api/home/page-data").then(({ data }) => {
      setAlldata(data.data);
      setLoader(false);
    });
  }

  const scrollToForm = () => {
    targetForm.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    fetchAboutData();
  }, [allData]);

  return (
    <>
      <Banner scrollToForm={scrollToForm} />
      <div className="container">
        <Cards />
        <Introduction allData={allData} />
        <Strength allData={allData} />
      </div>
      <Programs allData={allData} />
      <div className="container">
        <PoliticalTour allData={allData} />
        <SocialWorks allData={allData} />
        <PhotosVideos allData={allData} />
        <ContactMe targetForm={targetForm} />
      </div>

      {/* ===== LOADER =====*/}
      {loader && <Loader />}
    </>
  );
}
