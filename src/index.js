import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var dataBase = {
  quotes: [
    '木末芙蓉花，山中發紅萼。\n澗戶寂無人，紛紛開且落。',
    '飛鳥去不窮，連山復秋色。\n上下華子岡，惆悵情何及。',
    '禮節乃相去，顦顇如芻狗。',
    '不如飲美酒，被服紈與素。',
    '東董送屋冬送沃，聲韻考試不會過',
    '豎儒，幾敗而公事！'
  ],
  quotesrc: [
    '王維，〈辛夷塢〉',
    '王維，〈華子岡〉',
    '李賀，〈贈陳商〉',
    '佚名，〈古詩十九首．驅車上東門〉',
    '董同龢，《漢語音韻學》',
    '司馬遷，《史記．留侯世家》'
  ]
}

ReactDOM.render(<App database={dataBase} />, document.getElementById('root'));
registerServiceWorker();
