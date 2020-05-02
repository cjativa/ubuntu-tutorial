import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faSearch,
  faBars,
  faMinus,
  faTimes,
  faPlus,
  faCircle
} from "@fortawesome/free-solid-svg-icons";

const NavigationBar = props => {

  // Get our config from the props
  const { config } = props;

  // Extract the name and computer name
  const { name, computerName } = config;

  return (
    <div className="navigation-bar">
      {/** Left side of the navigation bar */}
      <div className="nb__left">
        <FontAwesomeIcon icon={faPlus} size="sm" className="raised" />
      </div>

      {/** Center of the navigation bar */}
      <div className="nb__center">
        <span className="nb__center--cp">{`${name}@${computerName}:~`}</span>
      </div>

      {/** Right side of the navigation bar */}
      <div className="nb__right">
        <FontAwesomeIcon icon={faSearch} size="sm" className="raised" />
        <FontAwesomeIcon icon={faBars} size="sm" className="raised" />
        <FontAwesomeIcon icon={faMinus} size="sm" className="min" />
        <FontAwesomeIcon icon={faSquare} size="sm" className="max-square" />}

        {/** Stacked FontAwesome icons for the "Close" button */}
        <span className="fa-stack custom">
          <FontAwesomeIcon
            icon={faCircle}
            size="xs"
            className="fa-stack-2x close"
          />
          <FontAwesomeIcon icon={faTimes} size="xs" className="fa-stack-1x" />
        </span>
      </div>
    </div>
  );
};
