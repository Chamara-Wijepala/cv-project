import React from "react";
import Form from "./components/Form";
import Preview from "./Preview";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      formValues: {},
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const formValues = this.state.formValues;
    const name = event.target.name;
    const value = event.target.value;

    formValues[name] = value;

    this.setState({
      formValues
    })
  }

  render() {
    return(
      <div>
        <Form handleChange={this.handleChange}></Form>
        <Preview state={this.state}></Preview>
      </div>
    )
  }
}

export default App;
