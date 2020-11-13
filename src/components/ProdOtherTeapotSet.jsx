import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import teapot from "../img/prodOther.jpg";

function ProdOtherTeapotSet() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1 id="singleItemTitle">OTHER / TEAPOT SET</h1>
                <Link to="/products/other" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="singleItem">
                <div className="prodLeft">
                    <img src={teapot} alt="traditional japanese teapot set" />
                </div>
                <div className="prodRight">
                    <div className="prodName">
                        <h1>NAME:</h1>
                        <h2>Teapot Set</h2>
                    </div>
                    <div className="prodPrice">
                        <h1>PRICE:</h1>
                        <h2>£ 17,99</h2>
                    </div>
                    <div className="prodDesc">
                        <h1>DESCRIPTION:</h1>
                        <h2>
                            Traditional Japanese teapot set.
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProdOtherTeapotSet;