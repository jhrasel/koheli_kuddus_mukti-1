import React from "react";
import BannerTwo from "../Assets/images/banner-1.jpg";
import BannerOne from "../Assets/images/banner-2.jpg";
import BannerThree from "../Assets/images/banner-3.jpg";
import BannerFour from "../Assets/images/banner-4.jpg";

// Import Swiper React components
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
        </div>
    );
}
