"use client";

import Image from "next/image";
import Link from "next/link";
import Slideshow from "./Slideshow";
import image1 from "../assets/piper18mh.jpg";
import celtic1 from "../assets/celtic1.webp";
import email from "../assets/email.png";
import skye from "../assets/skye.png";
import darkemail from "../assets/emaildark.png";

const Home = () => {
  return (
    <div className="container mx-auto p-4 mb-8">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-lightBackground dark:bg-darkBackground shadow-md dark:shadow-lg rounded-md p-10 md:m-20 mb-8">
          <h2
            className="text-2xl md:text-4xl text-center mb-4 text-gray-800 dark:text-white"
            id="footer"
          >
            Celtic Sounds of Nanaimo: Musician for Hire & Expert Instruction
          </h2>
          <div className="flex justify-center items-center">
            <hr className="w-3/4 border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor"></hr>
          </div>
          <p className="text-center text-md md:text-xl text-gray-800 dark:text-white">
            Whether you're seeking a small Celtic musical ensemble, a Pipes and
            Drums band, a Celtic punk band, a piper to add a special touch to
            your event, or want to learn the bagpipes yourself, Piper Aaron
            Bergen is your go-to expert.
          </p>
        </div>
      </div>
      <Slideshow />

      <div className="flex flex-col md:flex-row mt-10 mr-2 ml-2 md:m-20 gap-8">
        <Link
          href="/about"
          className="border-2 md:w-1/2 rounded-md shadow-lg p-4
    flex flex-col items-center text-center
    border-linkBackground dark:border-borderColor
    bg-lightBackground dark:bg-darkBackground
    transition
    hover:shadow-xl
    hover:ring-2 ring-linkBackground dark:ring-borderColor
    ring-offset-2 ring-offset-lightBackground dark:ring-offset-darkBackground"
        >
          <Image
            src={image1}
            alt="Aaron dressed up in formal attire - black vest and jacket with a kilt and sporran. He's holding bagpipes"
            className="w-2/3 md:w-1/4 h-auto border-2 border-linkBackground rounded-lg"
          />
          <h1 className="text-4xl text-center mt-8 text-gray-800 dark:text-primaryText">
            About Aaron
          </h1>
          <p className="text-center text-sm md:text-xl text-gray-800 dark:text-white mt-4">
            Discover Aaron's journey and learn how his passion, experience, and
            dedication have shaped his path. Click here to explore his story
          </p>
        </Link>

        <Link
          href="/hire"
          className="border-2 md:w-1/2 rounded-md shadow-lg p-4
    flex flex-col items-center text-center
    border-linkBackground dark:border-borderColor
    bg-lightBackground dark:bg-darkBackground
    transition
    hover:shadow-xl
    hover:ring-2 ring-linkBackground dark:ring-borderColor
    ring-offset-2 ring-offset-lightBackground dark:ring-offset-darkBackground"
        >
          <Image
            src={celtic1}
            alt="a colourful celtic design with different tartans around the outside and a treble clef and music notes in the middle"
            className="w-2/3 md:w-1/3 h-auto rounded-lg"
          />
          <h1 className="text-4xl text-center mt-8 text-gray-800 dark:text-primaryText">
            Hire Aaron
          </h1>
          <p className="text-center text-md md:text-xl text-gray-800 dark:text-white mt-4">
            Aaron is a versatile musician. Whether you're looking for a piper to
            pipe you in at a special event, an energetic celtic punk band, or a
            pipes and drums ensemble, Aaron has the connections to make this
            happen. Click here to learn more.
          </p>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row m-2 md:m-20 gap-8">
        <Link
          href="/lessons"
          className="border-2 md:w-1/2 rounded-md shadow-lg p-4
    flex flex-col items-center text-center
    border-linkBackground dark:border-borderColor
    bg-lightBackground dark:bg-darkBackground
    transition
    hover:shadow-xl
    hover:ring-2 ring-linkBackground dark:ring-borderColor
    ring-offset-2 ring-offset-lightBackground dark:ring-offset-darkBackground"
        >
          <Image
            src={skye}
            alt="bagpipe sheet music for the skye boat song"
            className="w-2/3 md:w-1/3 h-auto mt-4 border-2 border-linkBackground rounded-lg"
          />
          <h1 className="text-4xl text-center mt-8 text-gray-800 dark:text-primaryText">
            Bagpipe Lessons
          </h1>
          <p className="text-center text-md md:text-xl text-gray-800 dark:text-white mt-4">
            Whether you've always wanted to learn to play the pipes or you want
            to see if the pipes are a good fit for you, Aaron's convenient and
            flexible bagpipe lessons can help you get started. He can also help
            you prepare for the exciting world of competition if you'd like to
            compete.
          </p>
        </Link>
        <Link
          href="/contact"
          className="border-2 md:w-1/2 rounded-md shadow-lg p-4
    flex flex-col items-center text-center
    border-linkBackground dark:border-borderColor
    bg-lightBackground dark:bg-darkBackground
    transition
    hover:shadow-xl
    hover:ring-2 ring-linkBackground dark:ring-borderColor
    ring-offset-2 ring-offset-lightBackground dark:ring-offset-darkBackground"
        >
          <Image src={email} alt="a white envelope" className="w-1/4 h-auto dark:hidden" />
          <Image src={darkemail} alt="a black envelope" className="w-1/4 h-auto hidden dark:block" />
          <h1 className="text-4xl text-center mt-8 text-gray-800 dark:text-primaryText">
            Contact Aaron
          </h1>
          <p className="text-center text-md md:text-xl text-gray-800 dark:text-white mt-4">
            Have questions? Want to book your first bagpipe lesson? Click here
            to send him a message and get in touch.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
