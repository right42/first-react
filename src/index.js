import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


function NumberList(props){
  const numbers = props.numbers;
  let numberItems = numbers.map((number) => 
    <li key={number.toString()}>{number}</li>
  );

  return (
    <ul>{numberItems}</ul>
  )
}

const numbers = [1, 2, 3, 4, 7];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.querySelector('#root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

