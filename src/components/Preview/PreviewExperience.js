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
      <div className="PreviewSection">
        <h1 className="SectionHeading PreviewSectionHeading">Practical Experience</h1>
        <div>
          <h2 className="SubsectionHeading">Company</h2>
          <p className="Subsection">{company}</p>
        </div>
        <div>
          <h2 className="SubsectionHeading">Position</h2>
          <p className="Subsection">{position}</p>
        </div>
        <div>
          <h2 className="SubsectionHeading Subsection">{workedFrom} - {workedUntil}</h2>
        </div>
      </div>
    )
  }
}

export default PreviewExperience;
