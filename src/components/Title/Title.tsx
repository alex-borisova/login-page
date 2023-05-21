import React, { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";

import "./Title.scss";

export const Title: FC = () => {
  return (
    <div className="title">
      <FontAwesomeIcon icon={faMeteor} size="2xl" className="title__icon" />
      <h1>Dream Team</h1>
    </div>
  );
};
