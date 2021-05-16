import React, { Component } from 'react';

class Game extends Component {

    constructor(props){
        super(props);
        const valuesArray = this.makeNewQuestion();
        this.state = {
            value1: valuesArray[0],
            value2: valuesArray[1],
            value3: valuesArray[2],
            proposedAnswer : valuesArray[3]
        };
    }

    //Make New Values Question Function
    makeNewQuestion = () =>{
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
        return [value1,value2,value3,proposedAnswer];
    };

    //Handle The Answer when button is cliked
    handleAnswer = (event) =>{
        //Whatever the answer, the state will change with new values so:
        const newValuesArray = this.makeNewQuestion();
        this.updateState(newValuesArray);
        //Now to check if answer is right or wrong
        const answerChoosed = event.target.name;
        const answerStatus = this.checkAnswer(answerChoosed);
        this.props.handleAnswer(answerStatus); 
    };

    //Update the state after answer with new values
    updateState = (newValuesArray)=>{
        this.setState({
            value1: newValuesArray[0],
            value2: newValuesArray[1],
            value3: newValuesArray[2],
            proposedAnswer : newValuesArray[3]
        });
    };

    //Check whether answer choosed is right or wrong
    checkAnswer = (answerChoosed) =>{
        const {value1, value2, value3, proposedAnswer} = this.state;
        const correctAnswer = value1 + value2 + value3;
        if(correctAnswer === proposedAnswer && answerChoosed==='true'){
            return true;
        }else if(correctAnswer !== proposedAnswer && answerChoosed==='false'){
            return true;
        }else{
            return false;
        }
    }

    render() {
        //Getting values to display from state instead of writing this.state.valueX every time
        const {value1, value2, value3, proposedAnswer} = this.state;
        return (
            <div>
                <div className="equation">
                <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
                </div>
                <button name="true" onClick={this.handleAnswer}>True</button>
                <button name="false" onClick={this.handleAnswer}>False</button>
            </div>
        );
    }
}

export default Game;