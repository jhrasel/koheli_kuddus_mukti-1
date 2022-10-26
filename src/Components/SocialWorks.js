import React from "react";

export default function SocialWorks() {
    return (
        <section id="social_works">
            <div className="section_text">
                <h2 className="bn">আমার সামাজিক কর্মকান্ড</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                </p>
            </div>

            <div className="video_area">
                <iframe
                    // width="560"
                    // height="315"
                    src="https://www.youtube.com/embed/xFha5XgMdHA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}
