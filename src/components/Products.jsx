import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import noodles from "../img/prodNoodles.jpg";
import misoPaste from "../img/prodMisoPaste.jpg";
import soySauce from "../img/prodSoySauce.jpg";
import tofu from "../img/prodTofu.jpg";
import seaweed from "../img/prodSeaweed.jpg";
import rice from "../img/prodRice.jpg";
import beer from "../img/prodBeer.jpg";
import sake from "../img/prodSake.jpg";
import other from "../img/prodOther.jpg";

function Products() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1>PRODUCTS</h1>
            </div>
            <div className="productsClass">
                <div className="productsBlock">
                    <Link to="/products/noodles" className="productsItem">
                        <img src={noodles} alt="noodles" />
                        <h2>NOODLES</h2>
                    </Link>
                </div>
                <div className="productsBlock">
                    <Link to="/products/miso-pastes" className="productsItem">
                        <img src={misoPaste} alt="miso paste" />
                        <h2>MISO PASTES</h2>
                    </Link>
                </div>
                <div className="productsBlock">
                    <Link to="/products/soy-sauces" className="productsItem">
                        <img src={soySauce} alt="soy sauce" />
                        <h2>SOY SAUCE</h2>
                    </Link>
                </div>
                <div className="productsBlock">
                    <Link to="/products/tofu" className="productsItem">
                        <img src={tofu} alt="tofu" />
                        <h2>TOFU</h2>
                    </Link>
                </div>
                <div className="productsBlock">
                    <Link to="/products/seaweed" className="productsItem">
                        <img src={seaweed} alt="seaweed" />
                        <h2>SEAWEED</h2>
                    </Link>
                </div>
                <div className="productsBlock">
                    <Link to="/products/rice" className="productsItem">
                        <img src={rice} alt="rice" />
                        <h2>RICE</h2>
                    </Link>
                </div>
                <div className="productsBlock">
                    <Link to="/products/beer" className="productsItem">
                        <img src={beer} alt="beer" />
                        <h2>BEER</h2>
                    </Link>
                </div>
                <div className="productsBlock">
                    <Link to="/products/sake" className="productsItem">
                        <img src={sake} alt="sake" />
                        <h2>SAKE</h2>
                    </Link>
                </div>
                <div className="productsBlock">
                    <Link to="/products/other" className="productsItem">
                        <img src={other} alt="other" />
                        <h2>OTHER</h2>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Products;