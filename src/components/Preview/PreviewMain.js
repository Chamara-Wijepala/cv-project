import React from "react";
import PreviewContent from "./PreviewContent";
import PreviewSidebar from "./PreviewSidebar";
import '../../styles/previewMain.css';

export default function PreviewMain(props) {
  const { state } = props;

  return(
    <div id="PreviewMain">
      <PreviewContent state={state}/>
      <PreviewSidebar state={state}/>
    </div>
  )
}
