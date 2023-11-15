import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

//setup for applying thunk to redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const shopStore=createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={shopStore}>
    <App />
  </Provider>
);


reportWebVitals();
