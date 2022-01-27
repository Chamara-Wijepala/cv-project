import React from "react";

class PreviewEducation extends React.Component {

  render() {
    const {
      university,
      degree,
      subject,
      attendedFrom,
      attendedUntil
    } = this.props.state.formValues;
    
    return(
      <div className="PreviewSection">
        <h1 className="SectionHeading PreviewSectionHeading">Education</h1>
        <div>
          <h2 className="SubsectionHeading">University</h2>
          <p className="Subsection">{university}</p>
        </div>
        <div>
          <h2 className="SubsectionHeading">Degree</h2>
          <p className="Subsection">{degree}</p>
        </div>
        <div>
          <h2 className="SubsectionHeading">Subject</h2>
          <p className="Subsection">{subject}</p>
        </div>
        <div>
          <h2 className="SubsectionHeading Subsection">{attendedFrom} - {attendedUntil}</h2>
        </div>
      </div>
    )
  }
}

export default PreviewEducation;
