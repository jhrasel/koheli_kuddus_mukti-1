import axios from "axios";
import React from "react";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import serverURL from "../URL/serverURL";
import ContactMe from "../Components/ContactMe";

export default function VideosPage() {
  const [videos, setVideos] = React.useState([]);

  async function fetchVideos() {
    try {
      const res = await axios.get(serverURL + "api/video");
      setVideos(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchVideos();
  }, [videos]);

  return (
    <section id="videosPage">
      <div className="container">
        {/* BUTTONS */}
        <div className="button-container">
          <Link to="/">
            <button className="btn_arrow">
              <BiArrowBack />
              হোমপেজে ফিরে যান
            </button>
          </Link>
          <Link to="/photos">
            <button className="btn_arrow">
              ছবি পেজে যান
              <BiRightArrowAlt />
            </button>
          </Link>
        </div>

        {/* HEADING */}
        <div className="section_heading_container">
          <h2 className="section_title">ভিডিও</h2>
          <p className="section_description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            dignissimos!
          </p>
        </div>

        {/* PAGE CONTENT */}
        <div className="page-content">
          <div className="video_grid">
            {videos?.map((video, index) => (
              <div className="video_wrapper">
                <iframe
                  key={index}
                  // width="560"
                  // height="315"
                  src={video.link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <span className="loader_text">Please wait few second...</span>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT ME AREA */}
        <div className="contactME">
          <ContactMe />
        </div>
      </div>
    </section>
  );
}
