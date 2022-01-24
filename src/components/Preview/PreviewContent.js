import React from "react";
import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";

class PreviewContent extends React.Component {

  render() {
    return(
      <div>
        <PreviewEducation state={this.props.state}></PreviewEducation>
        <PreviewExperience state={this.props.state}></PreviewExperience>
      </div>
    )
  }
}

export default PreviewContent;
