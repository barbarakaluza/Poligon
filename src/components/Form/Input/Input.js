import React from "react";

function Input({ name, value, placeholder, handleChange }) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    ></input>
  );
}

export default Input;