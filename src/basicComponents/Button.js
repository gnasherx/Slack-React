import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} style={{ display: "block" }}>
      {children}
    </button>
  );
};

export default Button;
