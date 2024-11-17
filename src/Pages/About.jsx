import React from "react";

const About = () => {
  return (
    <section className="flex flex-col gap-20 my-20">
      <div className="flex flex-col gap-20 text-start justify-center m-auto">
        <h1 className="text-3xl md:text-6xl font-semibold text-gray-400">
          <span className="text-black">
            At Ecofy, we aim to make eco-awareness easy and accessible.
          </span>{" "}
          <span className="text-green-500">
            We believe change starts locally, and everyone can play a part in
            protecting the planet.
          </span>{" "}
          <span className="text-yellow-500">
            Our platform connects users with local eco-initiatives and offers
            resources to inspire action.
          </span>
          <br />
          <br />
          Ecofy was created to make environmental action community-focused and
          inclusive. We wanted to help people eager to contribute but unsure
          where to start. Now, Ecofy is a space where both beginners and
          eco-enthusiasts can share ideas and collaborate on projects.
          <br />
          <br />
          Discover local events such as park cleanups, tree plantings, and
          workshops. Take part in challenges and track your impact while
          connecting with others who care about sustainability. Start your own
          eco-initiatives and inspire community action.
          <br />
          <br />
          Our interactive map helps you view and join local eco-events. The
          education hub offers articles, videos, and guides on sustainable
          living. Participate in community challenges like “Plastic-Free Day”
          and earn rewards. Stay updated with notifications about new events and
          content.
          <br />
          <br />
          Be part of Ecofy’s supportive community. Connect, learn, and make a
          difference. Whether new or experienced, there’s a place for you.
        </h1>

        <a href="/" className="btn dark w-max">
          Start your eco journey with us today!
        </a>
      </div>
    </section>
  );
};

export default About;
