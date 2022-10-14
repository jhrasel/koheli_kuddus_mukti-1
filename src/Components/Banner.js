import React from "react";
import { Typewriter } from "react-simple-typewriter";
import BannerTwo from "../Assets/images/banner-1.jpg";
import BannerOne from "../Assets/images/banner-2.jpg";
import BannerThree from "../Assets/images/banner-3.jpg";
import BannerFour from "../Assets/images/banner-4.jpg";

// Import Swiper React components
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

export default function Banner() {
    return (
        <div id="banner">
            <div className="slider_container">
                <Swiper
                    modules={[Autoplay]}
                    className="mySwiper"
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide>
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
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="banner_heading">
                <h1>
                    <Typewriter
                        words={[
                            "আপনাদের দোয়া ও ভালবাসায় জনগনের সেবায় নিবেদিত প্রাণ",
                        ]}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={60}
                        delaySpeed={5000}
                    />
                </h1>
                {/* <h1>আপনাদের দোয়া ও ভালবাসায় জনগনের সেবায় নিবেদিত প্রাণ </h1> */}
                <button className="btn">যোগাযোগ করুন</button>
            </div>
        </div>
    );
}
