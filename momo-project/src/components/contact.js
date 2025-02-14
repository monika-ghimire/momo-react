import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section>
         <section className="flex flex-col justify-center items-center py-14">
        <h6 >Get <h6 className="higlight-text">In Touch</h6></h6>
        <h1 className="!text-[25px] font-bold text-[#0C6967]">Our Friendly team would love to hear from you</h1>
      </section>
    <div className="flex flex-col md:flex-row border p-6 rounded-xl shadow-xl w-[50%] mx-auto">

      <div className="flex flex-col gap-2 bg-teal-800 text-white p-6 rounded-lg w-full md:w-2/3">
        <h3 className="!text-lg font-semibold my-1">Our Address</h3>
        <p className="!text-lg">New Baneshwor, Kathmandu, Bagmati, Nepal</p>

        <h3 className="mt-4 !text-lg font-semibold my-1">Our Contacts</h3>
        <p className="!text-lg">Mobile: 980 5689789, 9841 275897</p>
        <p className="!text-lg">Landline: 01-4783972</p>

        <h3 className="mt-4 !text-lg font-semibold my-1">Our Service Time</h3>
        <p className="!text-lg font-bold">MON - FRI: 10 am - 8 pm</p>
        <p className="!text-lg">SAT - SUN: Closed</p>

        <h3 className="mt-4 !text-lg font-semibold">Get in touch in social networks</h3>
        <div className="flex space-x-4 mt-2">
          <span>📘</span>
          <span>📸</span>
          <span>🎵</span>
        </div>
      </div>

      <form className="w-full flex flex-col gap-4  p-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" name="firstName" placeholder="First Name" className="border p-2 rounded w-full" onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" className="border p-2 rounded w-full" onChange={handleChange} />
        </div>
        <input type="email" name="email" placeholder="Email" className="border p-2 rounded w-full mt-4" onChange={handleChange} />

        <select name="service" className="border p-2 rounded w-full mt-4" onChange={handleChange}>
          <option value="">What can we do for you</option>
          <option value="support">Support</option>
          <option value="inquiry">General Inquiry</option>
        </select>

        <input type="text" name="phone" placeholder="Phone Number" className="border p-2 rounded w-full mt-4" onChange={handleChange} />
        
        <textarea name="message" placeholder="Message" className="border p-2 rounded w-full mt-4" rows="4" onChange={handleChange}></textarea>
        
        <button type="submit" className="send-mgs-btn mt-4">Send Message</button>
      </form>
    </div>
    </section>
  );
};

export default ContactForm;
