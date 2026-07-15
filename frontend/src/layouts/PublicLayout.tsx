import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";

const PublicLayout: React.FC = () => {
  return (
    <div className="public-layout">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PublicLayout;