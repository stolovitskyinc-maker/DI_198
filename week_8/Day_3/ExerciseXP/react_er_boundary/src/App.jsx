import React, { Component } from 'react';

// ==========================================
// EXERCISE 1 COMPONENTS (Error Boundary Simulation)
// ==========================================

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '10px', border: '1px solid red', margin: '10px 0' }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

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
      <button onClick={this.handleClick} style={{ margin: '5px', padding: '5px 10px' }}>
        Counter: {this.state.counter}
      </button>
    );
  }
}

// ==========================================
// EXERCISE 3 COMPONENT (Child to be Unmounted)
// ==========================================

class Child extends Component {
  componentWillUnmount() {
    // Triggers an alert directly before being removed from the DOM
    alert("The component named Child is about to be unmounted.");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

// ==========================================
// EXERCISE 2 & 3 COMPONENT (Lifecycle Review)
// ==========================================

class LifecycleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true // Exercise 3: State property to control Child visibility
    };
  }

  componentDidMount() {
    // Exercise 2 Part II: Timer updates color to yellow after 2 seconds
    this.timer = setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  // Exercise 2 Part I: Controlled render updates
  shouldComponentUpdate() {
    return true; 
  }

  // Exercise 2 Part III: Captures a snapshot right before changes hit the DOM
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null; 
  }

  // Exercise 2 Part II & III: Fires after the DOM has updated
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update");
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  }

  // Exercise 3: Function to change show status to false
  deleteHeader = () => {
    this.setState({ show: false });
  }

  render() {
    const displayColor = this.state.favoriteColor === "yellow" 
      ? "yellow1" 
      : this.state.favoriteColor;

    return (
      <div>
        {/* Exercise 3: Conditional rendering based on this.state.show */}
        {this.state.show && <Child />}
        
        <h2>My Favorite Color is {displayColor}</h2>
        
        <button onClick={this.changeColor} style={{ marginRight: '10px' }}>
          Change Color to Blue
        </button>

        {/* Exercise 3: Delete Button */}
        <button onClick={this.deleteHeader}>
          Delete Header
        </button>
      </div>
    );
  }
}

// ==========================================
// MAIN APP COMPONENT (Renders all exercises separated)
// ==========================================

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      
      {/* --- EXERCISE 1 SECTION --- */}
      <section id="exercise-1" style={{ marginBottom: '40px', borderBottom: '2px dashed #ccc', paddingBottom: '40px' }}>
        <h1>Exercise 1: React Error Boundary Simulation</h1>
        
        <div>
          <h3>Simulation 1: Two counters under one Error Boundary</h3>
          <ErrorBoundary>
            <BuggyCounter />
            <BuggyCounter />
          </ErrorBoundary>
        </div>

        <div>
          <h3>Simulation 2: Each counter in its own Error Boundary</h3>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
        </div>

        <div>
          <h3>Simulation 3: Counter without an Error Boundary</h3>
          <BuggyCounter />
        </div>
      </section>

      {/* --- EXERCISE 2 & 3 SECTION --- */}
      <section id="exercise-2-and-3">
        <h1>Exercise 2 & 3: Lifecycle Phases</h1>
        <LifecycleContainer />
      </section>

    </div>
  );
}

export default App;
