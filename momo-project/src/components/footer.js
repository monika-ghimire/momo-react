import React from "react";
import Logo from "../images/Logo.png";

const Footer = () => {
    const menuItems = [
        { title: "Momo", links: ["Home", "About Us", "Our Menu", "Our Service", "Contact Us"] },
        { title: "Legals", links: ["Terms & Conditions", "Privacy Policy", "Support"] }
    ];

    return (
        <footer className="bg-[#F7F9FC] mt-[5rem]">
            <section className="w-4/5 mx-auto py-20 border-b">
                <div className="grid grid-cols-2 items-start">
                    {/* Left Section */}
                    <div>
                        <img src={Logo} alt="Logo" className="pb-4" />
                        <p className="w-2/3">
                            Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas molestie. 
                            Volutpat quis egestas porttitor turpis sit in. Lorem nunc nullam morbi urna amet suspendisse nullam ac vivamus.
                        </p>
                    </div>

                  
                    <div className="grid grid-cols-3 gap-6">
                        {menuItems.map((menu, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <h2 className="!text-[25px] text-[#0C6967] font-bold pb-4">{menu.title}</h2>
                                {menu.links.map((link, idx) => (
                                    <a key={idx} href="#" className="hover:underline">{link}</a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <p className="text-center py-12">Copyright © 2023 Everest Momo Pvt Ltd. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
