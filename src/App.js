import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component { 
 //getName(surname){
   // return "Alexey " + surname;
  //}

  constructor(){
    super();
    this.name = "Alex";
  }
  
  render(){
  var myStyle = {
    color:'black',
    fontSize:16
  }
  return (
    <div className="App">
      <header className="App-header">  
        <input type="button"></input>
        <input type="button"></input>
        <input type="button"></input>
        <input type="button"></input>
      </header>
      <div className="App-div">
        <img src={logo} className="App-logo" alt="logo" />  
        <h1 style={myStyle}> Hello {this.name} </h1> 
      </div>
    </div>
  );
  }
}

class Hello extends React.Component{
  render(){
    return <h1>Hello, World</h1>;
    }
}
export default Hello;
