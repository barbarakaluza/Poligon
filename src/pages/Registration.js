import Form from "../components/Form/Form/Form";
import Input from "../components/Form/Input/Input";
import React, { useState, useRef, useEffect } from "react";

function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return [value, handleChange];
}

function Registration() {
  const [name, handleNameChange] = useInput("Basia");
  const [surname, handleSurnameChange] = useInput("Kałuża");
  const [age, handleAgeChange] = useInput("22");

  const handleSubmit = (event) => {
      event.preventDefault();
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          value={name}
          placeholder="name"
          handleChange={handleNameChange}
        ></Input>
        <Input
          name="surname"
          value={surname}
          placeholder="surname"
          handleChange={handleSurnameChange}
        ></Input>
        <Input
          name="age"
          value={age}
          placeholder="age"
          handleChange={handleAgeChange}
        ></Input>
      </Form>
    </div>
  );
}

export default Registration;
