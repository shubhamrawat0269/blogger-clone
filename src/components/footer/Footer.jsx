import React from "react";
import { Logo } from "../index";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import {
  LinkedInIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../assets/svgs/SocialMediaIcon";

function Footer() {
  const { mode } = useGlobalContext();
  return (
    <footer
      className="body-font"
      style={{ background: mode === "dark" ? "rgb(30, 41, 59)" : "#FF5733" }}
    >
      {/* Left Content  */}
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        {/* Blog Logo  */}
        <Logo />

        {/* items  */}
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Created By Shubham Rawat
        </p>

        {/* Right item  */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {/* Icon 1  */}
          <a className="ml-3 text-white">
            <TwitterIcon />
          </a>

          {/* Icon 2  */}
          <a className="ml-3 text-white">
            <InstagramIcon />
          </a>

          {/* Icon 3  */}
          <a className="ml-3 text-white">
            <LinkedInIcon />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
