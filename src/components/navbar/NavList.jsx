import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../hooks/useGlobalContext";

export const NavList = () => {
  const { mode, toggleMode } = useGlobalContext();
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        style={{ color: mode === "dark" ? "white" : "white" }}
      >
        <Link to={"/"} className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        style={{ color: mode === "dark" ? "white" : "white" }}
      >
        <Link to={"/allblogs"} className="flex items-center">
          Blogs
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        style={{ color: mode === "dark" ? "white" : "white" }}
      >
        <Link to={"/adminlogin"} className="flex items-center">
          Admin Login
        </Link>
      </Typography>
    </ul>
  );
};
