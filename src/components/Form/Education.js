import React from "react";
import CreateFormInput from "./CreateFormInput";

export default function Education({ handleChange }) {
  const inputItems = [
    { name: 'university', placeholder: 'University' },
    { name: 'degree', placeholder: 'Degree' },
    { name: 'subject', placeholder: 'Subject' },
    { name: 'attendedFrom', placeholder: 'Attended From' },
    { name: 'attendedUntil', placeholder: 'Attended Until' },
  ]

  const inputSection = CreateFormInput(inputItems, handleChange);

  return (
    <div className="FormSection">
      <h1 className="SectionHeading">Education</h1>
      { inputSection }
    </div>
  )
}
