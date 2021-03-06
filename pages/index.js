import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Nav } from "../components/nav";
import { Heading } from "../components/heading";
import { SearchBox } from "../components/searchBox";
import { JobCard } from "../components/JobCard";
import { Pagination } from "../components/pagination";
import { Details } from "../components/details";
import { useMediaQuery } from "react-responsive";
import HeroBgSVG from "../assets/bg.svg";
import { Footer } from "../components/Footer";

export default function Home() {
  const [state, setState] = useState(false);
  const toggleLayout = useMediaQuery({
    query: "(min-width:810px)",
  });
  const ref = useRef();
  const handleClose = () => {
    setState(false);
  };

  useEffect(() => {
    ref.current = document.getElementsByTagName("body")[0];
  }, []);

  useEffect(() => {
    console.log(ref.current);
    if (state && !toggleLayout) {
      ref.current.style.overflow = "hidden";
    } else {
      ref.current.style.overflow = "auto";
    }
  }, [state, toggleLayout]);

  const handleOpen = () => {
    setState(true);
  };
  return (
    <main>
      <div
        style={
          {
            // background: "url('/images/bg.svg')",
            // backgroundSize: "cover",
            // backgroundPosition: "0 0,20px 20px",
          }
        }
        className="rounded p-4  relative  md-plus:p-8 md-plus:pt-0 "
      >
        <div
          // style={{
          //   backgroundImage: "url(/images/bg.svg)",
          //   backgroundSize: "cover",
          // }}
          className="absolute top-0 left-0 right-0 bottom-0"
        >
          {/* <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="/images/bg.svg"
          /> */}
          <HeroBgSVG width="100%" height="100%" />
        </div>
        <div
          style={{
            zIndex: 0,
            backgroundImage:
              "linear-gradient(0deg, rgba(255,255,255,0.00) 0%, rgba(69,29,184,0.54) 100%)",
          }}
          className="absolute top-0 left-0 right-0 bottom-0 h-full"
        ></div>
        <div className="relative">
          <Nav />
          <Heading />
          <SearchBox />
        </div>
      </div>

      <section className="w-full md:max-w-7xl md:mx-auto mt-36 p-4  pt-0">
        <div className="flex mt-16">
          <div className="w-full  md-plus:w-5/12   md-plus:mr-4 self-start">
            <div className="text text-gray-500 mb-4 font-medium">
              Showing 1 - 50 of 288 jobs
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v, i) => (
              <JobCard handleOpen={handleOpen} key={i} index={i} />
            ))}
            <Pagination />
          </div>
          {/* <div className="sticky top-2  w-7/12 hidden md-plus:block   text-white self-start"> */}
          <Details show={state} handleClose={handleClose} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
