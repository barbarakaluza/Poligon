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
  };

  useEffect(() => {
    console.log("Hello from UseEffect");
    //componentDidUpdate(prevProps, prevState) {
    //     console.log("ComponentDidUpdate");
    //   }
    return () => {
      //componentWillUnmount() {
      //     console.log("ComponentWillUnmount");
      //   }
    };
  }, []);

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

// class Registration extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       surname: "",
//       age: "",
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   componentDidMount() {
//     console.log("ComponentDidMount");
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log("ComponentDidUpdate");
//   }
//   componentWillUnmount() {
//     console.log("ComponentWillUnmount");
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//   }
//   handleChange = (event) => {
//     //event.target.name
//     const keyName = event.target.name;
//     this.setState({ [keyName]: event.target.value});
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" name="name" placeholder="Name" onChange={this.handleChange}></input>
//         <input type="text" name="surname" placeholder="Surname" onChange={this.handleChange}></input>
//         <input type="text" name="age" placeholder="Age" onChange={this.handleChange}></input>
//         <button type="submit">Send</button>
//         <button type="button"></button>
//       </form>
//     );
//   }
// }
export default Registration;
