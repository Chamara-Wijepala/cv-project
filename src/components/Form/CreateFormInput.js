import React from "react";

export default function CreateFormInput(inputItems, handleChange) {
  return inputItems.map((item) => (
    <input
      key={item.id}
      type="text"
      name={item.id}
      placeholder={item.placeholder}
      onChange={handleChange}
    ></input>
  ))
}
