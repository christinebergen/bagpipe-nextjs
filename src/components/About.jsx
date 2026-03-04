"use client";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import image1 from "../assets/piper18mh.jpg";
import Discography from "./Discography";

const About = () => {
  return (
    <div className="bg-medBackground dark:bg-medDarkBackground min-h-screen">
      <Fade cascade damping={0.1} triggerOnce>
        <h1 className="text-4xl text-center mt-8 mb-8 text-gray-800 dark:text-primaryText">
          About Aaron
        </h1>
      </Fade>
      <div className="flex justify-center items-center">
        <hr className="w-3/4 md:w-3/4 border-2 mt-4 mb-4 border-gray-800 dark:border-borderColor mt-12 mb-12"></hr>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-3/4 flex lg:flex-row flex-col justify-center items-start">
          <div className="w-full md:w-2/3 text-xl text-gray-800 dark:text-secondaryText">
            <Fade cascade damping={0.1} triggerOnce>
              <div className="float-right w-full md:w-1/3 mb-4">
                <Image
                  src={image1}
                  className="rounded-lg border-2 border-linkBackground md:ml-4"
                  alt="Aaron dressed in a formal bagpiping outfit holding the great highland bagpipes"
                />
                <div className="text-center text-lg text-gray-800 dark:text-secondaryText mt-2">
                  <p>
                    Photo by:{" "}
                    <a
                      href="https://meaghanharveyphotography.com/nanaimo-wedding-photographer/"
                      className="text-blue-700 dark:text-accentColor underline hover:font-bold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Meaghan Harvey Photography
                    </a>
                  </p>
                </div>
              </div>
              <p>
                With over 30 years of experience, Aaron is an invaluable
                resource in the Vancouver Island bagpiping scene. He has
                recently competed provincially as a solo bagpiper at the grade 2
                level and has been the bagpiper for the Celtic Punk band{" "}
                <a
                  href="https://www.thegrinningbarretts.com/"
                  className="text-blue-700 dark:text-accentColor underline hover:font-bold"
                >
                  The Grinning Barretts
                </a>{" "}
                for almost 9 years. After the 2025 competition season with CLASP
                (Competition League For Amateur Solo Pipers) based out of
                Scotland, he was promoted to compete in Grade 1 (a pretty
                amazing achievement!!) for the 2026 competition season. If
                you're looking for a versatile bagpiper, Aaron is your guy! His
                passion for bagpiping has also led him to play the Irish
                whistle, where he has become a sought-after performer. Together
                with his wife, he hosts a weekly Traditional Irish Music Session
                in their hometown of Nanaimo, BC.
              </p>
            </Fade>
            <br />
            <Fade cascade damping={0.1} triggerOnce>
              <p>
                After taking a few years off from competing, Aaron competed
                again in 2025 in the Pacific Northwest Competition Circuit
                securing a 4th place finish overall in the Grade 2 solo
                Bagpiping category. In addition to this, he won the Aggregate
                award for Grade 2 Solo Piping at the BC Pipers' Association
                Annual Gathering, as well as Aggregate at both the Kamloops BC
                and Campbell River BC Highland Games. Reconnecting with the
                competition scene has reignited his enthusiasm, and he looks
                forward to continuing next year.
              </p>
            </Fade>
            <br />
            <Fade cascade damping={0.1} triggerOnce>
              <p>
                In addition to solo competitions, Aaron has competed with pipe
                and drum bands, performed at numerous special occasions
                (including his own wedding), and even played his bagpipes at the
                Ring of Brodgar in the Orkney Islands. As a teenager, he
                traveled to Scotland with his long time bagpipe instructor, Bill
                Grant, and competed in solo competition. He cherishes his early
                years with Legion Branch 53 Duncan Pipes and Drums, where he
                enjoyed listening to the war veterans' stories.
              </p>
            </Fade>
            <br />
            <Fade cascade damping={0.1} triggerOnce>
              <p>
                Aaron's polished playing and remarkable technical mastery can be
                attributed to his instructors Carol Fowler, Bill Grant, Angus G.
                MacLeod, and James Barrie, many of whom were trained by
                legendary bagpipers in Scotland.
              </p>
            </Fade>
            <br />
            <Fade cascade damping={0.1} triggerOnce>
              <p>
                Aaron has recently rekindled his passion for teaching bagpipes,
                a role he first embraced as a teenager with the Legion Pipe
                band. He finds great joy in instructing and watching his
                students grow and evolve.
              </p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-12">
        <hr className="w-3/4 border-2 mt-4 mb-8 border-gray-600 dark:border-borderColor"></hr>
      </div>
      <Discography />
    </div>
  );
};

export default About;
