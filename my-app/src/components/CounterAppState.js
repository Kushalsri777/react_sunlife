import { Component } from "react";
import Button from '@mui/material/Button';

export default class CounterApp extends Component {

    state = {
        count:0,
    };

  increment = () => {
    this.setState((prevState) => {
        return {
            count:prevState.count+1,
        };
    });
  };

  decrement = () => {
    this.setState((prevState) => {
        return {
            count:prevState.count-1,
        };
    });
  };

  reset = (e) => {
    this.setState((prevState) => {
        return {
            count:prevState.count=0,
        };
    });
  };

  render() {
    return (
      <div>
        <p>The counter is: {this.state.count}</p>
        <Button variant="contained" onClick={this.increment}>Increment +1</Button>
        <Button variant="contained" onClick={this.decrement}>Decrement -1</Button>
        <Button variant="contained" onClick={this.reset}>Reset 0</Button>
      </div>
    );
  }
}
