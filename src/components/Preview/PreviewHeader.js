import React from "react";

export default function PreviewHeader({ props }) {
  const { firstName, lastName, title } =  {...props };

  return (
    <div id="PreviewHeader">
      <h1 id="UserName">{firstName} {lastName}</h1>
      <p id="UserTitle" className="Subsection">{title}</p>
    </div>
  )
}
