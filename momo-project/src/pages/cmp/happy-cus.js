import React, { useState } from "react";
import userimg from "../../images/user.png";

const reviews = [
    { name: "Livia Dias", message: "Only the best momo you can find in the market. Different varieties of momo to choose from. Will be visiting again soon." },
    { name: "Alex Smith", message: "Amazing food! Loved the taste and the quality of the ingredients. Highly recommended!" },
    { name: "Sophia Patel", message: "Best place for momo lovers! The flavors are authentic and the service is top-notch." }
];

function Review() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="grid grid-cols-2 gap-2 w-4/5 mx-auto">
          
            <div className="flex flex-col gap-6 justify-center items-start">
                <h6>200+ <h6 className="higlight-text">Happy Customers</h6></h6>
                <h1 className="!text-[30px] font-bold !text-[#0C6967]">What our customers say about us</h1>

                
                <p className="!text-[20px] w-2/3">“{reviews[currentIndex].message}”</p>
                <h1 className="!text-[31px] font-bold">{reviews[currentIndex].name}</h1>

                
                <div className="icon-btn flex gap-4">
                    <button onClick={handlePrev} className="bg-gray-300 px-4 py-2 rounded">L</button>
                    <button onClick={handleNext} className="bg-gray-300 px-4 py-2 rounded">R</button>
                </div>
            </div>

         
            <div className="m-8">
                <img src={userimg} alt="User" className="mx-auto" />
            </div>
        </section>
    );
}

export default Review;
