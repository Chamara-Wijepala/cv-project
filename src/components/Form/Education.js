import React from "react";
import CreateFormInput from "./CreateFormInput";

export default function Education({ handleChange }) {
  const inputItems = [
    { id: 'university', placeholder: 'University' },
    { id: 'degree', placeholder: 'Degree' },
    { id: 'subject', placeholder: 'Subject' },
    { id: 'attendedFrom', placeholder: 'Attended From' },
    { id: 'attendedUntil', placeholder: 'Attended Until' },
  ]

  const inputSection = CreateFormInput(inputItems, handleChange);

  return (
    <div className="FormSection">
      <h1 className="SectionHeading">Education</h1>
      { inputSection }
    </div>
  )
}
