import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/common/Header';
import Grid from './components/Grid';
import GridLine from './components/GridLine';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './theme/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Grid />
    <GridLine />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
