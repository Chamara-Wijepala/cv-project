import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { firstName, lastName } = this.props.state.formValues;

    return(
      <div>
        <h1>{firstName} {lastName}</h1>
      </div>
    )
  }
}

export default Header;
