import React from "react";
import {Link} from "react-router-dom";

import productsLogo from "../img/logo.png";
import gyozaRecipe from "../img/blogGyozaRecipe.jpg";

function BlogGyoza() {
    return (
        <main className="blog">
            <div className="blogBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1 id="singleItemTitle">BLOG / HOW TO PREPARE TRADITIONAL GYOZA AT HOME</h1>
                <Link to="/blog" className="returnLink"><h2>Return Back</h2></Link>
            </div>
            <div className="singleItem">
                <div className="blogLeft">
                    <img src={gyozaRecipe} alt="gyoza" />
                </div>
                <div className="blogRight">
                    <h1 className="blogTitle">
                        How to prepare traditional Gyoza at home
                    </h1>
                    <div className="blogIng">
                        <h1>Ingredients</h1>
                        <ul>
                            <li>Gyoza skin 1 package</li>
                            <li>Oil 1 tbsp</li>
                            <li>Water</li>
                            <li>Sesame oil 1 tbsp</li>
                            <li>Ground pork 340g</li>
                            <li>Cabbage 140g</li>
                            <li>2 white onions</li>
                            <li>2 shiitake mushrooms</li>
                            <li>Garlic 1 clove</li>
                            <li>Ginger</li>
                            <li>Sake 1 tsp</li>
                            <li>Soy sauce 2 tsp</li>
                            <li>Salt</li>
                            <li>Black pepper</li>
                            <li>Rice vinegar 1 tbsp</li>
                            <li>La-Yu</li>
                        </ul>
                    </div>
                    <div className="blogHow">
                        <h1>Procedures</h1>
                        <ol>
                            <li>
                                As cabbage leaves are thick and hard, we use different ways to make the cabbage leaves wilted. 
                                You can blanch or microwave them for a minute or two. You can also sprinkle salt to dehydrate the 
                                cabbage and squeeze the water out. Or you can skip the entire process altogether.
                            </li>
                            <li>
                                Remove the core of the cabbage leaves and cut into very small pieces.
                            </li>
                            <li>
                                Cut onions and shiitake mushrooms into small pieces.
                            </li>
                            <li>
                                Combine the ground meat, cabbage, green onion, and shiitake mushrooms in a large bowl.
                            </li>
                            <li>
                                Add minced garlic and grated ginger to the bowl.
                            </li>
                            <li>
                                Add the seasonings (1 tsp sesame oil, 1 tsp soy sauce, ¼ tsp kosher salt, 1 tsp sake, and freshly 
                                ground black pepper).
                            </li>
                            <li>
                                Mix well and knead the mixture with hand until it becomes pale in color and sticky.
                            </li>
                            <li>
                                Take a wrapper and place it in the palm of your non-dominant hand. Use a teaspoon to take a small 
                                amount of filling and put it in the center of the wrapper. Dip one finger in a bowl of water and 
                                draw a circle around the outer ¼” of the wrapper with your wet finger until it’s wet all around.
                            </li>
                            <li>
                                Fold the wrapper in half over the filling and pinch it in the center with your fingers (but don’t 
                                seal yet!).
                            </li>
                            <li>
                                Using your thumb and index finger, start making a pleat about once every ¼“ on the top part of the 
                                wrapper from the center toward the right side, making 3-4 pleats.
                            </li>
                            <li>
                                Continue with the left side of the gyoza and press the pleats and shape the gyoza.
                            </li>
                            <li>
                                Heat the oil in a large non-stick frying pan over medium heat. When the pan is hot, place the gyoza 
                                in a single layer, flat side down in a circular shape (or place them in two columns).
                            </li>
                            <li>
                                Cook until the bottom of the gyoza turns golden brown, in about 3 minutes.
                            </li>
                            <li>
                                Add ¼ cup of water to the pan. Immediately cover with a lid and steam the gyoza for about 3 minutes 
                                or until most of the water evaporates.
                            </li>
                            <li>
                                Remove the lid to evaporate any remaining water. Add 1 tsp sesame oil around the frying pan.
                            </li>
                            <li>
                                Cook uncovered until the gyoza is nice and crisp on the bottom.
                            </li>
                            <li>
                                Transfer to a plate and serve with dipping sauce. For the dipping sauce, combine the sauce 
                                ingredients in a small plate and mix all together.
                            </li>
                        </ol>
                    </div>
                    <div className="blogTips">
                        <h1>Tips</h1>
                        <ul>
                            <li>
                                After you open the gyoza wrappers, make sure to cover them under a damp towel or plastic wrap so 
                                they won't dry out.
                            </li>
                            <li>
                                As you fold each pleat, press the folded pleat tightly against the back part of the wrapper using 
                                your other thumb and index finger.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BlogGyoza;