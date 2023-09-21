import React, { FC, SetStateAction, Dispatch } from "react";

import "./ShowPasswordButton.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface ShowPasswordButtonProps {
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
}
export const ShowPasswordButton: FC<ShowPasswordButtonProps> = ({
  showPassword,
  setShowPassword,
}) => {
  const handleShowPassword = () => {
    setShowPassword((prev: boolean) => !prev);
  };
  return (
    <button onClick={handleShowPassword} className="show-password-button">
      <span>
        {showPassword ? (
          <FontAwesomeIcon icon={faEye} className="fa-fw" />
        ) : (
          <FontAwesomeIcon icon={faEyeSlash} className="fa-fw" />
        )}
      </span>
    </button>
  );
};
