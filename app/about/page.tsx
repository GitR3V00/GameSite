import React from "react";
import BannerImg from "../../public/About/Banner.png";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="mt-32 px-4">
      <div className="border-b max-w-screen-xl mx-auto mb-10">
        <h1 className="text-black font-bold text-4xl">About Us...</h1>
      </div>

      <div className="max-w-3xl mx-auto text-black space-y-4">
        <div>
          <Image src={BannerImg} alt=""></Image>
        </div>

        <p>
          <strong>Welcome to Game Central!</strong> Founded in 2025, Game
          Central is a one-person passion project turned business, created by a
          dedicated individual with a deep love for gaming and a growing
          knowledge of web development and coding languages.
        </p>

        <p>
          At Game Central, our mission is to bring the joy of gaming to everyone
          — whether you're into the latest AAA titles or nostalgic for the
          classics. We offer a wide variety of video games across multiple
          platforms, with a primary focus on modern systems.
        </p>

        <p>
          But that’s not all — we also stock an exciting range of consoles, from
          cutting-edge next-gen systems to timeless retro machines, so there’s
          truly something here for every type of gamer.
        </p>

        <p>
          This website was built from the ground up with care and attention, not
          just as an online store, but as a reflection of the passion behind it.
          Whether you're a seasoned player or just getting started, Game Central
          is your go-to hub for all things gaming.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
