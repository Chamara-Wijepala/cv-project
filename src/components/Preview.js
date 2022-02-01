import React from "react";
import PreviewHeader from "./Preview/PreviewHeader";
import PreviewMain from "./Preview/PreviewMain";

export default function Preview({ props }) {
  const { formValues } = props;

  return(
    <div id="Preview" className="FlexItem">
      <PreviewHeader props={formValues}/>
      <PreviewMain props={formValues}/>
    </div>
  )
}
