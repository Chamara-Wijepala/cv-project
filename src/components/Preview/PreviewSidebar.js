import React from "react";
import CreateSubsection from "./Subsection";

export default function PreviewSidebar({ props }) {
  const { email, phoneNumber, address } = { ...props };
  const subsectionItems = [
    { value: email, heading: 'Email' },
    { value: phoneNumber, heading: 'Phone Number' },
    { value: address, heading: 'Address' },
  ]

  const sidebarSection = CreateSubsection(subsectionItems);

  return (
    <div id="PreviewSidebar">
      <h1 className="SectionHeading PreviewSectionHeading">Personal Info</h1>
      { sidebarSection }
    </div>
  )
}
