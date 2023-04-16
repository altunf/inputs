import React from "react";
import "./style.css";
import Input from "../input";

import { Noto_Sans_JP } from "@next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const InputList = () => {
  let labels = [];

  for (let i = 0; i < 16; i++) {
    labels.push("label" + i);
  }

  return (
    <div className={notoSansJP.className}>
      <>
        {labels.map((label, index) => {
          return (
            <div key={index} className={label}>
              Label
            </div>
          );
        })}
      </>
      <>
        <div className="type0">&lt;Input /&gt;</div>
        <Input />
      </>
      <>
        <div className="type1">&:hover</div>
        <Input defaultHover />
      </>
      <>
        <div className="type2">&:focus</div>
        <Input defaultFocus />
      </>
      <>
        <div className="type3">&lt;Input error /&gt;</div>
        <Input error />
      </>
      <>
        <div className="type4">&:hover</div>
        <Input errorHover />
      </>
      <>
        <div className="type5">&:focus</div>
        <Input errorFocus />
      </>
      <>
        <div className="type6">&lt;Input disabled /&gt;</div>
        <Input disabled />
      </>
      <>
        <div className="type7">
          &lt;Input helperText="Some interesting text" /&gt;
        </div>
        <Input helperText="Some interesting text" />
      </>
      <>
        <div className="type8">
          &lt;Input helperText="Some interesting text" error /&gt;
        </div>
        <Input helperText="Some interesting text" error />
      </>
      <>
        <div className="type9">&lt;Input startIcon /&gt;</div>
        <Input startIcon />
      </>
      <>
        <div className="type10">&lt;Input endIcon /&gt;</div>
        <Input endIcon />
      </>
      <>
        <div className="type11">&lt;Input value="text" /&gt;</div>
        <Input value="text" />
      </>
      <>
        <div className="type12">&lt;Input size="sm" /&gt;</div>
        <Input size="sm" />
      </>
      <>
        <div className="type13">&lt;Input size="md" /&gt;</div>
        <Input size="md" />
      </>
      <>
        <div className="type14">&lt;Input fullWidth /&gt;</div>
        <Input fullWidth />
      </>
      <>
        <div className="type15">&lt;Input multiline row="4" /&gt;</div>
        <Input multiline row="4" />
      </>
    </div>
  );
};

export default InputList;
