import React from "react";
import "./style.css";

import { Poppins } from "@next/font/google";
import InputList from "@/components/input-list";

const poppins = Poppins({ subsets: ["latin"], weight: "500", style: "normal" });

const HomePage = () => {
  return (
    <>
      <div className={poppins.className}>
        <div className="inputs">Inputs</div>
      </div>
      <InputList />
    </>
  );
};

export default HomePage;
