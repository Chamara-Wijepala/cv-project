import React from "react";
import GeneralInformation from "./Form/GeneralInformation";
import Education from "./Form/Education";
import PracticalExperience from "./Form/PracticalExperience";

export default function Form({ handleChange, handleSubmit }) {
  return (
    <form id="Form" className="FlexItem" onSubmit={handleSubmit}>
      <GeneralInformation handleChange={handleChange}/>
      <Education handleChange={handleChange}/>
      <PracticalExperience handleChange={handleChange}/>
      <button type="submit" id="SubmitButton">Submit</button>
    </form>
  )
}
