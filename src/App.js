import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
      query: "",
    };
    mirror= (event)=>{
    	this.setState({
        	query: event.target.value,
        })
    };
  render() {
    return (
      <div className="App">
        <div className="container">
          <input type="text" placeholder="Say Something" onChange={this.mirror} />
          <p className="echo">Echo:</p>
		      <p>{this.state.query}</p>
        </div>
      </div>
    );
  }
}

export default App;
