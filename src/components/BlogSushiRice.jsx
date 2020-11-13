import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import sushiRice from "../img/blogSushiRice.jpg";

function BlogSushiRice() {
    return (
        <main className="blog">
            <div className="blogBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1 id="singleItemTitle">BLOG / HOW TO COOK JAPANESE RICE AND SUSHI RICE</h1>
                <Link to="/blog" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="singleItem">
                <div className="blogLeft">
                    <img src={sushiRice} alt="japanese rice" />
                </div>
                <div className="blogRight">
                    <h1 className="blogTitle">
                        How to cook Japanese rice and Sushi rice
                    </h1>
                    <div className="blogIng">
                        <h1>Ingredients</h1>
                        <ul>
                            <li>Rice 300g</li>
                            <li>Water 390ml</li>
                            <li>Sushi Vinegar 80ml (optional)</li>
                        </ul>
                    </div>
                    <div className="blogHow">
                        <h1>Procedures</h1>
                        <ol>
                            <li>
                                Measure out the rice and put it into a saucepan or use a bowl at this stage. Add plenty 
                                of water to the pan/bowl then gently stir and mix the rice with your hand. When the water becomes 
                                cloudy with starch, pour the water away, keeping the rice in the pan/bowl with your hand. Repeat 
                                this step up to 3-5 times or until the water becomes clear. After washing the rice soak the rice 
                                for at least 30 mins. Then drain after 30 mins.
                            </li>
                            <li>
                                Add the rice and 390ml of fresh water to your saucepan. Put on the stove, and bring to 
                                the boil. Once boiling, turn the heat down to low and let the rice simmer for about 15-20 mins 
                                (Make sure to keep the lid on the sauce pan at all times).
                            </li>
                            <li>
                                Once it has simmered, remove the saucepan from the stove and leave the rice to steam 
                                for a further 10-15 mins.
                            </li>
                            <li>
                                Once the rice has finished steaming, mix well with a shamoji, or Japanese rice paddle, and serve 
                                into bowls. You can then use a choice of toppings such as furikake, Japanese pickles (tsukemono) or 
                                sauce for extra flavour or use to make onigiri rice balls.
                            </li>
                            <li>
                                To make sushi rice, the cooked rice needs to be mixed with sushi vinegar, which is Japanese rice 
                                vinegar mixed with salt and sugar. Mix 80ml of sushi vinegar (or about 12% of the total cooked 
                                rice weight) with the rice. To get the best flavour, the vinegar needs to be folded into the rice 
                                while it is still warm. As you are mixing the rice and vinegar together, use a fan to cool the rice 
                                and remove the moisture. Your sushi rice is now ready to be used in all types of delicious sushi. 
                                For best results use a wooden sushi bowl (sushi oke) to mix and cool the rice.
                            </li>
                        </ol>
                    </div>
                    <div className="blogTips">
                        <h1>Tips</h1>
                        <ul>
                            <li>
                                You can vary the amount of sushi vinegar slightly according to your tastes.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BlogSushiRice;