import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import sapporoGreen from "../img/prodSapporoGreen.jpg";

function ProdNoodleSapporoGreen() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1 id="singleItemTitle">NOODLES / SAPPORO GREEN</h1>
                <Link to="/products/noodles" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="singleItem">
                <div className="prodLeft">
                    <img src={sapporoGreen} alt="sapporo green" />
                </div>
                <div className="prodRight">
                    <div className="prodName">
                        <h1>NAME:</h1>
                        <h2>Sapporo Green</h2>
                    </div>
                    <div className="prodPrice">
                        <h1>PRICE:</h1>
                        <h2>£ 0,99</h2>
                    </div>
                    <div className="prodDesc">
                        <h1>DESCRIPTION:</h1>
                        <h2>
                            Sapporo Ichiban chicken flavoured ramen noodles is a great fast snack for lunches or as an accompaniment 
                            to a larger meal. Simply boil for 3 mins, then add the flavour sachets and enjoy.
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProdNoodleSapporoGreen;