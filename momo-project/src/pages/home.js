import React from "react";
import '../components/home.css'
import '../App.css'
import plateimg from '../images/Frame 16.png'
import roundbg from '../images/Ellipse 9.png'
import onebg from '../images/onebg.png'
import Group from '../images/Group 3.png'
import Recipes from "./cmp/recipe";


function Home() {
  return (
    <section className="">
 
      <section className="grid grid-cols-2 items-center justify-center relative">
        <section className="flex  justify-center  items-center w-full">
          <div>
          <h1 className="text-[10px]">RESTAURANT</h1>
          <h1 className="font-bold !text-[61px]">The <span  style={{ backgroundImage: `url(${onebg})` }} className=" -ml-4 bg-cover text-white bg-center px-8 w-full h-full font-bold !text-[61px]">#One</span></h1>
          <h1 className="font-bold !text-[61px]">
            Momo <span className="higlight-text !text-[61px]">Restaurant</span>
          </h1>
          <h1 className="text-[10px] mt-8">
          More than 20+ Varieties of momo available for you
          </h1>
          <button className="explore-btn mt-8">
            Explore Food Menu
          </button>
          </div>


        </section>
        <section className="relative flex items-center justify-center h-[80vh]">
          <img src={roundbg} className=" absolute z-10 h-[90vh] top-[-2rem] right-0" />
          <img src={plateimg} className="w-4/5 z-20  ml-auto relative" />

        </section>

      </section>


      <section className="grid grid-cols-2 items-center justify-center relative mt-[5rem]">
        

          <img src={Group} className="w-[70%] h-[90vh] z-20 mx-auto  relative" />

    
        <section className=" h-full mt-[3rem] ml-auto flex   items-center w-full">
          <div className="w-4/5 ml-auto flex flex-col gap-4">
          <h1 className="!text-[39px] font-bold  ">Why Customers <span  className="!text-[39px] font-bold higlight-text">Love Us</span></h1>
          <h1 className="w-[80%]  text-[#6B788E] leading-8 text-xs">Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh
             fermentum vulputate tortor. Egestas facilisi luctus turpis arcu dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit cursus turpis.</h1>
          
          <button className="explore-btn mt-8">
            Explore Our Story
          </button>
          </div>


        </section>
      </section>

<section>
<Recipes />
</section>

     
      
    </section>
  );
}

export default Home;
