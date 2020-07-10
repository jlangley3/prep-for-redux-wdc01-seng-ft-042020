import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  renderDescription = () => {
    const remainder = this.state.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.state.count + upToNext}`;
  };
  render() {
    return (
      <div className="App">
        <Header renderDescription={this.renderDescription} value={this.state.count}/>
        <Counter add={this.increment} minus={this.decrement} value={this.state.count}/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1 className="App-title">Welcome to React</h1> */}
        <h3>{this.props.renderDescription()}</h3>
      </header>
    );
  }
}

class Counter extends Component {
  

  render() {
    return (
      <div className="Counter">
        <h1>{this.props.value}</h1>
        <button onClick={this.props.minus}> - </button>
        <button onClick={this.props.add}> + </button>
        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
