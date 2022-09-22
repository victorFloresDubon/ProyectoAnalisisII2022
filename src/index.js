import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './tailwind.output.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Registro from './components/login/Registro';
import Login from './components/login/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename={process.env.REACT_APP_BASENAME}>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/registro' element={<Registro/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
