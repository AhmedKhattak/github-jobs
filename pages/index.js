import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Nav } from "../components/nav";
import { Heading } from "../components/heading";
import { SearchBox } from "../components/searchBox";
import { JobCard } from "../components/JobCard";
import { Pagination } from "../components/pagination";
import { Details } from "../components/details";

export default function Home() {
  const [state, setState] = useState(false);
  const handleClose = () => {
    setState(false);
  };

  const handleOpen = () => {
    setState(true);
  };
  return (
    <div className="mb-14">
      <div
        style={{
          backgroundImage:
            "radial-gradient(#444cf7 1px, transparent 1px), radial-gradient(#444cf7 1px, #e5e5f7 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0,20px 20px",
        }}
        className="rounded p-8  pt-0 "
      >
        <Nav />
        <Heading />
        <SearchBox />
      </div>

      <div className="w-full md:max-w-7xl md:mx-auto mt-36 p-7 pt-0">
        <div className="flex mt-16">
          <div className="w-full  md-plus:w-5/12   mr-4 self-start">
            <div className="text text-gray-500 mb-4 font-medium">
              Showing 1 - 50 of 288 jobs
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2, 3, 4, 5, 6, 7, 8].map(
              (v, i) => (
                <JobCard handleOpen={handleOpen} key={i} />
              )
            )}
            <Pagination />
          </div>
          {/* <div className="sticky top-2  w-7/12 hidden md-plus:block   text-white self-start"> */}
          <Details show={state} handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
}
