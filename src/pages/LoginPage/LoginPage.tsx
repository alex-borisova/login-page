import React, { FC } from "react";

import "./LoginPage.scss";

import { Title } from "../../components/Title/Title";
import { Login } from "../../components/Login/Login";

export const LoginPage: FC = () => {
  return (
    <div className="login-page">
      <Title />
      <Login />
    </div>
  );
};
