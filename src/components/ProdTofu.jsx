import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import blueTofu from "../img/prodTofuBlue.jpg";

function ProdTofu() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1>TOFU</h1>
                <Link to="/products" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="productsClass">
                <div className="productsBlock">
                    <Link to="/products/tofu/blue-tofu" className="productsItem">
                        <img src={blueTofu} alt="blue tofu" />
                        <h2>BLUE TOFU</h2>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ProdTofu;