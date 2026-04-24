"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoLight from "../assets/logo.jpg";
import logoDark from "../assets/dark.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
      }
    };
    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const getLinkClass = (path) => {
    return pathname === path
      ? "font-bold underline dark:text-white text-2xl"
      : "text-gray-800 hover:text-white dark:text-white text-2xl";
  };

  return (
    <nav className="bg-lightBackground shadow-2xl dark:bg-darkBackground">
      <div className="container mx-auto flex justify-between items-center p-4">

        {/* Logo + title */}
        <div className="flex flex-col md:flex-row md:items-center">
          <Link href="/">
            <Image
              src={isDarkMode ? logoDark : logoLight}
              alt="Bagpipe Lessons"
              className="h-24 md:h-48 w-auto"
              priority
            />
          </Link>
          <h1 className="text-xl md:text-3xl dark:text-white">
            Celtic Coast Music
          </h1>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-4">
          <Link className={getLinkClass("/")} href="/">Home</Link>
          <Link className={getLinkClass("/about")} href="/about">About</Link>
          <Link className={getLinkClass("/lessons")} href="/lessons">Lessons</Link>
          <Link className={getLinkClass("/hire")} href="/hire">Hire for Events</Link>
          <Link className={getLinkClass("/contact")} href="/contact">Contact</Link>
          {/* <a
            href="https://booking.celticcoastmusic.ca"
            className="bg-accentColor text-white text-xl px-4 py-2 rounded hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Book a Lesson
          </a>*/}
        </div> 

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-800 hover:text-white focus:outline-none dark:text-white"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-lightBackground dark:bg-darkBackground`}>
        <div className="flex flex-col items-start p-4 space-y-2">
          <Link className={getLinkClass("/")} href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className={getLinkClass("/about")} href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link className={getLinkClass("/lessons")} href="/lessons" onClick={() => setIsOpen(false)}>Lessons</Link>
          <Link className={getLinkClass("/hire")} href="/hire" onClick={() => setIsOpen(false)}>Hire for Events</Link>
          <Link className={getLinkClass("/contact")} href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          {/* <a
            href="https://booking.celticcoastmusic.ca"
            className="bg-accentColor text-white text-xl px-4 py-2 rounded hover:opacity-90 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            Book a Lesson
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
