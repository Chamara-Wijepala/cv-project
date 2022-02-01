import React, { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";

export default function App() {
  const [formValues, setFormValues] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormValues((prevState) => ({
      formValues: {
        ...prevState.formValues,
        [name]: value,
      },
    }))
  };

  function handleSubmit(event) {
    event.preventDefault();
  };
  
  return (
    <main>
      <Form handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Preview props={formValues}/>
    </main>
  )
}
