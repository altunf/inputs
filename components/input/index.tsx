import React from "react";
import "./style.css";

const Input = ({
  defaultHover,
  defaultFocus,
  error,
  errorHover,
  errorFocus,
  disabled,
  helperText,
  startIcon,
  endIcon,
  value,
  size,
  fullWidth,
  multiline,
  row,
}: any) => {
  let inputStyle = "default";
  let helperStyle;

  error && (inputStyle = "error");
  disabled && (inputStyle = "disabled");
  value === "text" && (inputStyle = "text");

  helperText === "Some interesting text" &&
    (inputStyle = "helper-text") &&
    (helperStyle = "helper-text-style1");

  helperText === "Some interesting text" &&
    error &&
    (inputStyle = "helper-text-error") &&
    (helperStyle = "helper-text-style2");

  startIcon && (inputStyle = "icon-start");
  endIcon && (inputStyle = "icon-end");

  size === "sm" && (inputStyle = "sm");
  size === "md" && (inputStyle = "md");

  fullWidth && (inputStyle = "full-width");
  multiline && row === "4" && (inputStyle = "multiline");

  defaultHover && (inputStyle = "default-hover");
  defaultFocus && (inputStyle = "default-focus");

  errorHover && (inputStyle = "error-hover");
  errorFocus && (inputStyle = "error-focus");

  return (
    <>
      <input className={inputStyle} type="text" placeholder="Placeholder" />
      <div className={helperStyle}> {helperText && `${helperText}`}</div>
    </>
  );
};

export default Input;
