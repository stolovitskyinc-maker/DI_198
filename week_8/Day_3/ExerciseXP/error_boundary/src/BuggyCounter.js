import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
    return (
      <button 
        onClick={this.handleClick} 
        style={{ padding: '10px', fontSize: '16px', margin: '5px' }}
      >
        Counter: {this.state.counter}
      </button>
    );
  }
}

export default BuggyCounter;
