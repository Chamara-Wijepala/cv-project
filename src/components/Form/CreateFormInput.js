import React from "react";

export default function CreateFormInput(inputItems, handleChange) {
  return inputItems.map((item, index) => (
    <input
      key={index}
      type="text"
      name={item.name}
      placeholder={item.placeholder}
      onChange={handleChange}
    ></input>
  ))
}
