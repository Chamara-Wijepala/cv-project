import React from "react";

class PreviewHeader extends React.Component {

  render() {
    const { firstName, lastName, title } = this.props.state.formValues;

    return(
      <div id="PreviewHeader">
        <h1 id="UserName">{firstName} {lastName}</h1>
        <p id="UserTitle" className="Subsection">{title}</p>
      </div>
    )
  }
}

export default PreviewHeader;
