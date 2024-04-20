import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Layout({ children }) {
  return (
    <div>
      {/* Navbar Section Add here  */}
      <Navbar />

      {/* main Content added Here  */}
      <div className="content min-h-screen">{children}</div>

      {/* Footer Section added here  */}
      <Footer />
    </div>
  );
}

export default Layout;
