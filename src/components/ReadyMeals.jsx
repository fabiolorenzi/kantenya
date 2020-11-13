import React from "react";

import productsLogo from "../img/logo.png";
import readyNoodle from "../img/readyNoodle.jpg";
import readyChicken from "../img/readyChicken.jpg";
import readyGyoza from "../img/readyGyoza.jpg";
import readySushi from "../img/readySushi.jpg";
import readyOnigiri from "../img/readyOnigiri.jpg";
import readyRice from "../img/readyRice.jpg";

function ReadyMeals() {
    return (
        <main className="readyMeals">
            <div className="readyMealsBanner">
                <img src={productsLogo} alt="kantenya's logo" />
                <h1>READY MEALS</h1>
            </div>
            <div className="readyMealsClass">
                <table id="mealsTable">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={readyNoodle} alt="shirataki noodles" /></td>
                            <td>Shirataki Noodles</td>
                            <td>£3,30</td>
                            <td>Shirataki noodles with cabbage and ginger</td>
                        </tr>
                        <tr>
                            <td><img src={readyChicken} alt="chicken katsu" /></td>
                            <td>Chicken Katsu</td>
                            <td>£3,30</td>
                            <td>Breaded chicken</td>
                        </tr>
                        <tr>
                            <td><img src={readyGyoza} alt="gyoza" /></td>
                            <td>Gyoza</td>
                            <td>£3,30</td>
                            <td>Available with pork, chicken and vegetables</td>
                        </tr>
                        <tr>
                            <td><img src={readyRice} alt="rice" /></td>
                            <td>Rice</td>
                            <td>£0,60</td>
                            <td>Plain rice</td>
                        </tr>
                        <tr>
                            <td><img src={readySushi} alt="sushi" /></td>
                            <td>Sushi</td>
                            <td>£5,99</td>
                            <td>The most famous Japanese dish, available from Monday to Friday</td>
                        </tr>
                        <tr>
                            <td><img src={readyOnigiri} alt="nigiri" /></td>
                            <td>Nigiri</td>
                            <td>£1,40</td>
                            <td>Available with salmon, tuna and mayo, plumb and spiced</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default ReadyMeals;