import React from 'react';
import logo from './logo.svg';
import './App.css';

//import Header from './Header';
//import Main from './Main';
//import Footer from './Footer';
import './style.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30
  }

  if (hours < 12) 
  {
    timeOfDay = "morning";
    styles.color = "#04756F"
  }
  else if (hours >= 12 && hours < 17)
  {
    timeOfDay = "afternoon";
    styles.color = "#2E0927"
  }
  else
  {
    timeOfDay = "night";
    styles.color = "#D90000"
  }


  return (
    <div>
      <h1 style={styles}>Good {timeOfDay}!</h1>
      <h2 style={{fontSize: "20px", color: "blue"}}>Shoyab Azmal</h2>
    </div>
  )
}

/*class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "Yes"
    }
  }
  render() {
    return (
      <div>
        <h1>Is state important to know? {this.state.answer}</h1>
      </div>
    )
  }
}*/

export default App;
