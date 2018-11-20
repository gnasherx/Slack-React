import React from "react";

const Input = ({ type, name, value, onInputChangeHandler }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onInputChangeHandler}
      style={{ display: "block" }}
    />
  );
};

export default Input;
