import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;

    // Build the mailto URL with pre-filled subject and body
    const mailtoURL = `mailto:onlyforsave1@gmail.com?subject=Contact Form Submission&body=First Name: ${firstName}%0D%0ALast Name: ${lastName}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    // Open the default email client with the pre-filled data
    window.location.href = mailtoURL;
  };

  return (
    <div className="bg-[#ebeadf] h-auto">
      <div className="flex flex-row justify-between items-center gap-4 px-8">
        <div className="w-1/2 p-16">
          <h1 className="font-semibold">Contact us</h1>
          <h4 className="my-4 font-semibold">
            Buy, Sale & Rent or how to Join us!
          </h4>

          <div className="my-8 flex flex-col gap-8">
            <span>
              <h3 className="font-bold">Email</h3>
              <p className="font-semibold">info@dangirealtyinternational.com</p>
            </span>
            <span>
              <h3 className="font-bold">Phone</h3>
              <p className="font-semibold">617-642-6799</p>
            </span>
            <span>
              <h3 className="font-bold">Address</h3>
              <p className="font-semibold">
                2 Doonan Street Medford, MA 02155, USA
              </p>
            </span>
          </div>
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-center items-center">
          <div className="b w-full p-8 rounded ">
            <form className="" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block font-semibold text-lg mb-1"
                >
                  First Name<i className="text-sm text-red-500">*</i>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Your Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block font-semibold text-lg mb-1"
                >
                  Last Name<i className="text-sm text-red-500">*</i>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Your Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-semibold text-lg mb-1"
                >
                  Email<i className="text-sm text-red-500">*</i>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block font-semibold text-lg mb-1"
                >
                  Message<i className="text-sm text-red-500">*</i>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="p-8 flex justify-center items-center">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47368.39682225005!2d-72.489385!3d42.09623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6e85bbff9963d%3A0x6d9bfaa4776cca5e!2sLambert%20Clinic!5e0!3m2!1sen!2sus!4v1704183298025!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: "0" }}
          className="w-3/4 h-96 rounded-lg"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
