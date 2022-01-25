import React from "react";

class PreviewDescription extends React.Component {
  render() {
    const { description } = this.props.state.formValues;

    return(
      <div>
        <h1 className="SectionHeading">Description</h1>
        <p>{description}</p>
      </div>
    )
  }
}

export default PreviewDescription;
