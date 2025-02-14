import React, { useState } from "react";
import img2 from '../../images/pngegg 1.png'
import img1 from '../../images/pngwing 2.png'
import img3 from '../../images/chilli-momo.png'

function Recipes() {
    const [activeTab, setActiveTab] = useState("buff"); 

    const recipes = {
        buff: [
            { img:img1 ,name: "Buff stem momo", price: "120rs" },
            { img:img2 ,name: "Buff fry momo", price: "150rs" },
            { img:img3 ,name: "Buff Chilly momo", price: "130rs" },
        ],
        chicken: [
            { img:img1 ,name: "Chicken momo", price: "140rs" },
            { img:img2 ,name: "Chicken fry momo", price: "170rs" },
            { img:img3 ,name: "Chicken Chilly momo", price: "160rs" },
        ],
        veg: [
            { img:img1 ,name: "Veg momo", price: "100rs" },
            { img:img2 ,name: "Veg fry momo", price: "120rs" },
            { img:img3 ,name: "Veg Chilly momo", price: "110rs" },
        ],
    };

    const tabs = ["buff", "chicken", "veg"]; // Define tab categories

    const handleTabClick = (tab) => {
        setActiveTab(tab); 
    };

    return (
        <section className="!my-[8rem]">
            <section className="flex flex-col justify-center items-center py-8  ">
                <h1 className="!text-[39px] font-bold">
                    Our <span className="higlight-text !text-[39px] font-bold">Most Popular</span> Recipes
                </h1>
                <h1 className="!text-lg text-neutral-500 mt-4">Browse through a variety of recipes with fresh ingredients selected only from the best places</h1>
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
                    <section key={index} className="my-8 gap-4 flex flex-col justify-center items-center">
                        <img src={recipe.img} />
                        <h1 className="!text-[22px] font-bold">{recipe.name}</h1>
                        <h1  className="font-bold !text-lg">RS.<span className="font-bold !text-[22px] higlight-text">{recipe.price}</span> </h1>
                    </section>
                ))}
            </section>
            <button className="explore-btn mt-8 mx-auto !w-[272px] !h-[64px] !text-[18px]">
            Explore Our Menu
          </button>
            </section>
        </section>
    );
}

export default Recipes;
