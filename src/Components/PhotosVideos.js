import React, { useState } from "react";
import photos1 from "../Assets/images/Chobi/photos (1).jpg";
import photos2 from "../Assets/images/Chobi/photos (2).jpg";
import photos3 from "../Assets/images/Chobi/photos (3).jpg";
import photos4 from "../Assets/images/Chobi/photos (4).jpg";
import photos5 from "../Assets/images/Chobi/photos (5).jpg";
import photos6 from "../Assets/images/Chobi/photos (6).jpg";
import photos7 from "../Assets/images/Chobi/photos (7).jpg";
import photos8 from "../Assets/images/Chobi/photos (8).jpg";
import photos9 from "../Assets/images/Chobi/photos (9).jpg";

const allPhotos = [
    photos1,
    photos2,
    photos7,
    photos4,
    photos9,
    photos6,
    photos5,
    photos3,
    photos8,
];

export default function PhotosVideos() {
    const [btn, setBtn] = useState("photos");

    function handlePhotosBtn() {
        setBtn("photos");
    }

    function handleVideoBtn() {
        setBtn("videos");
    }

    return (
        <section id="photosVideos">
            <div className="section_heading_container">
                <h2 className="section_title">ছবি এবং ভিডিও</h2>
                <p className="section_description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                </p>
            </div>

            <div className="btn_block">
                <div
                    className={`btn_wrapper ${
                        btn === "videos" ? "videoActive" : "photosActive"
                    }`}
                >
                    <span></span>
                    <button className="photosBtn" onClick={handlePhotosBtn}>
                        ছবি
                    </button>
                    <button className="videosBtn" onClick={handleVideoBtn}>
                        ভিডিও
                    </button>
                </div>
            </div>

            <div className="section_content">
                {btn === "photos" ? (
                    <div className="photo_grid">
                        {allPhotos.map((photo, index) => (
                            <img
                                src={photo}
                                alt="Photos"
                                key={index}
                                className={`photo${index + 1}`}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="video_grid">
                        <div className="loader_text">
                            Please wait few second...
                        </div>

                        {[0, 0, 0, 0].map((video, index) => (
                            <iframe
                                key={index}
                                // width="560"
                                // height="315"
                                src="https://www.youtube.com/embed/xFha5XgMdHA"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
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
