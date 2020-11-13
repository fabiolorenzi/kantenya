import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import sapporo from "../img/prodBeer.jpg";
import asahi from "../img/prodBeerAsahi.jpg";

function ProdBeer() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1>BEER</h1>
                <Link to="/products" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="productsClass">
                <div className="productsBlock">
                    <Link to="/products/beer/sapporo" className="productsItem">
                        <img src={sapporo} alt="sapporo beer" />
                        <h2>SAPPORO</h2>
                    </Link>
                </div>
                <div className="productsBlock">
                    <Link to="/products/beer/asahi" className="productsItem">
                        <img src={asahi} alt="asahi beer" />
                        <h2>ASAHI</h2>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ProdBeer;