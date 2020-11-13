import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import mekabu from "../img/prodSeaweedMekabuDried.jpg";

function ProdSeaweed() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1>SEAWEED</h1>
                <Link to="/products" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="productsClass">
                <div className="productsBlock">
                    <Link to="/products/seaweed/mekabu-dried-seaweed" className="productsItem">
                        <img src={mekabu} alt="mekabu dried seaweed" />
                        <h2>MEKABU DRIED SEAWEED</h2>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ProdSeaweed;