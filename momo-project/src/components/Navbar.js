import React from "react";
import Logo from '../images/Logo.png'
import './nav.css'
function Navbar() {
  return (
    // <nav style={{ background: "#333", padding: "10px", color: "#fff" }}>
    //   <h3>My Navbar</h3>
    // </nav>

    <section className="p-4 border-b relative z-50 bg-white   ">
        <section className="w-[90vw] mx-auto flex justify-between items-center">
        <section className=" flex gap-8  items-center">
        <img src={Logo} />
        <section className=" flex gap-4  items-center">
          <h1>About US</h1>
          <h1>Our Menu</h1>
          <h1>Our Services</h1>
          <h1>Allergy Advice</h1>


        </section>
        </section>

        <section className=" flex gap-4  items-center">
        <section className=" flex gap-4  items-center">
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>


        </section>

        <section className="Contact_us_btn  flex justify-center items-center ">Contact Us</section>
        </section>
      </section>
    </section>
  );
}

export default Navbar;
