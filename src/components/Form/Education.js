import React from "react";

class Education extends React.Component {

  render() {
    const { handleChange } = this.props;

    return(
      <div>
        <h1 className="SectionHeading">Education</h1>
        <input
          type="text"
          name="university"
          placeholder="University"
          onChange={handleChange}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
        />
        <input
          type="text"
          name="attendedFrom"
          placeholder="From"
          onChange={handleChange}
        />
        <input
          type="text"
          name="attendedUntil"
          placeholder="Until"
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default Education;
