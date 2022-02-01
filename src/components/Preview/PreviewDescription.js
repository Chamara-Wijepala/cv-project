import React from "react";

export default function PreviewDescription({ state }) {
  const { description } = state.formValues;

  return(
    <div className="PreviewSection">
      <h1 className="SectionHeading PreviewSectionHeading">Description</h1>
      <p className="Subsection">{description}</p>
    </div>
  )
}
