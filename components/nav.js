import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  QuestionMarkCircleIcon,
  MenuAlt3Icon,
  XIcon,
} from "@heroicons/react/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import ClickAwayListener from "react-click-away-listener";
import GithubLineSVG from "../assets/github.svg";
import LinkedInSVG from "../assets/linkedin.svg";
import GithubSVG from "../assets/github-l.svg";
export function Nav() {
  const [s, setS] = useState(false);
  const toggle = () => {
    setS((prev) => !prev);
  };
  const hideMenu = useMediaQuery({
    query: "(min-width:640px)",
  });

  useEffect(() => {
    if (hideMenu) {
      setS(false);
    }
  }, [hideMenu]);

  return (
    <ClickAwayListener onClickAway={() => setS(false)}>
      <nav className=" h-16 flex items-center md-plus:pt-5   z-50 relative ">
        <div className=" flex flex-row items-center justify-between w-full md:max-w-7xl md:mx-auto pl-3 pr-3 pb-3">
          <div className="flex items-center">
            <GithubLineSVG width={20} height={20} stroke="white" />
            <span className="text-xl text-white ml-3 font-bold">
              <Link href="/">GitHub Jobs</Link>
            </span>
          </div>

          <div
            onClick={toggle}
            className=" sm:hidden border-2   hover:shadow-md  transition bg-gray-50 p-2 cursor-pointer rounded"
          >
            <MenuAlt3Icon className="h-5 w-5 hover:text-purple-600 sm:hidden text-indigo-900" />
          </div>

          <div className="space-x-3  font-medium hidden sm:flex text-indigo-900 ">
            <Link href="/about">
              <p className="  text-white">About</p>
            </Link>

            <a
              className="   text-white  "
              href="https://www.linkedin.com/in/ahmedkhattak/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className=" text-white"
              href="https://github.com/AhmedKhattak"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
        <AnimatePresence>
          {s && (
            <motion.div
              animate={{ opacity: 1, height: "auto" }}
              initial={{ opacity: 0, height: 200 }}
              exit={{ opacity: 0, height: 200 }}
              transition={{
                duration: hideMenu ? 0 : 0.2,
                easings: "linear",
              }}
              className="absolute space-y-2  flex top-[-5px] left-0  right-0 -mr-2 -ml-2  border-purple-200 border-2 pt-[9px]    pb-1 shadow-xl bg-white rounded-md    flex-col"
            >
              <div className="flex flex-row items-center  justify-between w-full  pl-[18px] pr-[18px]">
                <div className="flex items-center">
                  <GithubLineSVG width={20} height={20} />
                  {/* <Image width={20} height={20} src="/images/github.svg" /> */}
                  <span className="text-xl text-indigo-900 ml-3 font-bold">
                    <Link href="/">GitHub Jobs</Link>
                  </span>
                </div>

                <div
                  onClick={toggle}
                  className=" hover:border-indigo-900 transition border-2 p-2 cursor-pointer rounded"
                >
                  <XIcon className="h-5 w-5 sm:hidden text-indigo-900" />
                </div>
              </div>
              <div className="flex flex-col p-3">
                <div className=" no-underline font-medium cursor-pointer items-center flex space-x-3 transition   text-purple-900 pl-3 pt-3 pb-3 hover:bg-purple-200 rounded">
                  <div className="bg-purple-600 p-1 flex items-center justify-center rounded-md">
                    <QuestionMarkCircleIcon className="h-6 w-6 text-white " />
                  </div>

                  <Link href="/about">About</Link>
                </div>

                <div className=" no-underline font-medium cursor-pointer items-center flex space-x-3  transition   text-purple-900 pl-3 pt-3 pb-3 hover:bg-purple-200  rounded">
                  <div className="bg-purple-600 p-2 flex items-center justify-center rounded-md">
                    <LinkedInSVG width={16} height={16} />
                  </div>

                  <a
                    href="https://www.linkedin.com/in/ahmedkhattak/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>

                <div className=" no-underline font-medium cursor-pointer items-center flex space-x-3  transition   text-purple-900 pl-3 pt-3 pb-3 hover:bg-purple-200  rounded">
                  <div className="bg-purple-600 p-2 flex items-center justify-center rounded-md">
                    <GithubSVG width={16} height={16} />
                  </div>
                  <a href="https://github.com/AhmedKhattak" target="_blank">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </ClickAwayListener>
  );
}
