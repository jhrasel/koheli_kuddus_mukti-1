import React from "react";
import Boat from "../Assets/images/Boat.svg";
import LOGO from "../Assets/images/LOGO.svg";

export default function Nav() {
    return (
        <div id="nav">
            <div className="container">
                <div className="logo_container">
                    <span>K</span>
                    <img src={LOGO} alt="Logo" />
                </div>
                <div className="boat_area">
                    <img src={Boat} alt="Boat" />
                </div>
            </div>
        </div>
    );
}
