import React from "react";
import PoliticalImg from "../Assets/images/Political/Political.svg";

const PoliticalTourInfo = [
    {
        season: "২০১২-২০১৪",
        title: "ঢাকা মহানগর আওয়ামিলীগ মেম্বার",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        image: PoliticalImg,
    },
    {
        season: "২০১৪-২০১৬",
        title: "ঢাকা দক্ষিণ মহিলা লীগ সভাপতি",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        image: PoliticalImg,
    },
    {
        season: "২০১৬-২০২১",
        title: "জাতীয় সংসদ সদস্য",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        image: PoliticalImg,
    },
    {
        season: "২০১২-২০১৪",
        title: "ঢাকা মহানগর আওয়ামিলীগ মেম্বার",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        image: PoliticalImg,
    },
    {
        season: "২০১৪-২০১৬",
        title: "ঢাকা দক্ষিণ মহিলা লীগ সভাপতি",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        image: PoliticalImg,
    },
    {
        season: "২০১৬-২০২১",
        title: "জাতীয় সংসদ সদস্য",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        image: PoliticalImg,
    },
];

export default function PoliticalTour() {
    return (
        <section id="political_tour">
            <div className="section_heading_container">
                <h2 className="section_title">আমার রাজনীতিক যাত্রা</h2>
                <p className="section_description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                </p>
            </div>

            <div className="section_content">
                <div className="political_tour_info_container">
                    <div className="middle_line">{/* Middle Line */}</div>

                    {PoliticalTourInfo.map((info, index) => (
                        <div
                            className={`political_tour_info ${
                                index % 2 === 1 && "reverse"
                            }`}
                            key={index}
                        >
                            <div className="info_area">
                                <div className="text_area">
                                    <h6>{info.title}</h6>
                                    <p>{info.desc}</p>
                                </div>
                                <img src={info.image} alt="img" />
                            </div>

                            <div className="mid_icon">{/* Middle Point */}</div>

                            <div className="season">{info.season}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
