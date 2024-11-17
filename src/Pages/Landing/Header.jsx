import React from "react";

import Phone2 from "../../Assets/phone-2.png";
import PhoneTwo from "../../Assets/phone-two.png";

const Landing = () => {
  return (
    <header className="flex flex-col gap-20 justify-center text-center my-20">
      <div className="flex flex-col gap-5 h-max md:w-[80%] m-auto">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Save Your Environment and Explore ecology map
        </h1>
        <p className="text-lg text-gray-500 m-auto">
          Ecofy is a powerful and sustainable platform that helps you achieve
          your goals. It empowers you to make eco-friendly choices while
          maximizing efficiency and results.
        </p>
        <a href="/" className="btn dark m-auto">
          Get Started with Ecofy Beta
        </a>
      </div>
      <div className="flex flex-col gap-[20vw] sm:gap-[35vw] items-center justify-between sm:my-20 my-0 md:flex-row md:gap-0">
        <div className="relative md:w-1/2 w-full h-80">
          <img
            src={PhoneTwo}
            className="absolute z-20 top-1/2 left-1/2 h-[70vw] md:h-[40vw] object-cover transform -translate-x-1/2 -translate-y-1/2"
            alt="Phone"
          />
          <div className="absolute top-1/2 left-1/2 md:w-[70%] w-[60%] h-[45vw] md:h-[25vw] bg-green-200 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl"></div>
        </div>

        <div className="relative w-full md:w-7/12 h-80">
          <img
            src={Phone2}
            className="absolute z-10 top-1/2 left-1/2 h-[77vw] md:h-[47vw] object-cover transform -translate-x-1/2 -translate-y-1/2"
            alt="Phone"
          />
          <div className="absolute top-1/2 left-1/2 md:w-[70%] w-[60%] h-[45vw] md:h-[25vw] bg-violet-200 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl"></div>
        </div>
      </div>
    </header>
  );
};

export default Landing;
