import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

  
 ReactDOM.render(<App />, document.getElementById('root'));
 registerServiceWorker();



// shuffleData = data => {
//     let i = data.length - 1;
//     while (i > 0) {
//       const j = Math.floor(Math.random() * (i + 1));
//       const temp = data[i];
//       data[i] = data[j];
//       data[j] = temp;
//       i--;
//     }
//     return data;