import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.scss";

import { UbuntuTerminal } from "./UbuntuTerminal/ubuntuTerminal";

const Application = () => {
  const config = {
    name: `Me`,
    computerName: `Ubuntu`
  };

  return (
    <div className="application">
      <UbuntuTerminal config={config} />
    </div>
  );
};

render(<Application />, document.getElementById("root"));
