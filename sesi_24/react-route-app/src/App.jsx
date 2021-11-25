import './App.css';
import { BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'; 

import { 
      useDispatch, // dipakai untuk melempar action
      useSelector  // dipakai untuk mengambil state dari sebuah store
} from 'react-redux';

function App() {
  const state = useSelector((state) => state)
  console.log("state:", state)
  const dispatch = useDispatch()

  const incrementCounter = () => dispatch({ type: 'INCREMENT' })
  const decrementCounter = () => dispatch({ type: 'DECREMENT' })
  const customCounter = (value = 10) => dispatch({ type: 'SET_COUNTER', payload: state.counter + value })

  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div>
        <h3>Counter Time!</h3>
        <h3>{ state.counter }</h3>
        <button onClick={incrementCounter}>Add by 1</button>
        <button onClick={decrementCounter}>Substract by 1</button>
        <button onClick={() => customCounter(10)}>Add by 10</button>

      </div>
      <Outlet />
    </div>
  );
}

export default App;
