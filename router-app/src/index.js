import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from './components/LandingPage';
import CounterApp from './hooksapp/CounterApp';
import NotesApp from './hooksapp/NotesApp';
import AxiosApp from './axiosapp/AxiosApp';
import ContextApp from './hooksapp/ContextApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ContextApp/>
    
    
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
