import axios from "axios";
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Loader from "./Loader";

// Import Swiper React components
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner() {
  const [loader, setLoader] = React.useState(true);
  const [bannerData, setbannerData] = useState([]);

  useEffect(() => {
    axios
      .get("http://koheli.sscquizcontest.com/api/banners")
      .then(({ data }) => {
        setbannerData(data.data);
        setLoader(false);
      });
  }, []);

  return (
    <section id="banner">
      {/* SLIDER */}
      <div className="slider_container">
        <Swiper
          modules={[Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {/* <SwiperSlide>
            <img src={BannerOne} alt="banner-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BannerTwo} alt="banner-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BannerThree} alt="banner-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BannerFour} alt="banner-img" />
          </SwiperSlide> */}
          {bannerData.map((item, key) => (
            <SwiperSlide key={key}>
              <img
                src={"https://koheli.sscquizcontest.com/" + item.photo}
                alt="banner-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container">
        {/* BANNER HEADING TEXT WITH BUTTON */}
        <div className="banner_heading">
          <h1 className="bn">
            <Typewriter
              words={[
                // Max 60 character
                "আপনাদের দোয়া ও ভালবাসায় জনগনের সেবায় নিবেদিত প্রাণ",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={5000}
            />
          </h1>
          {/* <h1>আপনাদের দোয়া ও ভালবাসায় জনগনের সেবায় নিবেদিত প্রাণ </h1> */}
          <button className="btn">যোগাযোগ করুন</button>
        </div>
      </div>

      {/* ===== LOADER =====*/}
      {loader && <Loader />}
    </section>
  );
}
