import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from './components/Header';
import reportWebVitals from './reportWebVitals';
import { Downloader } from './components/Downloader';
import { DownloadList } from './components/DownloadList';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Downloader/>
    <DownloadList/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
