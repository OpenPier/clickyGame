import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


 const App = () =>  {
  
     return (
       <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Clicky Game</h1>
         </header>

         <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
         </p>
       </div> 
 )};
  

export default App;


// shuffleData = data => {
//   let i = data.length - 1;
//   while (i > 0) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = data[i];
//     data[i] = data[j];
//     data[j] = temp;
//     i--;
//   }
//   return data;}
