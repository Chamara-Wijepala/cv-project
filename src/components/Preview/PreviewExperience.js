import React from "react";

class PreviewExperience extends React.Component {
  render() {
    const {
      company,
      position,
      workedFrom,
      workedUntil,
    } = this.props.state.formValues;
    
    return(
      <div>
        <h1>Practical Experience</h1>
        <div>
          <h2>Company</h2> {company}
        </div>
        <div>
          <h2>Position</h2> {position}
        </div>
        <div>
          <h2>From</h2> {workedFrom}
        </div>
        <div>
          <h2>Until</h2> {workedUntil}
        </div>
      </div>
    )
  }
}

export default PreviewExperience;
