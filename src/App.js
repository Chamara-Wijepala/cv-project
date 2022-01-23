import React from "react";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";
import PracticalExperience from "./components/PracticalExperience";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
    }
  }

  render() {
    return(
      <div>
        <form>
          <GeneralInformation></GeneralInformation>
          <Education></Education>
          <PracticalExperience></PracticalExperience>
        </form>
        <button type="submit">Submit</button>
      </div>
    )
  }
}

export default App;
