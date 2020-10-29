import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
// import Contador from './components/Contador';
import Car from './components/Car';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Contador /> */}
    <Car marca="Opel" modelo="Astra" aceleracion="30" velmax="140"/>
    <Car marca="Seat" modelo="Ibiza" aceleracion="10" velmax="100"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
