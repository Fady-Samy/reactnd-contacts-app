import React, { Component } from 'react';
import Game from './Game';
import Score from './Score';

class App extends Component {

  state={
    numQuestions : 0,
    numCorrect : 0
  };

  handleAnswer=(answerStatus)=>{
    if(answerStatus){
      this.setState(currState =>({
        numCorrect: currState.numCorrect + 1,
      }));
    }
    this.setState(currState =>({
      numQuestions: currState.numQuestions + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="game">
          <h2>Mental Math</h2>
          <Game handleAnswer = {this.handleAnswer}/>
          <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}/>
        </div>
      </div>
    );
  }
}

export default App;
