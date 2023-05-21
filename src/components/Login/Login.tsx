import React, { FC, useState } from "react";

import "./Login.scss";
import { Card } from "../common/Card/Card";
import { TextField } from "../common/TextField/TextField";
import { loginData } from "../../types/loginData.type";

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

  return (
    <Card>
      <TextField
        label="Email"
        value={loginData.login}
        onChange={handleLoginData("login")}
      />
      <TextField
        label="Password"
        value={loginData.password}
        onChange={handleLoginData("password")}
      />
    </Card>
  );
};
