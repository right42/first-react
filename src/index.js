import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function WarningBanner(props){
  if(!props.warn){
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  )
}


class Page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showWaring : true
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(){
    this.setState((state) => ({
      showWaring : !state.showWaring
    }));
  }

  render(){
    return (
      <div>
        <WarningBanner warn={this.state.showWaring}/>
        <button onClick={this.handleToggleClick}>
          {this.state.showWaring ? 'hide' : 'show'}
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <Page />,
  document.querySelector('#root')
)


// class LoginControl extends React.Component {
//   constructor (props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {
//       isLoggedIn : false
//     }
//   }

//   handleLoginClick(){
//     this.setState({isLoggedIn : true});
//   }

//   handleLogoutClick(){
//     this.setState({isLoggedIn : false});
//   }

//   render(){
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if(isLoggedIn){
//       button = <LogoutButton onClick={this.handleLogoutClick}/>
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick}/>
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     )
//   }
// }

// function LoginButton(props){
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   )
// }

// function LogoutButton(props){
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   )
// }


// function UseGreeting(){
//   return <h1>Welcome back!</h1>
// }

// function GuestGreeting(){
//   return <h1>Please sign up.</h1>
// }

// function Greeting(props){
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn){
//     return <UseGreeting/>
//   } else {
//     return <GuestGreeting/>
//   }
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.querySelector('#root')
// )


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

