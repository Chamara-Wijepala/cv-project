import React from "react";
import PreviewHeader from "./Preview/PreviewHeader";
import PreviewMain from "./Preview/PreviewMain";

export default function Preview(props) {
  const { state } = props;

  return(
    <div id="Preview" className="FlexItem">
      <PreviewHeader state={state}/>
      <PreviewMain state={state}/>
    </div>
  )
}
