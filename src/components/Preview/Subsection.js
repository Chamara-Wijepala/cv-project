import React from "react";

export default function CreateSubsection(subsectionItems) {
  return subsectionItems.map((item, index) => (
    <div key={index}>
      <h2 className="SubsectionHeading">{item.heading}</h2>
      <p className="Subsection">{item.value}</p>
    </div>
  ))
}
