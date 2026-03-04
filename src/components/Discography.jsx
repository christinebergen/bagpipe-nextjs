"use client";

import Image from "next/image";
import riot from "../assets/riot.webp";
import sauce from "../assets/PiperSauce.png";
import paddy from "../assets/padraig.webp";
import bottle from "../assets/tgb.webp";
import tgblogo from "../assets/tgblogo.png";
import turntable from "../assets/turntable.png";

const Discography = () => {
  const albums = [
    {
      title: "Bottle Hymns",
      releaseDate: "2023-06-28",
      cover: bottle,
      description:
        "The Grinning Barrett's first full-length album: 7 original songs, and 4 re-imagined traditional numbers, all with the Barretts signature mashup of bagpipes, banjo, and fiddle laid over a bedrock of blistering punk. Available for purchase in 2 funky colours of vinyl.",
      link: "https://www.thegrinningbarretts.com/shop/",
      listen: (
        <iframe
          className="rounded-lg block"
          src="https://open.spotify.com/embed/album/6VNFafqLyXonGr6coBmLP9?utm_source=generator"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="The Grinning barretts first full-length album"
        ></iframe>
      ),
    },
    {
      title: "Hope Like Hell - EP",
      releaseDate: "2022-03-17",
      cover: sauce,
      description:
        "The title track, Hope Like Hell, was written during the early days of the Covid-19 pandemic. A reality we were all living with, and as the song says: I hope like hell this finds you well, I miss you more than you know. This album is currently only available for purchase as a digital download.",
      link: "https://thegrinningbarretts.bandcamp.com/album/h-l-h",
      listen: (
        <iframe
          className="rounded-lg block"
          src="https://open.spotify.com/embed/album/1mBimcsiRY1FErWR1vujME?utm_source=generator"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Hope Like Hell - EP"
        ></iframe>
      ),
    },
    {
      title: "The Riot - EP",
      releaseDate: "2018-08-18",
      cover: riot,
      description:
        "The 2nd EP from Van Isle Celt-Punk upstarts The Grinning Barretts. Dedicated to the good people at Riot Brewing Co. in Chemainus BC. We love you guys.",
      link: "https://www.thegrinningbarretts.com/shop/",
      listen: (
        <iframe
          className="rounded-lg block"
          src="https://open.spotify.com/embed/album/6HcqtRNN3jEnKx3JyGWNZO?utm_source=generator"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="The Riot EP"
        ></iframe>
      ),
    },
    {
      title: "The St. Padraig's - EP",
      releaseDate: "2018-03-17",
      cover: paddy,
      description:
        "The first EP from The Grinning Barretts! Named after the patron saint of Celtic Punk, St. Padraig. It is only fitting that it was released on St Padraig's Day 2018!",
      link: "https://www.thegrinningbarretts.com/shop/",
      listen: (
        <iframe
          className="rounded-lg block"
          src="https://open.spotify.com/embed/album/0eddK42psM1hBweBIP1C2F?utm_source=generator"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="St. Padraig's EP"
        ></iframe>
      ),
    },
  ];

  return (
    <section
      id="discography"
      className="py-8 bg-medBackground dark:bg-medDarkBackground"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mt-6 mb-6 text-center text-gray-800 dark:text-primaryText">
          Aaron's Discography with:
        </h2>
        <div className="flex justify-center items-center">
          <Image
            src={tgblogo}
            className="w-2/3 md:w-1/3"
            alt="The Grinning Barretts Logo"
          />
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 w-full md:w-2/3 md:p-20">
            {albums.map((album, index) => (
              <div
                className="border-2 rounded-md shadow-lg p-4 flex flex-col items-center text-center border-linkBackground dark:border-borderColor bg-medBackground dark:bg-darkBackground"
                key={index}
              >
                <h3 className="text-3xl font-semibold text-gray-800 dark:text-primaryText">
                  {album.title}
                </h3>
                <p className="text-md md:text-lg text-gray-800 dark:text-secondaryText">
                  Released: {album.releaseDate}
                </p>
                <p className="mb-2 mt-6 text-lg md:text-xl text-gray-800 dark:text-secondaryText">
                  {album.description}
                </p>
                <hr className="w-3/4 border-2 mt-4 mb-8 border-gray-600 dark:border-borderColor"></hr>
                <div className="w-full">{album.listen}</div>
                <hr className="w-3/4 border-2 mt-4 mb-8 border-gray-600 dark:border-borderColor mt-8"></hr>
                <div className="flex flex-col justify-center items-center mb-10 bg-linkBackground dark:bg-borderColor rounded-md">
                  <div className="w-auto">
                    <Image src={turntable} alt="a turntable" className="w-20" />
                  </div>
                  <div>
                    <a
                      href={album.link}
                      className="text-md md:text-lg text-blue-800 dark:text-accentColor font-bold hover:underline p-4"
                    >
                      Purchase the Album Here!
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discography;
