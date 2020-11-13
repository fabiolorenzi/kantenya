import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import sapporo from "../img/prodBeer.jpg";

function ProdBeerSapporo() {
    return (
        <main className="products">
            <div className="productsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1 id="singleItemTitle">BEER / SAPPORO</h1>
                <Link to="/products/beer" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="singleItem">
                <div className="prodLeft">
                    <img src={sapporo} alt="sapporo beer" />
                </div>
                <div className="prodRight">
                    <div className="prodName">
                        <h1>NAME:</h1>
                        <h2>Sapporo</h2>
                    </div>
                    <div className="prodPrice">
                        <h1>PRICE:</h1>
                        <h2>£ 4,50</h2>
                    </div>
                    <div className="prodDesc">
                        <h1>DESCRIPTION:</h1>
                        <h2>
                            Made with careful attention to quality, and crafted from select barley and hops, Sapporo Premium Black 
                            is emblematic of our pioneering spirit and a product of a passion for craftsmanship that goes back 140 
                            years. Our first dark beer is bold and flavorful, yet smooth and crisp in the classic Sapporo fashion. 
                            Sapporo Premium Black is crafted with roasted dark malts and a refined hop bitterness that is complemented 
                            by a sweet, round fullness and distinct coffee and chocolate flavors.
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProdBeerSapporo;