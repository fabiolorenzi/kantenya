import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import asahi from "../img/prodBeerAsahi.jpg";

function ProdBeerAsahi() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1 id="singleItemTitle">BEER / SAPPORO</h1>
                <Link to="/products/beer" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="singleItem">
                <div className="prodLeft">
                    <img src={asahi} alt="asahi beer" />
                </div>
                <div className="prodRight">
                    <div className="prodName">
                        <h1>NAME:</h1>
                        <h2>Asahi</h2>
                    </div>
                    <div className="prodPrice">
                        <h1>PRICE:</h1>
                        <h2>£ 2,50</h2>
                    </div>
                    <div className="prodDesc">
                        <h1>DESCRIPTION:</h1>
                        <h2>
                            Asahi Super Dry is the beer of choice in Britain’s best bars, restaurants and nightclubs. Super 
                            crisp, super clear and super dry, the beer embodies Japanese discernment and good taste.
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProdBeerAsahi;