import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h1 className="SectionHeading">Education</h1>
        <input
          type="text"
          placeholder="University"
        />
        <input
          type="text"
          placeholder="Degree"
        />
        <input
          type="text"
          placeholder="Subject"
        />
        <input
          type="text"
          placeholder="From"
        />
        <input
          type="text"
          placeholder="To"
        />
      </div>
    )
  }
}

export default Education;