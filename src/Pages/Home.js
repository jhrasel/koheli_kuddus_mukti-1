import React from "react";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";

export default function Home() {
    return (
        <>
            <Banner />
            <div className="container">
                <Cards />
            </div>
        </>
    );
}
