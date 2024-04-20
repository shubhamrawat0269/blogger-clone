import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShareAlt, AiOutlineSearch } from "react-icons/ai";

import { Navbar, IconButton, Avatar, Collapse } from "@material-tailwind/react";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { NavList } from "./NavList";
import {
  DarkModeIcon,
  LightModeIcon,
  MenuIcon,
  CrossIcon,
} from "../../assets/svgs/ToggleThemeBtn";
import { Logo } from "../index";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const { mode, toggleMode } = useGlobalContext();

  return (
    <>
      {/* Navbar  */}
      <Navbar
        className="sticky inset-0 z-20 h-max max-w-full border-none rounded-none py-2 px-4 lg:px-8 lg:py-2"
        style={{ background: mode === "dark" ? "#2A2828" : "#FF5733" }}
      >
        {/* Desktop View Of Navbar  */}
        <div className="flex items-center justify-between text-blue-gray-900">
          {/* Home Page Link  */}
          <Logo />

          {/* All Items  */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <NavList />
            </div>

            <div>
              <AiOutlineSearch size={20} color="white" />
            </div>
            <div className="hidden lg:block">
              <AiOutlineShareAlt size={20} color="white" />
            </div>

            {/* Admin Profile Pic */}
            <div>
              <Link to={"/dashboard"}>
                <div className="">
                  <Avatar
                    key={1}
                    src={"images/profile.png"}
                    alt="avatar"
                    withBorder={true}
                    className="p-0.5 text-red-500 w-10 h-10"
                    style={{
                      border:
                        mode === "dark"
                          ? "2px solid rgb(226, 232, 240)"
                          : "2px solid rgb(30, 41, 59)",
                    }}
                  />
                </div>
              </Link>
            </div>

            {/* dark And Light Button */}
            <div>
              {mode === "light" ? (
                <>
                  {/* Light Button  */}
                  <IconButton
                    onClick={toggleMode}
                    className=" lg:inline-block rounded-full"
                    style={{
                      background: mode === "light" ? "#ced6e0" : "#57606f",
                      color: mode === "dark" ? "white" : "black",
                    }}
                  >
                    <LightModeIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  {/* Dark Button  */}
                  <IconButton
                    onClick={toggleMode}
                    className=" lg:inline-block rounded-full"
                    style={{
                      background: mode === "light" ? "#ced6e0" : "#57606f",
                    }}
                  >
                    <DarkModeIcon />
                  </IconButton>
                </>
              )}
            </div>

            {/* Mobile Toggle  */}
            <div>
              <IconButton
                className="ml-auto h-10 w-10 text-inherit rounded-lg lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
                style={{
                  background: mode === "light" ? "#ced6e0" : "#57606f",
                  color: mode === "dark" ? "white" : "black",
                }}
              >
                {openNav ? <MenuIcon /> : <CrossIcon />}
              </IconButton>
            </div>
          </div>
        </div>

        {/* Mobile View of Navbar */}
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </>
  );
}
