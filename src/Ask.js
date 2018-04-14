import React, { Component } from 'react';
import './Ask.css';

class Ask extends Component {
  constructor(props){
    super(props);
    this.state = {
      question: ''
    }
  }
  handleQuestion = (e) => {
    this.setState({ question: e.target.value });
  }
  submit = () => {
    this.props.askquestion(this.state.question);
    this.setState({ question: '' });
  }
  render() {
    return(
      <div className="Ask-Block">
        <h1>聽說是個運勢機</h1>
        <h2>以下開放善男信女提問blablabla:</h2>
        <textarea onChange={(e)=>this.handleQuestion(e)}/>
        <button onClick={()=>this.submit()} className="submit"> 確認 </button>
      </div>
    );
  }
}

export default Ask;