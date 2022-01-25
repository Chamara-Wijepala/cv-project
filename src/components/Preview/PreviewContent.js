import React from "react";
import PreviewDescription from "./PreviewDescription";
import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";

class PreviewContent extends React.Component {

  render() {
    return(
      <div id="PreviewContent">
        <PreviewDescription state={this.props.state}></PreviewDescription>
        <PreviewEducation state={this.props.state}></PreviewEducation>
        <PreviewExperience state={this.props.state}></PreviewExperience>
      </div>
    )
  }
}

export default PreviewContent;
