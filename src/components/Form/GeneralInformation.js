import React from "react";
import CreateFormInput from "./CreateFormInput";

export default function GeneralInformation({ handleChange }) {
  const inputItems = [
    { id: 'firstName', placeholder: 'First Name' },
    { id: 'lastName', placeholder: 'Last Name' },
    { id: 'title', placeholder: 'Title' },
    { id: 'email', placeholder: 'Email' },
    { id: 'phoneNumber', placeholder: 'Phone Number' },
    { id: 'address', placeholder: 'Address' },
    { id: 'description', placeholder: 'Description' },
  ]

  const inputSection = CreateFormInput(inputItems, handleChange);

  return (
    <div className="FormSection">
      <h1 className="SectionHeading">General Information</h1>
      { inputSection }
    </div>
  )
}
