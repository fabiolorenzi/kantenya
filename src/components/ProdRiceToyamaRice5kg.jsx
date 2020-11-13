import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import sushiRice from "../img/prodRiceSushiRice.jpg";

function ProdRiceToyamaRice5kg() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1 id="singleItemTitle">RICE / TOYAMA SUSHI RICE 5KG</h1>
                <Link to="/products/rice" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="singleItem">
                <div className="prodLeft">
                    <img src={sushiRice} alt="toyama sushi rice 5kg" />
                </div>
                <div className="prodRight">
                    <div className="prodName">
                        <h1>NAME:</h1>
                        <h2>Toyama Sushi Rice 5kg</h2>
                    </div>
                    <div className="prodPrice">
                        <h1>PRICE:</h1>
                        <h2>£ 29,99</h2>
                    </div>
                    <div className="prodDesc">
                        <h1>DESCRIPTION:</h1>
                        <h2>
                            A sweeter premium rice from Toyama. Explore differences in Japanese rice flavours with this 5kg bag 
                            of Koshihikari rice. Grown in Nyuzen, an area of Toyama prefecture famous for its pure and fast flowing 
                            fresh spring waters, this Japonica rice has a unique flavour slightly sweeter than other Japanese rices, 
                            as well as the same slightly sticky texture of other Koshihikari rices. Use to make sushi or serve on the 
                            side of other Japanese dishes.
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProdRiceToyamaRice5kg;