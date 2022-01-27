import React from "react";
import GeneralInformation from "./Form/GeneralInformation";
import Education from "./Form/Education";
import PracticalExperience from "./Form/PracticalExperience";

class Form extends React.Component {
  
  render() {
    const { handleChange } = this.props;

    return(
      <form id="Form" className="FlexItem">
        <GeneralInformation handleChange={handleChange}></GeneralInformation>
        <Education handleChange={handleChange}></Education>
        <PracticalExperience handleChange={handleChange}></PracticalExperience>
        <button type="submit" id="SubmitButton">Submit</button>
      </form>
    )
  }
}

export default Form;
