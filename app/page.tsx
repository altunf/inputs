import React from "react";
import "./style.css";

import { Poppins } from "@next/font/google";
import InputList from "@/components/input-list";
import Footer from "@/components/footer";

const poppins = Poppins({ subsets: ["latin"], weight: "500", style: "normal" });

const HomePage = () => {
  return (
    <>
      <div className={poppins.className}>
        <div className="inputs">Inputs</div>
      </div>
      <InputList />
      <Footer />
    </>
  );
};

export default HomePage;
