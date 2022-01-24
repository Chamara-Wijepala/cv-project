import React from "react";

class GeneralInformation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleChange } = this.props;

    return(
      <div>
        <h1 className="SectionHeading">General Information</h1>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default GeneralInformation;
