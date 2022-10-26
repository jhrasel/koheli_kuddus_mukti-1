import React from "react";
import { Typewriter } from "react-simple-typewriter";
import BannerTwo from "../Assets/images/Banner/banner-1.jpg";
import BannerOne from "../Assets/images/Banner/banner-2.jpg";
import BannerThree from "../Assets/images/Banner/banner-3.jpg";
import BannerFour from "../Assets/images/Banner/banner-4.jpg";

// Import Swiper React components
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner() {
    if (window.screen.width <= 600) {
        console.log(window.screen.width);
        console.log("Mobile");
    }

    return (
        <section id="banner">
            {/* <div className="container"> */}
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
        </section>
    );
}
