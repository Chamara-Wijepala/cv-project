import React from "react";

class PreviewDescription extends React.Component {
  render() {
    const { description } = this.props.state.formValues;

    return(
      <div className="PreviewSection">
        <h1 className="SectionHeading PreviewSectionHeading">Description</h1>
        <p className="Subsection">{description}</p>
      </div>
    )
  }
}

export default PreviewDescription;
