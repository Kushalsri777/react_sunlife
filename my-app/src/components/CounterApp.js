import { Component } from "react";
export default class CounterApp extends Component {

  increment = (e) => {
    alert("Increment!....");
  };

  decrement = (e) => {
    alert("Decrement!....");
  };

  reset = (e) => {
    alert("Reset!....");
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment +1</button>
        <button onClick={this.decrement}>Decrement -1</button>
        <button onClick={this.reset}>Reset 0</button>
      </div>
    );
  }
}
