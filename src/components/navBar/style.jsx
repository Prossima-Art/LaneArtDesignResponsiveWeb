import React, { useState } from "react";

import DarkModeBtn from "../../assets/svg/ligthmodeButton.svg";
import LigthModeBtn from "../../assets/svg/darkmodeButton.svg";

export function BtnTheme() {
  const [Expandir, setShow] = React.useState(false); //false = ligth mode
  const handleToggle = () => {
    setShow(!Expandir);
    var body = document.body;
    body.classList.toggle("dark");
  };

  return (
    <div>
      <button className="BtnTheme" onClick={handleToggle}>
        {Expandir ? (
          <img
            src={DarkModeBtn}
            alt="light"
            className="ModeBtn"
          />
        ) : (
          <img
            src={LigthModeBtn}
            alt="dark"
            className="ModeBtn"
          />
        )}
      </button>
    </div>
  );
}
