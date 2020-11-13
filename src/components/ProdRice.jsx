import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import sushiRice from "../img/prodRiceSushiRice.jpg";

function ProdRice() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1>RICE</h1>
                <Link to="/products" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="productsClass">
                <div className="productsBlock">
                    <Link to="/products/rice/toyama-sushi-rice-5kg" className="productsItem">
                        <img src={sushiRice} alt="toyama sushi rice 5kg" />
                        <h2>TOYAMA SUSHI RICE 5KG</h2>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ProdRice;