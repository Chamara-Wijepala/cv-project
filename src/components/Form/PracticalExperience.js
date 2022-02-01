import React from "react";
import CreateFormInput from "./CreateFormInput";

export default function PracticalExperience({ handleChange }) {
  const inputItems = [
    { id: 'company', placeholder: 'Company' },
    { id: 'position', placeholder: 'Position' },
    { id: 'workedFrom', placeholder: 'Employed From' },
    { id: 'workedUntil', placeholder: 'Employed Until' },
  ]

  const inputSection = CreateFormInput(inputItems, handleChange);

  return (
    <div className="FormSection">
      <h1 className="SectionHeading">Practical Experience</h1>
      { inputSection }
    </div>
  )
}
