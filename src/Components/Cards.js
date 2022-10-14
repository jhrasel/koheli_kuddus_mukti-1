import React from "react";
import deshpremik from "../Assets/images/Cards/deshpremik.svg";
import doyalu from "../Assets/images/Cards/doyalu.svg";
import pesadari from "../Assets/images/Cards/pesadari.svg";

const cardInfo = [
    { icon: pesadari, text: "পেশাদারী" },
    { icon: deshpremik, text: "দেশপ্রেমিক" },
    { icon: doyalu, text: "দয়ালু" },
];

export default function Cards() {
    return (
        <div id="cards">
            {cardInfo.map((card, index) => (
                <div className="card">
                    <img src={card.icon} alt="icon" />
                    <p>{card.text}</p>
                </div>
            ))}
        </div>
    );
}
