import React from "react";
import video from '../../images/Video.png'
import img1 from '../../images/Quality.png'
import img2 from '../../images/party.png'
import img3 from '../../images/Chef.png'
function Service(){
    const details = [
        { img: img1, name: "Quality Food", dec: "Only the best food with top quality products and ingredients" },
        { img: img2, name: "Private Party", dec: "Get the best food for all your private parties and gatherings" },
        { img: img3, name: "Catering", dec: "Get the best food for any occasions and gatherings" }
    ];
    
    
    
    return(
        <section className="mb-12">
            <div>
                <div className="h-[207px] bg-[#F7F9FC] flex justify-center items-center">
                    <h6 className="">
                        <h6 className="higlight-text">We Offer People </h6>
                        The Service They Want</h6>
                    </div>
                    <img src={video}  className="w-screen"/>
            </div>
            <section className="grid grid-cols-3  gap-4 justify-between items-center w-3/5 mx-auto my-[7rem] ">
                {details.map((i) => (
                    <div key={i.name} className="flex flex-col gap-6 justify-center items-center">
                        <img src={i.img} alt={i.name} className="w-20 h-20"/>
                        <h3 className="!text-[31px] font-bold">{i.name}</h3>
                        <p className="text-center w-2/3">{i.dec}</p>
                    </div>
                ))}
            </section>


            <button className="explore-btn mt-8 mx-auto !h-[64px] !w-[272px] !text-[18px]">
            Explore Our Menu
          </button>
        </section>
    )
}

export default Service