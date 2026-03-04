"use client";

import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import image1 from "../assets/piper2mc.jpg";
import skye from "../assets/skye.png";
import piper1 from "../assets/piper21.jpg";
import atholl from "../assets/atholl.png";

const Lessons = () => {
  return (
    <div className="bg-medBackground dark:bg-medDarkBackground min-h-screen">
      <Fade cascade damping={0.1} triggerOnce>
        <h1 className="text-4xl text-center mt-8 mb-8 text-gray-800 dark:text-primaryText">
          Bagpipe Lessons with Piper Aaron
        </h1>
      </Fade>
      <div className="flex justify-center items-center">
        <hr className="w-3/4 border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor mt-12 mb-12"></hr>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 md:w-2/3 lg:w-1/2 text-xl text-gray-800 dark:text-secondaryText">
          <Fade cascade damping={0.1} triggerOnce>
            <h2 className="text-4xl text-center mb-4">Beginner Lessons</h2>
            <p className="mb-2">
              Are you new to the world of bagpipes? Our beginner lessons will
              introduce you to the fundamentals, including:
            </p>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li className="mb-2">
                <strong>Starting with the Chanter:</strong> All bagpipers start
                by learning on a practice chanter. Once they are comfortable
                with the basics of playing a chanter, will move up to a full set
                of bagpipes with drones.
              </li>
              <li className="mb-2">
                <strong>Basic Music Theory:</strong> Understanding the musical
                notes and rhythms used in bagpiping.
              </li>
              <li className="mb-2">
                <strong>Instrument Familiarization:</strong> Learning about the
                parts of the bagpipe and how they work together.
              </li>
              <li className="mb-2">
                <strong>Basic Techniques:</strong> Mastering the essential
                finger movements and blowing techniques.
              </li>
              <li>
                <strong>Simple Tunes:</strong> Playing your first few tunes to
                build confidence and enjoyment.
              </li>
            </ul>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor mt-12 mb-12"></hr>
            </div>
          </Fade>
          <Fade cascade damping={0.1} triggerOnce>
            <div className="flex items-center justify-center">
              <Image
                src={skye}
                className="w-full md:w-3/4 rounded-lg border-2 border-linkBackground"
                alt="the bagpipe sheet music for The Skye Boat Song"
              />
            </div>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor mt-12 mb-12"></hr>
            </div>
            <h2 className="text-4xl text-center mb-4">Intermediate Lessons</h2>
            <p className="mb-2">
              For those with some experience, our intermediate lessons focus on
              improving your skills and expanding your repertoire:
            </p>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li className="mb-2">
                <strong>Advanced Fingering Techniques:</strong> Enhancing your
                dexterity and speed.
              </li>
              <li className="mb-2">
                <strong>Complex Tunes:</strong> Learning more intricate melodies
                and expanding your musical range.
              </li>
              <li className="mb-2">
                <strong>Maintenance and Tuning:</strong> Understanding how to
                maintain your bagpipe and keep it in tune for optimal
                performance.
              </li>
              <li>
                <strong>Performance Skills:</strong> Tips and techniques for
                playing confidently in front of an audience.
              </li>
            </ul>
          </Fade>
          <Fade cascade damping={0.1} triggerOnce>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor mt-12 mb-12"></hr>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={atholl}
                className="w-full md:w-3/4 rounded-lg border-2 border-linkBackground"
                alt="Aaron standing in a grassy field of a highland games competition playing the bagpipes"
              />
            </div>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor mt-12 mb-12"></hr>
            </div>
            <h2 className="text-4xl text-center mb-4">Advanced Lessons</h2>
            <p className="mb-2">
              Experienced pipers can take their playing to the next level with
              our advanced lessons:
            </p>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li className="mb-2">
                <strong>Composition and Arrangement:</strong> Creating your own
                tunes and arrangements.
              </li>
              <li className="mb-2">
                <strong>Competitive Piping:</strong> Preparing for competitions
                with advanced strategies and performance critiques.
              </li>
              <li>
                <strong>Collaborative Music:</strong> Playing with other
                musicians, including participation in a Celtic punk band.
              </li>
            </ul>
          </Fade>
          <Fade cascade damping={0.1} triggerOnce>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor mt-12 mb-12"></hr>
            </div>
            <h2 className="text-4xl text-center mb-4">
              Competition Preparation:
            </h2>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li className="mb-2">
                <strong>Learn the ropes of the Highland Games:</strong> From
                etiquette to proper dress, Aaron can help you prepare to put on
                the best show possible.
              </li>
              <li className="mb-2">
                <strong>Competition Levels:</strong> From chanter players up to
                professionals, all levels of players are invited to compete at
                Highland Games Events. There are multiple opportunities to
                compete each year in the Pacific North West.
              </li>
              <li className="mb-2">
                <strong>Further Improvement:</strong> This is a great way to
                find the motivation to further your skills and have a goal to
                work towards. Competition can be a fulfilling yet challenging
                experience that can push your limits and take your playing to a
                level you never thought possible.
              </li>
            </ul>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor"></hr>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={piper1}
                className="w-2/3 md:w-1/3 rounded-lg border-2 border-linkBackground"
                alt="Aaron standing in a grassy field of a highland games competition playing the bagpipes"
              />
            </div>
            <div className="flex justify-center items-center">
              <hr className="w-3/4 md:w-full border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor mt-12 mb-12"></hr>
            </div>
          </Fade>
          <Fade cascade damping={0.1} triggerOnce>
            <h2 className="text-4xl text-center mb-4">
              Why Choose Piper Aaron?
            </h2>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li className="mb-2">
                <strong>Personalized Instruction:</strong> Lessons are
                customized to fit your learning style and pace.
              </li>
              <li className="mb-2">
                <strong>Experienced Teacher:</strong> Aaron has years of
                experience both teaching and performing.
              </li>
              <li className="mb-2">
                <strong>Flexible Scheduling:</strong> Convenient lesson times to
                fit your busy schedule.
              </li>
              <li className="mb-2">
                <strong>Supportive Environment:</strong> A positive and
                encouraging atmosphere to foster your growth as a musician.
              </li>
            </ul>
            <p className="text-center text-2xl font-bold pt-8">
              Ready to start your bagpipe journey or take your skills to new
              heights?{" "}
              <Link
                href="/contact"
                className="text-blue-700 dark:text-accentColor underline hover:font-bold hover:italic"
              >
                Contact
              </Link>{" "}
              Aaron today to schedule your first lesson!
            </p>
          </Fade>
        </div>
        <Fade cascade damping={0.1} triggerOnce>
          <div className="w-full flex justify-center mt-20 mb-20">
            <div className="w-2/3 md:w-1/3">
              <Image
                src={image1}
                alt="Aaron playing the bagpipes"
                className="w-full border-2 border-linkBackground rounded-lg"
              />
              <p className="text-center text-gray-800 dark:text-accentColor text-lg font-bold">
                Photo By: Matt Carter
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Lessons;
