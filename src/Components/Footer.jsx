import React, { useState } from "react";

import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

import { AiOutlineDiscord, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const [email, setEmail] = useState("");

  const resetAllStates = () => {
    setEmail("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const q = query(
        collection(db, "subscriptions"),
        where("email", "==", email)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        resetAllStates();
        alert("You have already submitted!");
        return;
      }

      await addDoc(collection(db, "subscriptions"), {
        email,
      });

      resetAllStates();
      alert("Subscription submitted successfully!");
    } catch (e) {
      alert(e.message);
      console.error("Błąd: ", e);
    }
  };

  return (
    <footer className="bg-violet-200 rounded-3xl flex flex-col xl:flex-row items-start p-10 xl:p-20 xl:gap-20 gap-10">
      <div className="flex flex-col gap-5 items-start justify-center text-start flex-1 w-full">
        <h1 className="text-6xl sm:text-9xl font-bold">Ecofy</h1>
        <p className="text-lg text-gray-500 max-w-72">
          Stay updated with the latest events, tips, and eco news.
        </p>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col xl:flex-row gap-5 w-full"
        >
          <input
            type="email"
            value={email}
            placeholder="Email"
            className="rounded-full xl:w-80 w-full py-3 xl:py-0 px-5"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn dark">
            Subscribe
          </button>
        </form>
        <div className="flex flex-col sm:flex-row gap-1">
          <p>© 2024 Ecofy, Inc. All rights reserved.</p>{" "}
          <a href="/privacy-policy" className="underline w-max">
            privacy policy
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-start text-start flex-1 w-full rounded-3xl">
        <div className="flex flex-col gap-5">
          <h2 className="sm:text-9xl text-6xl font-bold">Socials</h2>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="https://discord.gg/Jm4jq7qykA"
              target="_blank"
              className="btn light flex flex-row gap-3 items-center w-max"
            >
              <AiOutlineDiscord size={24} />
              Discord
            </a>
            <a
              href="/"
              target="_blank"
              className="btn light flex flex-row gap-3 items-center w-max"
            >
              <AiFillGithub size={24} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
