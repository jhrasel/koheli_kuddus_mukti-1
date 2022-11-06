import React from "react";

export default function SocialWorks({ allData }) {
  return (
    <section id="social_works">
      <div className="section_text">
        <h2 className="bn">
          {allData?.samajik_kormo_heading
            ? allData.samajik_kormo_heading
            : "আমার সামাজিক কর্মকান্ড"}
        </h2>
        <p>{allData?.samajik_kormo_description}</p>
      </div>

      <div className="video_area">
        <iframe
          src={allData?.samajik_kormo_link}
          //   src="https://www.youtube.com/embed/xFha5XgMdHA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
