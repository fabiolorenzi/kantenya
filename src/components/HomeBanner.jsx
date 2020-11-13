import React from "react";
import {Link} from "react-router-dom";

import front from "../img/front_shop.jpg";

function HomeBanner() {
    return (
        <main className="home">
            <div className="imageBanner">
                <img src={front} alt="front of the shop" />
            </div>
            <div className="homeLink">
                <h1>
                    WELCOME TO KANTENYA<br />
                    BRIGHTON JAPANESE FOOD SHOP
                </h1>
                <Link to="/contacts" id="homeButton"><h2>VISIT US</h2></Link>
            </div>
        </main>
    );
};

export default HomeBanner;