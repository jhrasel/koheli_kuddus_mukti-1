import React from "react";
import serverURL from "../URL/serverURL";

export default function Introduction({ allData }) {
  return (
    <section id="introduction">
      <img src={`${serverURL + allData.about_img}`} alt="Introduction_Image" />

      <div className="introduction_text">
        <h2>আমার পরিচিতি</h2>
        <p className="bn">{allData?.about_description}</p>
        <b>
          {allData.about_name ? allData.about_name : "কোহেলী কুদ্দুস মুক্তি"}
        </b>
        <span>{allData.title}</span>
      </div>
    </section>
  );
}
