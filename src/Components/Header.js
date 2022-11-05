import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Boat from "../Assets/images/Boat.svg";
import LOGO from "../Assets/images/LOGO.svg";

export default function Header() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        // console.log(window.scrollY);
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, [sticky]);

  return (
    <nav id="header" className={sticky && "sticky"}>
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
