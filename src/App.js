import React, { Component } from 'react';
import { fizzOrBuzz } from "./utils.js"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
  }

  increment = () => {
    const { counter } = this.state
    if (counter < 100) {
      this.setState({ counter: counter + 1 })
    }
  }

  decrement = () => {
    const { counter } = this.state
    if (counter > 1) {
      this.setState({ counter: counter - 1 })
    }
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <p onClick={this.increment}>Increment</p>
        <p onClick={this.decrement}>Decrement</p>

        <h1>{counter}</h1>
        <h1>{fizzOrBuzz(counter)}</h1>
      </div>
    );
  }
}

export default App;
