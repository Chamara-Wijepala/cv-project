import React from "react";

class PreviewSidebar extends React.Component {

  render() {
    const { email, phoneNumber, address } = this.props.state.formValues;

    return(
      <div id="PreviewSidebar">
        <h1>Personal Info</h1>
        <div>
          <h2>Email</h2>
          {email}
        </div>
        <div>
          <h2>Phone Number</h2>
          {phoneNumber}
        </div>
        <div>
          <h2>Address</h2>
          {address}
        </div>
      </div>
    )
  }
}

export default PreviewSidebar;
