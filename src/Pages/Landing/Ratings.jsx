import React from "react";

const Ratings = () => {
  return (
    <section className="flex flex-col gap-20 justify-center text-center my-20">
      <div className="flex flex-col gap-5 h-max md:w-[80%] m-auto">
        <h1 className="text-6xl font-bold">What our users say about us</h1>
        <p className="text-lg text-gray-500 m-auto">
          We do not have any review yet :(
        </p>
        <a href="/" className="btn dark m-auto">
          Post New Review about Ecofy
        </a>
      </div>
    </section>
  );
};

export default Ratings;
