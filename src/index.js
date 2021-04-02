import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const App1=<App test={1234}/>;
// console.log(App1);

const someFn = (text) => `${text} 32111111`

ReactDOM.render(
  <React.StrictMode>
    {/*<App test={123}/>*/}
    <App test={someFn}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
