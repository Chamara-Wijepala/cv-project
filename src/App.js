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
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return(
      <main>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}></Form>
        <Preview state={this.state}></Preview>
      </main>
    )
  }
}

export default App;
