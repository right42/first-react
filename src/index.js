import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date : new Date()
    };
  }

  componentDidMount(){
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  tick(){
    this.setState({
      date : new Date()
    });
  }

  render(){
    return (
      <div>
        <h1>Hello, World</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

function tick(){
  ReactDOM.render(
    <Clock/>,
    document.querySelector('#root')
  )
}

setInterval(tick, 1000);


// setInterval(tick, 1000);

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello world.</h1>
//       <h1>It is {new Date().toLocaleTimeString()}</h1>
//     </div>
//   );

//   ReactDOM.render(
//     element,
//     document.querySelector('#root')
//   );
// }


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// class WelcomeClass extends React.Component {
//   render(){
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// function App(){
//   return (
//     <div>
//       <WelcomeClass name="Sara"/>
//       <WelcomeClass name="Cahal"/>
//       <Welcome name="Edite"/>
//     </div>
//   )
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

