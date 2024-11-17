import React from "react";

import Leaf from "../../Assets/leaf.png";

const Hero = () => {
  return (
    <section className="bg-yellow-200 rounded-3xl my-20">
      <div className="flex flex-col gap-5 items-center justify-center text-center my-20 w-[85%] m-auto">
        <img src={Leaf} alt="Ecofy" className="w-20 sm:w-32" />
        <h1 className="text-4xl sm:text-6xl font-bold">
          Join the Movement for a Greener Future Today!
        </h1>
        <p className="text-lg text-gray-500">
          Ecofy connects you with local eco-initiatives, empowering you to make
          a real impact in your community. Whether it’s a cleanup, a tree
          planting, or an educational workshop, Ecofy makes it easy to discover
          and participate in sustainable activities.
        </p>
        <a href="/" className="btn dark m-auto">
          Get Started with Ecofy Beta
        </a>
      </div>
    </section>
  );
};

export default Hero;
