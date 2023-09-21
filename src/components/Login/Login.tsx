import React, { FC, useState } from "react";

import "./Login.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Card } from "../common/Card/Card";
import { InputTextField } from "../common/TextField/TextField";
import { loginData } from "../../types/loginData.type";
import { ShowPasswordButton } from "../ShowPasswordButton/ShowPasswordButton";

export const Login: FC = () => {
  const [loginData, setLoginData] = useState<loginData>({
    login: "",
    password: "",
  });

  const handleLoginData =
    (filed: keyof loginData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setLoginData((prev) => ({ ...prev, [filed]: event.target.value }));
    };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Card>
      <h2 className="login__title">Login</h2>
      <InputTextField
        label="Email"
        type="email"
        value={loginData.login}
        onChange={handleLoginData("login")}
        endIcon={<FontAwesomeIcon icon={faEnvelope} />}
      />
      <InputTextField
        label="Password"
        type={showPassword ? "text" : "password"}
        value={loginData.password}
        onChange={handleLoginData("password")}
        endIcon={
          <ShowPasswordButton
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        }
      />
    </Card>
  );
};
