import React, { useState } from "react";

import { addDoc, collection } from "firebase/firestore";

import { db } from "../firebase";

import { IoMdStar } from "react-icons/io";

const Review = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);

  const resetAllStates = () => {
    setfName("");
    setlName("");
    setEmail("");
    setContent("");
    setRating(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = `${fName} ${lName}`;

    if (rating === 0) {
      return alert("Please choose a rating.");
    }

    try {
      await addDoc(collection(db, "reviews"), {
        rating,
        name,
        email,
        content,
      });

      resetAllStates();

      alert("Review submitted successfully!");
    } catch (e) {
      alert(e.message);
      console.error("Błąd przy dodawaniu dokumentu: ", e);
    }
  };

  return (
    <section className="flex flex-col gap-20 justify-center text-center my-20">
      <div className="flex flex-col gap-5 h-max md:w-[80%] m-auto">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Post a new review about Ecofy
        </h1>
        <p className="text-lg text-gray-500 m-auto">
          Share your thoughts and help others make informed decisions.
        </p>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex-1 bg-gray-100 rounded-3xl p-5 flex w-max m-auto flex-col gap-5"
      >
        <div className="flex flex-row gap-5">
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
            Review Content
          </label>
          <textarea
            type="message"
            id="message"
            placeholder="Review Content"
            className="rounded-xl w-full py-3 px-5 h-full"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`cursor-pointer text-3xl transition-colors duration-200 ${
                star <= rating ? "text-yellow-300" : "text-gray-200"
              }`}
            >
              <IoMdStar size={30} />
            </span>
          ))}
        </div>
        <label className="flex flex-row items-center gap-2 container-label">
          <input type="checkbox" name="terms" required />
          <span class="checkmark"></span>
          <label className="text-gray-500">
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
          Send Review
        </button>
      </form>
    </section>
  );
};

export default Review;
