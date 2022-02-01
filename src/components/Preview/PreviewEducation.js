import React from "react";
import CreateSubsection from "./Subsection";

export default function PreviewEducation({ props }) {
  const {
    university,
    degree,
    subject,
    attendedFrom,
    attendedUntil
  } = { ...props };
  const subsectionItems = [
    { value: university, heading: 'University' },
    { value: degree, heading: 'Degree' },
    { value: subject, heading: 'Subject' },
  ]

  const previewSection = CreateSubsection(subsectionItems);
    
  return(
    <div className="PreviewSection">
      <h1 className="SectionHeading PreviewSectionHeading">Education</h1>
      { previewSection }
      <div>
        <h2 className="SubsectionHeading Subsection">{attendedFrom} - {attendedUntil}</h2>
      </div>
    </div>
  )
}
