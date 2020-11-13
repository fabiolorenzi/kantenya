import React from "react";

import logo from "../img/logo.png";

function AboutUs() {
    return (
        <main className="aboutusClass">
            <div className="aboutusBanner">
                <img src={logo} alt="kantenya's logo" />
                <h1>ABOUT US</h1>
            </div>
            <div className="aboutusClass">
                <div id="aboutusBlock">
                    <p>
                        Established in 2012, Kantenya is a well-loved institution situated in Brighton.<br /> The shop has always been 
                        passionate about delivering a rich variety of quality Japanese goods to shoppers in the UK and beyond.<br />
                        Today, Kantenya is the supermarket that offers a real view on the Japanese culture, with authentic Japanese 
                        food and drink, a bookstore offering up to date manga, magazines and gifts, the high quality Japanese 
                        dishes prepared all days and a homeware department stocked full of authentic Japanese supplies.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default AboutUs;