import React from "react";
import "./style.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "600", style: "normal" });

const Logo = () => {
  return (
    <div className={poppins.className}>
      <div className="logo" style={{ color: "#090F31" }}>
        <span style={{ color: "#F7542E" }}>Dev</span>challenges.io
      </div>
    </div>
  );
};

export default Logo;
