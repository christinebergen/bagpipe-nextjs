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
    const darkModeEnabled = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (darkModeEnabled) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const getLinkClass = (path) => {
    return pathname === path
      ? "font-bold underline dark:text-white"
      : "text-gray-800 hover:text-white dark:text-white";
  };

  return (
    <nav className="bg-lightBackground shadow-2xl dark:bg-darkBackground">
      <div className="container mx-auto flex justify-between items-center p-4">
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
        <div className="hidden md:flex md:text-2xl space-x-4">
          <Link className={getLinkClass("/")} href="/">Home</Link>
          <Link className={getLinkClass("/about")} href="/about">About</Link>
          <Link className={getLinkClass("/lessons")} href="/lessons">Lessons</Link>
          <Link className={getLinkClass("/hire")} href="/hire">Hire for Events</Link>
          <Link className={getLinkClass("/contact")} href="/contact">Contact</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-800 hover:text-white focus:outline-none dark:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-lightBackground dark:bg-darkBackground`}>
        <div className="flex flex-col items-start p-4 space-y-2">
          <Link className={getLinkClass("/")} href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className={getLinkClass("/about")} href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link className={getLinkClass("/lessons")} href="/lessons" onClick={() => setIsOpen(false)}>Lessons</Link>
          <Link className={getLinkClass("/hire")} href="/hire" onClick={() => setIsOpen(false)}>Hire for Events</Link>
          <Link className={getLinkClass("/contact")} href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
