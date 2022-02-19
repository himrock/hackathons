import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import RootReducer from './reducers/rootReducer'
import Root from './Root';

// const store = createStore(RootReducer);

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
