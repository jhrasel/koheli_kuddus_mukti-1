import React from "react";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import Introduction from "../Components/Introduction";

export default function Home() {
    return (
        <>
            <Banner />
            <div className="container">
                <Cards />
                <Introduction />
            </div>
        </>
    );
}
