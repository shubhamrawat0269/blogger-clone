import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@material-tailwind/react";
import {
  AdminLogin,
  AllBlogs,
  Blog,
  BlogInfo,
  Dashboard,
  Nopage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
