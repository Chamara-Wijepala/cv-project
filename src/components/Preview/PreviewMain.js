import React from "react";
import PreviewContent from "./PreviewContent";
import PreviewSidebar from "./PreviewSidebar";

class PreviewMain extends React.Component {

  render() {
    return(
      <div>
        <PreviewContent state={this.props.state}></PreviewContent>
        <PreviewSidebar state={this.props.state}></PreviewSidebar>
      </div>
    )
  }
}

export default PreviewMain;
