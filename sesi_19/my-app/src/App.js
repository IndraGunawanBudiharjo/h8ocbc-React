import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react'

class App extends Component {

  constructor () {
    super() // instantiate parent component di sini
    this.state = {
      title: "Session 19 - React JS",
      name: "Indra"
    }
  }

  changeTitle = (event) => { // kudu pake arrow function
    console.log(event)
    this.setState({
      title: "Final Project - React JS"
    })
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          {this.state.title} by {this.state.name}
        </h2>
        <h3>
          Score: {this.props.score}
        </h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={(e) => this.changeTitle(e)} // pake arrow juga
        >
          Change Title
        </button>
      </header>
    </div>
    )
  }
}

App.propTypes = {
  score: PropTypes.number
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
