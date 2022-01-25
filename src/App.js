import React from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";

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
      <main>
        <Form handleChange={this.handleChange}></Form>
        <Preview state={this.state}></Preview>
      </main>
    )
  }
}

export default App;
