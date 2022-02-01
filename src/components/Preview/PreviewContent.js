import React from "react";
import PreviewDescription from "./PreviewDescription";
import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";

export default function PreviewContent(props) {
  const { state } = props;

  return(
    <div id="PreviewContent">
      <PreviewDescription state={state}/>
      <PreviewEducation state={state}/>
      <PreviewExperience state={state}/>
    </div>
  )
}
