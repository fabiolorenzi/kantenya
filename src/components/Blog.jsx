import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import sushiRiceRecipe from "../img/blogSushiRice.jpg";
import gyozaRecipe from "../img/blogGyozaRecipe.jpg";

function Blog() {
    return (
        <main className="blog">
            <div className="blogBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1>BLOG</h1>
            </div>
            <div className="blogClass">
                <div className="blogBlock">
                    <Link to="/blog/how-to-cook-japanese-rice-and-sushi-rice" className="blogItem">
                        <img src={sushiRiceRecipe} alt="sushi rice recipe" />
                        <h2>How to cook Japanese rice and Sushi rice</h2>
                    </Link>
                </div>
                <div className="blogBlock">
                    <Link to="/blog/how-to-prepare-traditional-gyoza-at-home" className="blogItem">
                        <img src={gyozaRecipe} alt="gyoza recipe" />
                        <h2>How to prepare traditional Gyoza at home</h2>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Blog;