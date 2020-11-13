import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import blueTofu from "../img/prodTofuBlue.jpg";

function ProdTofuBlueTofu() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1 id="singleItemTitle">TOFU / BLUE TOFU</h1>
                <Link to="/products/tofu" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="singleItem">
                <div className="prodLeft">
                    <img src={blueTofu} alt="blue tofu" />
                </div>
                <div className="prodRight">
                    <div className="prodName">
                        <h1>NAME:</h1>
                        <h2>Blue Tofu</h2>
                    </div>
                    <div className="prodPrice">
                        <h1>PRICE:</h1>
                        <h2>£ 1,80</h2>
                    </div>
                    <div className="prodDesc">
                        <h1>DESCRIPTION:</h1>
                        <h2>
                            The most used kind of tofu. Ideal for every dish!
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProdTofuBlueTofu;