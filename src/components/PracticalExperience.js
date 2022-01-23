import React from "react";

class PracticalExperience extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h1 className="SectionHeading">Practical Experience</h1>
        <input
          type="text"
          placeholder="Company"
        />
        <input
        type="text"
        placeholder="Position"
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

export default PracticalExperience;