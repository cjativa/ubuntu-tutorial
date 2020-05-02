import React, { Component } from "react";

import { NavigationBar } from "./navigationBar";
import { Body } from "./body";

/** The Ubuntu Terminal component */
export const UbuntuTerminal = props => {
  const { appRef, config } = props;

  return (
    <div className="ubuntu">
      <NavigationBar config={config} />
      <Body config={config} />
    </div>
  );
};
