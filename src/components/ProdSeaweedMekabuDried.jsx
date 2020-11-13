import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import mekabu from "../img/prodSeaweedMekabuDried.jpg";

function ProdSeaweedMekabuDried() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1 id="singleItemTitle">SEAWEED / MEKABU DRIED SEAWEED</h1>
                <Link to="/products/seaweed" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="singleItem">
                <div className="prodLeft">
                    <img src={mekabu} alt="mekabu dried seaweed" />
                </div>
                <div className="prodRight">
                    <div className="prodName">
                        <h1>NAME:</h1>
                        <h2>Mekabu Dried Seaweed</h2>
                    </div>
                    <div className="prodPrice">
                        <h1>PRICE:</h1>
                        <h2>£ 1,99</h2>
                    </div>
                    <div className="prodDesc">
                        <h1>DESCRIPTION:</h1>
                        <h2>
                            This product is very similar to hijiki. With less salt, to keep the soup healthier!
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProdSeaweedMekabuDried;