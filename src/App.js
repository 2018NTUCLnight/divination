import React, { Component } from 'react';
import Ask from './Ask.js';
import Answer from './Answer.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      question: '',
      display: 'ask'
    }
  }
  changeDisplay = (target) => {
    this.setState({ display: target });
  }
  askQuestion = (question) => {
    this.setState({ question: question });
    this.changeDisplay('answer');
  }
  render() {
    var display = [];
    switch(this.state.display){
      case 'ask':
        display.push(<Ask askquestion={this.askQuestion} />);
        break;
      case 'answer':
        display.push(<Answer 
                      answers={this.props.database} 
                      changedisplay={this.changeDisplay} 
                      question={this.state.question} 
                    />);
        break;
      default:
        break;
    }
    return (
      <div className={this.state.display}>
        {display}
      </div>
    );
  }
}

export default App;
