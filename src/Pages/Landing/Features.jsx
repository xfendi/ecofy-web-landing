import React from "react";

import { TbMapPin2 } from "react-icons/tb";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";

const Features = () => {
  return (
    <section id="features" className="flex flex-col gap-20 justify-center text-center my-20">
      <div className="flex flex-col gap-5 h-max md:w-[80%] m-auto">
        <h1 className="text-6xl font-bold">
          Meet our most popular features save environment
        </h1>
        <p className="text-lg text-gray-500 m-auto">
          Ecofy is an innovative platform dedicated to supporting and spreading
          ecological initiatives.
        </p>
      </div>

      <div className="flex sm:flex-row flex-col gap-5">
        <div className="flex-1 text-start flex flex-col gap-5 border rounded-3xl p-5">
          <div className="bg-blue-200 w-max p-5 rounded-3xl">
            <TbMapPin2 size={35} />
          </div>
          <h1 className="text-xl font-bold">Discover local eco-initiatives</h1>
          <p className="text-lg text-gray-500">
            the ability to browse events such as park cleanups, tree planting,
            and educational workshops happening in your area.
          </p>
        </div>

        <div className="flex-1 text-start flex flex-col gap-5 border rounded-3xl p-5">
          <div className="bg-yellow-200 w-max p-5 rounded-3xl">
            <IoMdAddCircleOutline size={35} />
          </div>
          <h1 className="text-xl font-bold">Create your own events</h1>
          <p className="text-lg text-gray-500">
            an option to organize and promote your own eco-friendly events that
            other users in your community can join.
          </p>
        </div>

        <div className="flex-1 text-start flex flex-col gap-5 border rounded-3xl p-5">
          <div className="bg-red-200 w-max p-5 rounded-3xl">
            <IoChatbubblesOutline size={35} />
          </div>
          <h1 className="text-xl font-bold">Community of eco-enthusiasts</h1>
          <p className="text-lg text-gray-500">
            a feature that connects you with like-minded individuals, allowing
            you to collaborate and contribute to sustainable development
            together.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-20 justify-center">
        <div className="flex sm:flex-row flex-col gap-10 h-[450px]">
          <div className="bg-green-200 flex-1 rounded-3xl"></div>
          <div className="flex-1 text-start flex flex-col gap-5 sm:my-10">
            <h1 className="text-5xl font-bold">
              Participation in Eco-Friendly Challenges and Community Tasks
            </h1>
            <p className="text-lg text-gray-500">
              Users can take part in various eco-challenges like "Plastic-Free
              Day" or "Zero Waste Week" to promote sustainability. These
              challenges allow users to track their progress and earn rewards,
              such as badges or points, for their contributions.
            </p>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col gap-10 h-[450px]">
          <div className="flex-1 text-start flex flex-col gap-5 sm:my-10">
            <h1 className="text-5xl font-bold">
              Comprehensive Education and Resource Hub on Environmental
              Protection
            </h1>
            <p className="text-lg text-gray-500">
              A dedicated section offering articles, videos, and guides on
              topics like sustainability, climate change, and reducing carbon
              footprints. It provides practical tips to help users adopt
              eco-friendly habits in their daily lives.
            </p>
          </div>
          <div className="bg-blue-200 flex-1 rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
