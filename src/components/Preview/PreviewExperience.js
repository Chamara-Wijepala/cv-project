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
        <h1 className="SectionHeading">Practical Experience</h1>
        <div>
          <h2 className="SubsectionHeading">Company</h2> {company}
        </div>
        <div>
          <h2 className="SubsectionHeading">Position</h2> {position}
        </div>
        <div>
          <h2 className="SubsectionHeading">{workedFrom} - {workedUntil}</h2>
        </div>
      </div>
    )
  }
}

export default PreviewExperience;
