import React, { useState } from "react";

import { AiOutlineDiscord, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribed to the newsletter with email: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-violet-200 rounded-3xl flex flex-col xl:flex-row items-start p-10 xl:p-20 xl:gap-20 gap-10">
      <div className="flex flex-col gap-5 items-start justify-center text-start flex-1 w-full">
        <h1 className="text-6xl sm:text-9xl font-bold">Ecofy</h1>
        <p className="text-lg text-gray-500 max-w-72">
          Stay updated with the latest events, tips, and eco news.
        </p>
        <div className="flex flex-col xl:flex-row gap-5 w-full">
          <input
            type="email"
            value={email}
            placeholder="Email"
            className="rounded-full xl:w-80 w-full py-3 xl:py-0 px-5"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={(e) => handleSubmit(e)} className="btn dark">
            Subscribe
          </button>
        </div>
        <p>© 2024 Ecofy, Inc. All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-5 items-start text-start flex-1 w-full rounded-3xl">
        <div className="flex flex-col gap-5">
          <h2 className="sm:text-9xl text-6xl font-bold">Socials</h2>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="https://discord.gg/Jm4jq7qykA"
              target="_blank"
              className="btn light flex flex-row gap-3 items-center text-xl w-max"
            >
              <AiOutlineDiscord size={32} />
              Discord
            </a>
            <a
              href="/"
              target="_blank"
              className="btn light flex flex-row gap-3 items-center text-xl w-max"
            >
              <AiFillGithub size={32} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
