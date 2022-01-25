import React from "react";

class PreviewHeader extends React.Component {

  render() {
    const { firstName, lastName, title } = this.props.state.formValues;

    return(
      <div id="PreviewHeader">
        <h1>{firstName} {lastName}</h1>
        <p>{title}</p>
      </div>
    )
  }
}

export default PreviewHeader;
