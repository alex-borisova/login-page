import React, { FC } from "react";

import "./TextField.scss";

interface TextFieldProps {
  name?: string;
  value?: string;
  onChange?: (props?: any) => void;
  type?: "text" | "email" | "password";
  label?: string;
  placeholder?: string;
  endIcon?: React.ReactElement;
}
export const TextField: FC<TextFieldProps> = ({
  name,
  value,
  onChange,
  type,
  label,
  placeholder,
  endIcon,
}) => {
  return (
    <div className="text-filed">
      <label htmlFor={name} className="text-filed__label">
        {label}
      </label>
      <div
        className={`text-filed__input-wrapper ${
          value ? "text-filed__input-wrapper_active" : ""
        }`}
      >
        <input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="text-filed__input"
        />
        {endIcon && (
          <div
            className={`text-filed__icon ${
              value ? "text-filed__icon_active" : ""
            }`}
          >
            {endIcon}
          </div>
        )}
      </div>
    </div>
  );
};
