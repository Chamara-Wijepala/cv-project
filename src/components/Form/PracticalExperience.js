import React from "react";

class PracticalExperience extends React.Component {

  render() {
    const { handleChange } = this.props;

    return(
      <div>
        <h1 className="SectionHeading">Practical Experience</h1>
        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          onChange={handleChange}
        />
        <input
          type="text"
          name="workedFrom"
          placeholder="From"
          onChange={handleChange}
        />
        <input
          type="text"
          name="workedUntil"
          placeholder="Until"
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default PracticalExperience;
