import axios from "axios";
import React, { useState } from "react";

export default function PhotosVideos() {
  const [btn, setBtn] = useState("photos");
  const [videos, setVideos] = useState([]);
  const [images, setImages] = useState([]);

  async function fetchImages() {
    try {
      const res = await axios.get(
        "http://koheli.sscquizcontest.com/api/gallery"
      );
      setImages(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchVideos() {
    try {
      const res = await axios.get("http://koheli.sscquizcontest.com/api/video");
      setVideos(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchImages();
    fetchVideos();
  }, [images, videos]);

  return (
    <section id="photosVideos">
      <div className="section_heading_container">
        <h2 className="section_title">ছবি এবং ভিডিও</h2>
        <p className="section_description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>
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
            {images.map((photo, index) => (
              <img
                src={`http://koheli.sscquizcontest.com/${photo.photo}`}
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
        <button className="btn">আরো দেখুন</button>
      </div>
    </section>
  );
}
