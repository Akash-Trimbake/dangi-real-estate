import React, { useState } from "react";

const HomeContact = () => {
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
      <h1 className="font-bold text-center py-4">Contact Us</h1>
      <div className="flex flex-row justify-center items-center gap-4 px-8">
        <div className="w-1/2 px-8 py-2 flex flex-col justify-center items-center">
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

      <div className="bg-gray-50 text-center py-8">
        <h2 className="font-semibold">Build your own dreams</h2>
        <p className="text-lg mt-1">
          Or someone else will hire you to build theirs.
        </p>
        <p className="text-lg mt-1">
          Here is how you can take action – starting{" "}
        </p>
        <p className="text-lg mt-1">today.</p>
      </div>
    </div>
  );
};

export default HomeContact;
