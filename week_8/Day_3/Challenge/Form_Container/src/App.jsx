import React, { Component } from "react";
import FormComponent from "./FormComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      vegan: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    
    // Using a ternary operator to determine value based on input type
    this.setState({
      [name]: type === "checkbox" ? checked : value
    });
  }

  render() {
    return (
      <FormComponent 
        handleChange={this.handleChange} 
        data={this.state} 
      />
    );
  }
}

export default App;
