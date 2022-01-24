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
      <div>
        <h1>Education</h1>
        <div>
          <h2>University</h2> {university}
        </div>
        <div>
          <h2>Degree</h2> {degree}
        </div>
        <div>
          <h2>Subject</h2> {subject}
        </div>
        <div>
          <h2>From</h2> {attendedFrom}
        </div>
        <div>
          <h2>Until</h2> {attendedUntil}
        </div>
      </div>
    )
  }
}

export default PreviewEducation;
