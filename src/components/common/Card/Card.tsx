import React, { FC } from "react";

import "./Card.scss";

interface CardProps {
  children: React.ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="card-wrapper">
      <div className="card">{children}</div>
    </div>
  );
};
