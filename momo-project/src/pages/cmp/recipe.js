import React, { useState } from "react";

function Recipes() {
    const [activeTab, setActiveTab] = useState("buff"); 

    const recipes = {
        buff: [
            { name: "Buff stem momo", price: "120rs" },
            { name: "Buff fry momo", price: "150rs" },
            { name: "Buff Chilly momo", price: "130rs" },
        ],
        chicken: [
            { name: "Chicken momo", price: "140rs" },
            { name: "Chicken fry momo", price: "170rs" },
            { name: "Chicken Chilly momo", price: "160rs" },
        ],
        veg: [
            { name: "Veg momo", price: "100rs" },
            { name: "Veg fry momo", price: "120rs" },
            { name: "Veg Chilly momo", price: "110rs" },
        ],
    };

    const tabs = ["buff", "chicken", "veg"]; // Define tab categories

    const handleTabClick = (tab) => {
        setActiveTab(tab); 
    };

    return (
        <section>
            <section className="flex flex-col justify-center items-center my-12">
                <h1 className="!text-[39px] font-bold">
                    Our <span className="higlight-text !text-[39px] font-bold">Most Popular</span> Recipes
                </h1>
                <h1 className="text-sm">Browse through a variety of recipes with fresh ingredients selected only from the best places</h1>
            </section>

         
            <section className="flex justify-center space-x-4 my-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`tab-button ${activeTab === tab ? "active" : ""}`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)} 
                    </button>
                ))}
            </section>

            <section className="my-4">
            <section className="grid grid-cols-3 w-3/5 mx-auto ">
                {recipes[activeTab].map((recipe, index) => (
                    <section key={index} className="my-2 flex flex-col justify-center items-center">
                        <h1>{recipe.name}</h1>
                        <h1>Price: {recipe.price}</h1>
                    </section>
                ))}
            </section>
            <button className="explore-btn mt-8 mx-auto">
            Explore Our Menu
          </button>
            </section>
        </section>
    );
}

export default Recipes;
