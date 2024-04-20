import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { GlobalProvider } from "./context/GlobalContext";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  AdminLogin,
  AllBlogs,
  Blog,
  BlogInfo,
  Dashboard,
  Home,
  Nopage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Nopage />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <Nopage />,
  },
  {
    path: "/allblog",
    element: <AllBlogs />,
    errorElement: <Nopage />,
  },
  {
    path: "/bloginfo/:id",
    element: <BlogInfo />,
    errorElement: <Nopage />,
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
    errorElement: <Nopage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <Nopage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </GlobalProvider>
  </React.StrictMode>
);
