import React, { useState } from "react";
import HeaderForOthers from "./HeaderForOthers";
import MapComponent from "./MapComponent";
import Panel from "./Panel";
import sendMailTo from "./Server";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMailTo("New Contact Query", formData);
    alert("Your contact query has been sent!");
    setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
  };

  return (
    <div className="w-full min-h-screen">
      <HeaderForOthers />
      <div>
        <Panel src="./gal2.jpg" content="Contact Us" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 p-6">
          {/* Map Section */}
          <div className="h-[350px] md:h-[400px] lg:h-[auto] rounded-sm overflow-hidden shadow-2xl">
            <MapComponent />
          </div>

          {/* Contact Form Section */}
          <div className="bg-[#2973B2] text-white p-6 md:p-8 rounded-lg shadow-custom flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <form className="space-y-4 text-black" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                spellCheck="false"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                onChange={handleChange}
                value={formData.name}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                spellCheck="false"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                spellCheck="false"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                onChange={handleChange}
                value={formData.phone}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                spellCheck="false"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                onChange={handleChange}
                value={formData.message}
                required
              ></textarea>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-500 transition-all text-white px-6 py-3 rounded-lg font-semibold shadow-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
