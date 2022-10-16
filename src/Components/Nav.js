import React from "react";
import { Link } from "react-router-dom";
import Boat from "../Assets/images/Boat.svg";
import LOGO from "../Assets/images/LOGO.svg";

export default function Nav() {
    return (
        <nav id="nav">
            <div className="container">
                <div className="logo_container">
                    <Link to={"/"}>
                        <img src={LOGO} alt="Logo" />
                    </Link>
                </div>
                <div className="boat_area">
                    <img src={Boat} alt="Boat" />
                </div>
            </div>
        </nav>
    );
}
