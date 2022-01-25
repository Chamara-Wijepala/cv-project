import React from "react";
import PreviewHeader from "./Preview/PreviewHeader";
import PreviewMain from "./Preview/PreviewMain";

class Preview extends React.Component {

  render() {
    return(
      <div id="Preview" className="FlexItem">
        <PreviewHeader state={this.props.state}></PreviewHeader>
        <PreviewMain state={this.props.state}></PreviewMain>
      </div>
    )
  }
}

export default Preview;
