import React from "react";
import CreateSubsection from "./Subsection";

export default function PreviewExperience({ props }) {
  const {
    company,
    position,
    workedFrom,
    workedUntil,
  } = { ...props };
  const subsectionItems = [
    { value: company, heading: 'Company'},
    { value: position, heading: 'Position'},
  ]

  const previewSection = CreateSubsection(subsectionItems);
  
  return(
    <div className="PreviewSection">
      <h1 className="SectionHeading PreviewSectionHeading">Practical Experience</h1>
      { previewSection }
      <div>
        <h2 className="SubsectionHeading Subsection">{workedFrom} - {workedUntil}</h2>
      </div>
    </div>
  )
}
