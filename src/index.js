import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './tailwind.output.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
<<<<<<< HEAD
      <Route path='/ProyectoAnalisisII2022' element={<App/>}/>
=======
      <Route path='/' element={<App/>}/>
>>>>>>> fd523ba6fa15b7cd81a9720097e03019c963b6d9
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
