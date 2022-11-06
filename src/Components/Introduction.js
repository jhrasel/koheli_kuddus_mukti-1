import React from "react";
import Introduction_Image from "../Assets/images/Introduction_Image.jpg";

export default function Introduction({ allData }) {
  return (
    <section id="introduction">
      <img src={Introduction_Image} alt="Introduction_Image" />
      <img
        src={`http://koheli.sscquizcontest.com/api/home/page-data/${allData?.about_img}`}
        alt="Introduction_Image"
      />

      <div className="introduction_text">
        <h2>আমার পরিচিতি</h2>
        <p>{allData?.about_description}</p>
        <b>
          {allData.about_name ? allData.about_name : "কোহেলী কুদ্দুস মুক্তি"}
        </b>
        <span>অ্যাডভোকেট</span>
      </div>
    </section>
  );
}
