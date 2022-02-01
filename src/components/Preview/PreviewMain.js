import React from "react";
import PreviewContent from "./PreviewContent";
import PreviewSidebar from "./PreviewSidebar";
import '../../styles/previewMain.css';

export default function PreviewMain({ props }) {
  return(
    <div id="PreviewMain">
      <PreviewContent props={props}/>
      <PreviewSidebar props={props}/>
    </div>
  )
}
