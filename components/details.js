import {
  XIcon,
  ArrowLeftIcon,
  BriefcaseIcon,
  CollectionIcon,
  CursorClickIcon,
} from "@heroicons/react/solid";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const y = `<p>Go to this link to apply: <a href=\"https://jobs.lever.co/yubico/d8221edf-5889-43d5-bf9c-ea1d97ff4991\">https://jobs.lever.co/yubico/d8221edf-5889-43d5-bf9c-ea1d97ff4991</a></p>\n`;
const x = `<p><strong>DevOps Engineer</strong></p>\n<p><strong>COMPANY</strong>\nWaveSense is radically accelerating the arrival of self-driving vehicles by tackling some of the most challenging problems that stand in the way of safe and reliable navigation.\nEvery road in the world has a unique subsurface signature. WaveSense uses radar to create a map of those subsurface signatures from which self-driving cars can navigate. Vehicles using WaveSense are unaffected by common but challenging road conditions like snow, heavy rain, fog, or poor lane markings.\nWaveSense is working with leading autonomous vehicle and traditional automotive companies, is backed by leading investors, is growing quickly, and is building a talented team that wants to transform the future of mobility and work on some of the hardest and most important engineering problems around. If that sounds like you, please drop us a line.</p>\n<p><strong>ROLE</strong>\nAs a DevOps Engineer, you will work with the team to design and implement WaveSense's efforts around key local, vehicular, and cloud based infrastructure.  </p>\n<p><strong>WHO YOU ARE + WHAT YOU'LL DO</strong></p>\n<ul>\n<li>Design, test and implement cloud based continuous integration and deployment pipelines using Bitbucket and Jenkins.</li>\n<li>Design and develop deployment automation and validation tools across the entire software stack.</li>\n<li>Design and develop a software release, test, and deployment strategy.</li>\n<li>Manage the build system.</li>\n<li>Perform security, performance and availability assessments</li>\n<li>Optimize system performance, availability and scalability</li>\n<li>Troubleshoot source code management and deployment issues</li>\n<li>Create and maintain documentation on configuration, troubleshooting, design etc.</li>\n<li>Perform security audits and assist with hardening servers and systems against attacks</li>\n<li>Support internal trouble tickets</li>\n<li>Formulate daily procedures to ensure data and systems backup</li>\n<li>Maintain accounts for AWS, Google Workspaces.</li>\n<li>Maintain license server.</li>\n<li>Provide basic IT support for onboarding new employees including provisioning PC’s.</li>\n</ul>\n<p><strong>REQUIREMENTS</strong></p>\n<ul>\n<li>5 plus years working in DevOps (plus experience in software development and network management).</li>\n<li>Strong system administration (Unix/Linux/Windows).</li>\n<li>Strong working knowledge and experience with Git and Jenkins.</li>\n<li>Experience with build systems (cmake, make).</li>\n<li>Familiarity with agile development process and best practices.</li>\n<li>Programming and scripting experience in Python, C++#, PowerShell, Bash.</li>\n<li>Experience with containers (Docker).</li>\n<li>Knowledge of database, operating system and network security.</li>\n<li>Extensive knowledge and experience with CI/CD technologies and tools (Jenkins).</li>\n<li>Experience provisioning and managing AWS cloud resources (Terraform or similar).</li>\n<li>Previous experience with server configuration and maintenance.</li>\n<li>Bachelor's or Master’s degree or higher in Information Systems, Computer Science, Engineering, or equivalent job-related experience.</li>\n<li>Talented, passionate, and able to effectively work with the team to design, build, and execute core capabilities.</li>\n</ul>\n<p><strong>NICE TO HAVE</strong></p>\n<ul>\n<li>Experience with integrating embedded systems / IoT type environments into CI/CD models.</li>\n<li>Cloud engineering and architecture experience.</li>\n</ul>\n<p><strong>WORK</strong>\nMust be currently eligible to work in the US.  Please indicate if you need or will eventually need sponsorship on your application. \nApply for this job via <a href=\"https://ltpx.nl/ESYBjWo\"><strong>the application form</strong></a>.</p>\n<p><em>Agency calls are not appreciated.</em><img src=\"https://camo.githubusercontent.com/2da2e352d0288668476d85e61afe48b4332e9b1c/68747470733a2f2f742e6c7470782e6e6c2f747261636b2e7068703f6f7264657269643d323530393339\"></p>`;

export function Details({ show = false, handleClose }) {
  const toggleLayout = useMediaQuery({
    query: "(min-width:810px)",
  });

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {!show && toggleLayout && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: toggleLayout ? 0 : 0.18,
              easings: "easeOut",
            }}
            style={{ height: "95vh" }}
            className="sticky top-5 mt-10 w-7/12 self-start z-[1]  "
          >
            <div className="flex items-center h-16 rounded border-gray-300 border-[1px] bg-gray-50 p-2 ">
              <ArrowLeftIcon className="h-5 w-5 mr-4" />
              <span className="text-lg font-medium">
                Select a job to view its details
              </span>
            </div>
          </motion.div>
        )}
        {show && (
          <motion.div
            key="details"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{
              duration: toggleLayout ? 0 : 0.22,
              easings: "easeInOut",
            }}
            className={`${
              toggleLayout
                ? "sticky top-5 mt-10    w-7/12  md-plus:block   text-white self-start"
                : "fixed  left-0   top-0 right-0 z-[999]    md-plus:block   text-white self-start"
            }`}
          >
            <div
              className={`absolute  h-32 ${
                toggleLayout && "rounded-t-md"
              }     p-5 top-0 pt-6 border-l-2 border-r-2 border-t-2 border-b-2 border-black    bg-gray-900 left-0 right-0  z-50  items-center flex`}
            >
              <div
                onClick={handleClose}
                className="absolute top-4 right-4 cursor-pointer"
              >
                <XIcon className="h-6 w-6" />
              </div>

              <div className=" flex-shrink-0">
                <Image
                  objectFit="contain"
                  className="bg-white rounded border "
                  width={65}
                  height={65}
                  src="/vercel.svg"
                />
              </div>

              <div className="ml-4  mr-12 w-full truncate ">
                <p className="text text-white font-semibold truncate">
                  WaveSense
                </p>

                <a
                  className="underline text-white text-opacity-80 truncate "
                  href="https://wavesense.recruitee.com"
                >
                  https://wavesense.recruitee.com
                </a>

                <p className="text-white mt-1 truncate ">Islamabad , PK</p>
              </div>
            </div>
            <div
              style={{ height: toggleLayout ? "90vh" : "100vh" }}
              className={`overflow-scroll ${
                toggleLayout && "rounded-t-md "
              } rounded-t-md rounded-b-md border-l-2 border-r-2 border-b-2 border-gray-600  bg-white shadow-md prose max-w-none p-5 w-full`}
            >
              <ReactMarkdown
                className=" pt-28 text-gray-900"
                allowDangerousHtml
              >
                {y}
              </ReactMarkdown>

              <ReactMarkdown allowDangerousHtml>{x}</ReactMarkdown>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
