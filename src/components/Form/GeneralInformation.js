import React from "react";
import CreateFormInput from "./CreateFormInput";

export default function GeneralInformation({ handleChange }) {
  const inputItems = [
    { name: 'firstName', placeholder: 'First Name' },
    { name: 'lastName', placeholder: 'Last Name' },
    { name: 'title', placeholder: 'Title' },
    { name: 'email', placeholder: 'Email' },
    { name: 'phoneNumber', placeholder: 'Phone Number' },
    { name: 'address', placeholder: 'Address' },
    { name: 'description', placeholder: 'Description' },
  ]

  const inputSection = CreateFormInput(inputItems, handleChange);

  return (
    <div className="FormSection">
      <h1 className="SectionHeading">General Information</h1>
      { inputSection }
    </div>
  )
}
