import React, { Component } from 'react';
import './Answer.css';

class Answer extends Component {
  backToAsk = () => {
    this.props.changedisplay('ask');
  }
  render () {
    var randNum = Math.floor(Math.random()*this.props.answers.quotes.length*100)%this.props.answers.quotes.length;
    var question = this.props.question.split('\n'), questionText = [];
    for (let i = 0; i < question.length; ++i) {
      questionText.push(<h4> {question[i]} </h4>);
    }
    var answerQuotes = this.props.answers.quotes[randNum].split('\n'), quotes = [];
    for (let i = 0; i < answerQuotes.length; ++i) {
      quotes.push(<h4> {answerQuotes[i]} </h4>);
    }
    return(
      <div className="Answer-Block">
        <h1>占卜結果如下</h1>
        <div className="Block">
          <div className="text">
            <h2>問：</h2>
            <div className="block">
              {questionText}
            </div>
          </div>
          <div className="split" />
          <div className="text">
            <h2>答：</h2>
            <div className="block">
              <h4> {quotes} </h4>
              <h5> —— {this.props.answers.quotesrc[randNum]} </h5>
            </div>
          </div>
        </div>
        <button onClick={()=>this.backToAsk()} className="restart"> 還有問題 </button>
      </div>
    );
  }
}

export default Answer;