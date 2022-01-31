import React from "react";
import FormInput from "./FormInput";

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
      <h1 className="SectionHeading">General Information</h1>
      { inputSection }
    </div>
  )
}
