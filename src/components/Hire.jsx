"use client";

import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import celtic from "../assets/celtic2.webp";
import band from "../assets/band.jpg";

const Hire = () => {
  return (
    <div className="bg-medBackground dark:bg-medDarkBackground min-h-screen">
      <Fade cascade damping={0.1} triggerOnce>
        <h1 className="text-4xl text-center mt-8 mb-8 text-gray-800 dark:text-primaryText">
          Services Offered
        </h1>
      </Fade>
      <div className="flex justify-center items-center">
        <hr className="w-3/4 border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor mt-12 mb-12"></hr>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center pb-20">
        <div className="w-3/4 md:w-2/3 lg:w-1/2 text-xl text-gray-800 dark:text-secondaryText">
          <Fade cascade damping={0.1} triggerOnce>
            <h2 className="text-4xl text-center mb-4">Solo Performances</h2>
            <p>
              Aaron is available for solo performances at various events,
              including weddings, funerals, corporate events, and private
              parties. With a wide repertoire and a deep passion for bagpiping,
              Aaron will add a unique and memorable touch to your event.
            </p>
          </Fade>
          <Fade cascade damping={0.1} triggerOnce>
            <h2 className="text-4xl text-center mb-4 mt-6">
              Bands and Ensembles
            </h2>
            <p className="mb-2">
              Aaron is a versatile musician with connections to various bands
              and ensembles. Whether you're looking for a traditional Celtic
              band or something with a modern twist, we have you covered:
            </p>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li className="mb-2">
                <strong>The Grinning Barretts:</strong> A high-energy Celtic
                punk band that brings a modern edge to traditional Celtic music.
                Perfect for festivals, pubs, and lively events.
              </li>
              <li className="mb-2">
                <strong>Pipe and Drum Bands:</strong> Aaron currently plays with
                the Mid Island Competition Pipe and Drum Band, and although they
                do not play events outside of competition, Aaron can help you
                find a band who does. If you're looking for a traditional pipe
                and drum band ideal for parades, ceremonies, or cultural
                celebrations, Aaron has multiple connections throughout
                Vancouver Island.
              </li>
              <li className="mb-2">
                <strong>Collaborative Ensembles:</strong> We can arrange
                performances with other talented musicians, including fiddlers,
                guitarists, and more, to create a customized celtic musical
                experience for your event.
              </li>
            </ul>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-8 mb-8 border-gray-800 dark:border-borderColor"></hr>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={band}
                alt="a pipe and drum band walking down a pathway"
                className="w-full md:w-3/4 border-2 border-linkBackground rounded-lg"
              />
              <p className="text-gray-800 dark:text-accentColor">
                Mid Island Competition Pipe Band
              </p>
            </div>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-8 mb-8 border-gray-800 dark:border-borderColor"></hr>
            </div>
          </Fade>
          <Fade cascade damping={0.1} triggerOnce>
            <h2 className="text-4xl text-center mb-4">Bagpipe Lessons</h2>
            <p className="mb-2">
              In addition to performances, Aaron offers bagpipe lessons. These
              sessions can be tailored to meet the needs of beginners or
              advanced players:
            </p>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li className="mb-2">
                <strong>Private, in-person Lessons:</strong> One-on-one
                instruction focusing on technique, repertoire, and performance
                skills.
              </li>
            </ul>
            <div className="flex justify-center items-center mb-16">
              <p className="text-xl font-semibold italic">
                For more information about Bagpipe Lessons, please see the{" "}
                <Link
                  href="/lessons"
                  className="text-blue-700 dark:text-accentColor underline hover:font-bold"
                >
                  Lessons
                </Link>{" "}
                page
              </p>
            </div>
          </Fade>
          <Fade cascade damping={0.1} triggerOnce>
            <h2 className="text-4xl text-center mb-4">
              Special Projects and Collaborations
            </h2>
            <p>
              Aaron is always open to special projects and collaborations.
              Whether you need a bagpiper for a recording session, a unique
              musical project, or a special event, we can work together to
              create something extraordinary.
            </p>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-8 mb-8 border-gray-800 dark:border-borderColor"></hr>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={celtic}
                className="w-2/3 md:w-1/3 rounded-lg border-2 border-linkBackground"
                alt="Aaron standing in a grassy field of a highland games competition playing the bagpipes"
              />
            </div>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-8 mb-8 border-gray-800 dark:border-borderColor mt-12 mb-12"></hr>
            </div>
            <p className="text-center mt-8 font-bold">
              Interested in any of our services or want to learn more?{" "}
              <Link
                href="/contact"
                className="text-blue-700 dark:text-accentColor underline hover:font-bold"
              >
                Contact
              </Link>{" "}
              Aaron today to discuss your needs and how we can help make your
              event unforgettable!
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hire;
