import React from "react";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import Introduction from "../Components/Introduction";
import Programs from "../Components/Programs";
import Strength from "../Components/Strength";

export default function Home() {
    return (
        <>
            <Banner />
            <div className="container">
                <Cards />
                <Introduction />
                <Strength />
            </div>
            <Programs />
        </>
    );
}
