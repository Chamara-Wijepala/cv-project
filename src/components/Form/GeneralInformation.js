import React from "react";

class GeneralInformation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h1 className="SectionHeading">General Information</h1>
        <input
          type="text"
          placeholder="First Name"
        />
        <input
          type="text"
          placeholder="Last Name"
        />
        <input
          type="email"
          placeholder="Email"
        />
        <input
          type="tel"
          placeholder="Phone Number"
        />
        <input
          type="text"
          placeholder="Address"
        />
      </div>
    )
  }
}

export default GeneralInformation;
