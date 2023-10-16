import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";

const Landing = () => {
    return (
        <div className="landing-page">
            <Header showAuthLinks={true}/>
            <Banner/>
        </div>
    );
}

export default Landing