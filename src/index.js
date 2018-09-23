import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import './index.css';
import App from './App';
import { detect } from 'detect-browser';
const browser = detect();

const nSupp = (a) => {
    alert(`${a.toUpperCase()} is not entirely supported by Team Washington's Team Wiki. For best performance please use Firefox or Google Chrome! 
    
You may continue to use the site, but please note that there will be bugs and poor performance. Sorry for any inconvenience, and thank you!`);
}

switch (browser && browser.name) {
    case 'edge':
        nSupp(browser.name);
        break;
    case 'ie':
        nSupp(browser.name);
        break;
    default:
        break;
}

var config = {
    apiKey: "AIzaSyDCQF40jxKpF8So-kbj_uqtYKBnlGHVReA",
    authDomain: "wiki2018-987d7.firebaseapp.com",
    databaseURL: "https://wiki2018-987d7.firebaseio.com",
    projectId: "wiki2018-987d7",
    storageBucket: "wiki2018-987d7.appspot.com",
    messagingSenderId: "158742751002"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));