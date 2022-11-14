import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import serverURL from "../URL/serverURL";

export default function PhotosVideos({ allData }) {
  const [btn, setBtn] = useState("photos");
  const [videos, setVideos] = useState([]);
  const [photos, setImages] = useState([]);

  async function fetchPhotos() {
    try {
      const res = await axios.get(serverURL + "api/gallery");
      setImages(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchVideos() {
    try {
      const res = await axios.get(serverURL + "api/video");
      setVideos(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchPhotos();
    fetchVideos();
  }, [photos, videos]);

  return (
    <section id="photosVideos">
      <div className="section_heading_container">
        <h2 className="section_title">
          {allData.gallery_heading ? allData.gallery_heading : "ছবি এবং ভিডিও"}
        </h2>
        <p className="section_description">{allData?.gallery_description}</p>
      </div>

      <div className="btn_block">
        <div
          className={`btn_wrapper ${
            btn === "videos" ? "videoActive" : "photosActive"
          }`}
        >
          <span></span>
          <button className="photosBtn" onClick={() => setBtn("photos")}>
            ছবি
          </button>
          <button className="videosBtn" onClick={() => setBtn("videos")}>
            ভিডিও
          </button>
        </div>
      </div>

      <div className="section_content">
        {btn === "photos" ? (
          <div className="photo_grid">
            {photos.map((photo, index) => (
              <img
                src={`${serverURL + photo.photo}`}
                alt="Photos"
                key={index}
                className={`photo${index + 1}`}
              />
            ))}
          </div>
        ) : (
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
        )}
      </div>

      <div className="more_btn">
        <Link to={`${btn}`}>
          <button className="btn">আরো দেখুন</button>
        </Link>
      </div>
    </section>
  );
}
