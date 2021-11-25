// import './App.css';
import React, { useState } from 'react';
import PersonInformation from './components/PersonInformation';
import FetchComponent from './components/FetchComponent';
import FunctionalClock from './components/FunctionalClock';
import ClassClock from './components/ClassClock';
// import styles from './AppStyle'

function Header() {
  return (
    <header className="header">
      <h1>My First React App</h1>
    </header>
  )
}

function Content() {
  return (
    <div className="content">
      <p>
        Silakan isikan dengan 
        paragraf yang kamu kehendaki
      </p>
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">
      <p>&copy; My self - 2021</p>
    </div>
  )
}

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      Count: {count} <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </div>

  )
}

function App() {

  return ( 
    <>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Clock</span>
      </nav>
      <div className="container-lg mt-4 pt-4">
        <div className="row justify-content-center">
          <div className="col-4">
            <FunctionalClock />
          </div>
          <div className="col-4">
            <ClassClock />
          </div>
        </div>
          
         
          <hr /> 
          
        {/* <FetchComponent /> */}
        {/* <Header />
        <hr />
        <Content />
        <hr />
        <PersonInformation />
        <hr />
        <Counter initialCount={0}/>
        <hr />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;
