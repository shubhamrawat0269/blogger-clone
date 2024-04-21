import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../hooks/useGlobalContext";

const Logo = () => {
  const { mode } = useGlobalContext();
  return (
    <Link to={"/"}>
      <Typography
        as="a"
        className="mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center"
        style={{ color: mode === "dark" ? "white" : "white" }}
      >
        {/* Logo Image Here  */}
        <img className="w-10 h-10" src="images/logo.png" />
        {/* Logo Text Added here  */}
        <span>Comuner</span>
      </Typography>
    </Link>
  );
};

export default Logo;
