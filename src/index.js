import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var dataBase = {
  quotes: [
    '加油',
    '幫你QQ'
  ],
  quotesrc: [
    '佚名',
    '我'
  ]
}

ReactDOM.render(<App database={dataBase} />, document.getElementById('root'));
registerServiceWorker();
