import React from "react";
import PreviewDescription from "./PreviewDescription";
import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";

export default function PreviewContent({ props }) {
  return(
    <div id="PreviewContent">
      <PreviewDescription props={props}/>
      <PreviewEducation props={props}/>
      <PreviewExperience props={props}/>
    </div>
  )
}
