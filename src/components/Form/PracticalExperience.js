import React from "react";
import FormInput from "./FormInput";

export default function PracticalExperience({ handleChange }) {
  const inputItems = [
    { id: 'company', placeholder: 'Company' },
    { id: 'position', placeholder: 'Position' },
    { id: 'workedFrom', placeholder: 'Employed From' },
    { id: 'workedUntil', placeholder: 'Employed Until' },
  ]

  const inputSection = inputItems.map((item) => (
    <FormInput
      key={item.id}
      name={item.id}
      placeholder={item.placeholder}
      handleChange={handleChange}
    ></FormInput>
  ))

  return (
    <div className="FormSection">
      <h1 className="SectionHeading">Practical Experience</h1>
      { inputSection }
    </div>
  )
}
