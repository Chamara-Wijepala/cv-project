import React from "react";

export default function FormInput({name, placeholder, handleChange}) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
    ></input>
  )
}