import React from "react";

export default function PreviewDescription({ props }) {
  const { description } = { ...props };

  return(
    <div className="PreviewSection">
      <h1 className="SectionHeading PreviewSectionHeading">Description</h1>
      <p className="Subsection">{description}</p>
    </div>
  )
}
