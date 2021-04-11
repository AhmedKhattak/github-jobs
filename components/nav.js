import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { QuestionMarkCircleIcon, MenuAlt3Icon } from "@heroicons/react/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import ClickAwayListener from "react-click-away-listener";

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
      <nav className=" h-16 flex items-center  inset-x-0 z-50 relative ">
        <div className=" flex flex-row items-center justify-between w-full md:max-w-7xl md:mx-auto  p-3">
          <div className="flex items-center">
            <Image width={20} height={20} src="/images/github.svg" />
            <span className="text-xl text-indigo-900 ml-3 font-bold">
              <Link href="/">GitHub Jobs</Link>
            </span>
          </div>

          <div
            onClick={toggle}
            className=" hover:border-indigo-900 transition border-2 p-2 cursor-pointer rounded"
          >
            <MenuAlt3Icon className="h-5 w-5 sm:hidden text-indigo-900" />
          </div>

          <div className="space-x-4 text-indigo-900 font-medium hidden sm:flex ">
            <Link href="/about">
              <p className="hover:underline rounded  text-indigo">About</p>
            </Link>

            <a
              className="hover:underline text-indigo"
              href="https://www.linkedin.com/in/ahmedkhattak/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="hover:underline text-indigo"
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
              animate={{ opacity: 1, y: 84 + 30 }}
              initial={{ opacity: 0, y: 84 }}
              exit={{ opacity: 0, y: 84 }}
              transition={{
                duration: hideMenu ? 0 : 0.18,
                easings: "easeInOut",
              }}
              className="absolute left-0 flex border-purple-200 border-2 right-0 w-full p-3 shadow-xl bg-white rounded-md    flex-col"
            >
              <p className=" text-indigo p-2 font-medium cursor-pointer hover:bg-purple-200 rounded">
                <Link href="/about">About</Link>
              </p>

              <a
                className=" no-underline font-medium    text-indigo p-2 hover:bg-purple-200 rounded"
                href="https://www.linkedin.com/in/ahmedkhattak/"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className=" no-underline font-medium  text-indigo p-2 hover:bg-purple-200 rounded"
                href="https://github.com/AhmedKhattak"
                target="_blank"
              >
                GitHub
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </ClickAwayListener>
  );
}
