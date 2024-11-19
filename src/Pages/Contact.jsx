import React, { useState } from "react";

import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { AiOutlineDiscord, AiFillGithub } from "react-icons/ai";

const Contact = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="flex flex-col gap-20 justify-center text-center my-20">
      <div className="flex flex-col gap-5 h-max md:w-[80%] m-auto">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Let's Chat, React Out to Us
        </h1>
        <p className="text-lg text-gray-500 m-auto">
          Have questions or feedback? We're here to help. Send us a message, and
          we'll respond within 24 hours
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex-1 bg-gray-100 rounded-3xl p-5 flex flex-col gap-5"
        >
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex flex-col items-start flex-1 gap-1">
              <label htmlFor="fname" className="font-bold">
                First Name
              </label>
              <input
                type="text"
                id="fname"
                placeholder="First Name"
                className="rounded-xl w-full py-3 px-5"
                required
                value={fName}
                onChange={(e) => setfName(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-start flex-1 gap-1">
              <label htmlFor="lname" className="font-bold">
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                placeholder="Last Name"
                className="rounded-xl w-full py-3 px-5"
                required
                value={lName}
                onChange={(e) => setlName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="email" className="font-bold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="rounded-xl w-full py-3 px-5"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start gap-1 h-full">
            <label htmlFor="email" className="font-bold">
              Message
            </label>
            <textarea
              type="message"
              id="message"
              placeholder="Message"
              className="rounded-xl w-full py-3 px-5 h-full"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <label className="flex flex-row items-center gap-2 container-label">
            <input type="checkbox" name="terms" required />
            <span class="checkmark"></span>
            <label className="text-gray-500 text-start">
              I agree to our friendly{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                className="underline text-black"
              >
                privacy policy
              </a>
            </label>
          </label>
          <button type="submit" className="btn dark">
            Send Message
          </button>
        </form>

        <div className="flex flex-col gap-5 flex-1">
          <div className="bg-blue-200 rounded-3xl h-5"></div>
          <div className="bg-gray-100 rounded-3xl flex-1 flex flex-col gap-5 p-5">
            <div className="bg-white rounded-3xl flex flex-row gap-5 items-center p-5">
              <div className="bg-blue-200 w-max p-3 rounded-full">
                <IoMailOutline className="w-7 h-7" />
              </div>
              <div className="flex flex-col text-start">
                <h1 className="text-xl font-bold">Email</h1>
                <p className="text-md text-gray-500">support@ecofy.site</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl flex flex-row gap-5 items-center p-5">
              <div className="bg-blue-200 w-max p-3 rounded-full">
                <FiPhone className="w-7 h-7" />
              </div>
              <div className="flex flex-col text-start">
                <h1 className="text-xl font-bold">Phone</h1>
                <p className="text-md text-gray-500">(+48) 123 456 789</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl flex flex-row gap-5 items-center p-5">
              <div className="bg-blue-200 w-max p-3 rounded-full">
                <AiOutlineDiscord className="w-7 h-7" />
              </div>
              <div className="flex flex-col text-start">
                <h1 className="text-xl font-bold">Discord</h1>
                <p className="text-md text-gray-500">fendziorr</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl flex flex-row gap-5 items-center p-5">
              <div className="bg-blue-200 w-max p-3 rounded-full">
                <AiFillGithub className="w-7 h-7" />
              </div>
              <div className="flex flex-col text-start">
                <h1 className="text-xl font-bold">GitHub</h1>
                <p className="text-md text-gray-500">xfendi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
