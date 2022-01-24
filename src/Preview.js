import React from "react";
import Header from "./components/Preview/Header";

class Preview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <Header state={this.props.state}></Header>
      </div>
    )
  }
}

export default Preview;
