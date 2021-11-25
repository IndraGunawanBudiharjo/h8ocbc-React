import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// react router
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 

// react redux
import { Provider } from 'react-redux';

// component react
import Home from './pages/Home.jsx'
import Contact from './pages/Contact';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />}>contact
                <Route path=":name" element={<Contact />} />
              </Route>
            </Route>     
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
