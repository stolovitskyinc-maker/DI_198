import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      inputValue: '',
      responseMessage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('/api/hello');
    const data = await response.json();
    this.setState({ message: data.message });
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const response = await fetch('/api/world', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post: this.state.inputValue })
    });

    const data = await response.json();
    this.setState({ responseMessage: data.message });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <h2>Post to Server:</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.responseMessage && <p>{this.state.responseMessage}</p>}
      </div>
    );
  }
}

export default App;