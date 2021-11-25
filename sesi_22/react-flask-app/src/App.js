import logo from './logo.svg';
import './App.css';
// import styles from './AppStyle.js'; // pake css in js
// import styles from './App.Module.js'; // pake module css
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PGreen = styled.p`
  font-size: 10pt;
  color: #77dd77;
`

const PBlue = styled.p`
  font-size: 30pt;
  color: lightblue;
`

function App() {
  const [placeholder, setPlaceholder] = useState('')
  const [stateIsChanged, setStateIsChanged] = useState(false)
  // const [ paragraphStyle, setParagraphStyle] = useState({
  //   backgroundColor: "lightskyblue"
  // })
  // const [paragraphClass, setParagraphClass] = useState(smallFont)

  useEffect(() => {
    fetch('/hello')
    .then(response => response.json())
    .then(({result}) => {
      console.log({result})
      setPlaceholder(result)
    });
  }, []);

  // const changeStyle = () => setParagraphClass(largeFont)
  const changeStyle = () => setStateIsChanged(!stateIsChanged)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <PGreen>
          { placeholder }
        </PGreen> */}
        <button onClick={changeStyle}>Change Style</button>
        {
          stateIsChanged ? 
          (<PGreen>{placeholder}</PGreen>) :
          (<PBlue>{placeholder}</PBlue>)
        }
        {/* <p style={paragraphClass}>
          { placeholder }
        </p> */}
        {/* <button onClick={changeStyle}>Change Background Color</button> */}
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
}

export default App;
