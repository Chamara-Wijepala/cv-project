import React from "react";

class PreviewHeader extends React.Component {

  render() {
    const { firstName, lastName } = this.props.state.formValues;

    return(
      <div>
        <h1>{firstName} {lastName}</h1>
      </div>
    )
  }
}

export default PreviewHeader;
