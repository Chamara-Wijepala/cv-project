import React from "react";
import GeneralInformation from "./Form/GeneralInformation";
import Education from "./Form/Education";
import PracticalExperience from "./Form/PracticalExperience";

class Form extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <form>
        <GeneralInformation></GeneralInformation>
        <Education></Education>
        <PracticalExperience></PracticalExperience>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form;