// change require to es6 import style
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

// let num = 0;

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));

// function updateNum() {
//   let text;
//   if (num !== 1) {
//     text = 'You\'ve been on this page for '.concat(num).concat(' seconds');
//   } else {
//     text = 'You\'ve been on this page for 1 second';
//   }
//   document.getElementById('main').innerHTML = text;
//   num += 1;
// }

// setInterval(updateNum, 1000);
