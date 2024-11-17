import React from "react";
import Update from "./Updates/Update";

const updates = [
    {
      title: "v1.0.0",
      date: "March 15, 2023",
      status: "New Release",
      author: "John Doe",
      content:
        "Introducing Ecofy, a powerful and sustainable platform that helps you achieve your goals. It empowers you to make eco-friendly choices while maximizing efficiency and results."
    },
    {
      title: "v1.1.0",
      date: "April 1, 2023",
      status: "Feature Update",
      author: "Jane Smith",
      content:
        "Ecofy has been updated with new features, improvements, and bug fixes. Check out the release notes for more details."
    },
]

const Updates = () => {
  return (
    <section className="flex flex-col gap-20 justify-center text-center my-20">
      <div className="flex flex-col gap-5 h-max md:w-[80%] m-auto">
        <h1 className="text-4xl sm:text-6xl font-bold">Application Updates</h1>
        <p className="text-lg text-gray-500 m-auto">
          Stay informed with the latest features, improvements, and news from
          Ecofy.
        </p>
        <a href="/" className="btn dark m-auto">
          View All Updates On GitHub
        </a>
      </div>
      <div className="flex flex-col gap-5">
        {updates.map((update, index) => (
            <Update key={index} update={update} />
        ))}
      </div>
    </section>
  );
};

export default Updates;
