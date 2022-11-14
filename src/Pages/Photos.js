import axios from "axios";
import React from "react";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import serverURL from "../URL/serverURL";

export default function ImageGallery() {
  const [photos, setImages] = React.useState([]);

  async function fetchPhotos() {
    try {
      const res = await axios.get(serverURL + "api/gallery");
      setImages(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    fetchPhotos();
  }, [photos]);

  return (
    <section id="photosPage">
      <div className="container">
        {/* BUTTONS */}
        <div className="button-container">
          <Link to="/">
            <button className="btn_arrow">
              <BiArrowBack />
              হোমপেজে ফিরে যান
            </button>
          </Link>
          <Link to="/videos">
            <button className="btn_arrow">
              ভিডিও পেজে যান
              <BiRightArrowAlt />
            </button>
          </Link>
        </div>

        {/* HEADING */}
        <div className="section_heading_container">
          <h2 className="section_title">ছবি</h2>
          <p className="section_description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            dignissimos!
          </p>
        </div>

        {/* PAGE CONTENT */}
        <div className="page-content">
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
        </div>
      </div>
    </section>
  );
}
