import React from "react";
import CreateFormInput from "./CreateFormInput";

export default function PracticalExperience({ handleChange }) {
  const inputItems = [
    { name: 'company', placeholder: 'Company' },
    { name: 'position', placeholder: 'Position' },
    { name: 'workedFrom', placeholder: 'Employed From' },
    { name: 'workedUntil', placeholder: 'Employed Until' },
  ]

  const inputSection = CreateFormInput(inputItems, handleChange);

  return (
    <div className="FormSection">
      <h1 className="SectionHeading">Practical Experience</h1>
      { inputSection }
    </div>
  )
}
