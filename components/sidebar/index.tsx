import React from "react";
import Logo from "../logo";
import "./style.css";

import { Noto_Sans_JP } from "@next/font/google";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["500", "700"],
  style: "normal",
});

const Sidebar = () => {
  return (
    <div className={notoSansJp.className}>
      <div className="sidebar2">
        <Logo />
        <div className="typography">Typography</div>
        <div className="button2">Buttons</div>
        <div className="inputs2">Inputs</div>
        <div className="grid">Grid</div>
      </div>
    </div>
  );
};

export default Sidebar;
