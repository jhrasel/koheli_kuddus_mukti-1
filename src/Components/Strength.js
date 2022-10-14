import React from "react";
import strengthImg from "../Assets/images/strength.svg";

const strengthInfo = [
    {
        title: "পড়ালেখা",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
        title: "সামাজিক উন্নয়ন",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
        title: "পারিবারিক পরিচিতি",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
        title: "পড়ালেখা",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
        title: "সামাজিক উন্নয়ন",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
        title: "পারিবারিক পরিচিতি",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
];

export default function Strength() {
    return (
        <section id="strength">
            <div className="section_heading_container">
                <h2 className="section_title">আমার শক্তি</h2>
                <p className="section_description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                </p>
            </div>

            <div className="section_content">
                <div className="img_area">
                    <img src={strengthImg} alt="strengthImg" />
                </div>
                <div className="strength_Info_container">
                    {strengthInfo.map((strg, index) => (
                        <div className="strength_Info">
                            <b>{`0${index + 1}`}</b>
                            <div className="strength_text">
                                <h5>{strg.title}</h5>
                                <p>{strg.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
