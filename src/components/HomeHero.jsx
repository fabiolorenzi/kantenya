import React from "react";
import {Link} from "react-router-dom";

import imageHero1 from "../img/imageHero1.jpg";
import imageHero2 from "../img/imageHero2.jpg";
import imageHero3 from "../img/imageHero3.jpg";
import imageHero4 from "../img/imageHero4.jpg";

function HomeHero() {
    return (
        <div id="slider">
            <figure>
                <Link to="#"><img src={imageHero1} alt="soup" /></Link>
                <Link to="#"><img src={imageHero2} alt="rice cake" /></Link>
                <Link to="#"><img src={imageHero3} alt="rice" /></Link>
                <Link to="#"><img src={imageHero4} alt="spring roll" /></Link>
                <Link to="#"><img src={imageHero1} alt="soup" /></Link>
            </figure>
        </div>
    );
};

export default HomeHero;