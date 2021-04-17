import React from "react";
import LinkedInSVG from "../assets/linkedin.svg";
import GithubSVG from "../assets/github-l.svg";

export function Footer() {
  return (
    <footer className="bg-gray-900   p-8 ">
      <div className="md:max-w-7xl md:mx-auto space-y-5 ">
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/ahmedkhattak/" target="_blank">
            <LinkedInSVG width={20} height={20} />
          </a>

          <a href="https://github.com/AhmedKhattak">
            <GithubSVG width={20} height={20} />
          </a>
        </div>
        <p className="text-gray-50">Made with ❤️ &nbsp;in Islamabad</p>
        <div className="flex items-center">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=AhmedKhattak&repo=covid-19-dashboard-react&type=star&count=true"
            frameBorder="0"
            scrolling="0"
            width="80"
            height="20"
            title="GitHub"
          ></iframe>

          <iframe
            style={{ marginLeft: "15px" }}
            src="https://ghbtns.com/github-btn.html?user=AhmedKhattak&repo=covid-19-dashboard-react&type=watch&count=true&v=2"
            frameBorder="0"
            scrolling="0"
            width="120"
            height="20"
            title="GitHub"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
