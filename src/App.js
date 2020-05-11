import React, { Component } from 'react';
import { fizzOrBuzz } from "./utils.js"
import UserInput from "./UserInput"

import "./app.css"
// no longer a mistake
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
    i am going to put a massive error right here
  }

  render() {
    const { counter } = this.state
    const x = 5
    return (
      <div className="site-container">
        <div className="display">
          <UserInput onClick={this.decrement} type="decrement" />
          <h1 className="counter">{counter}</h1>
          <UserInput onClick={this.increment} type="increment" />
        </div>

        <h1 className="fizz-buzz">{fizzOrBuzz(counter)}</h1>
      </div>
    );
  }
}

export default App;
