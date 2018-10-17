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

document.title = "Washington iGEM";

let IEOREDGE = false;

switch (browser && browser.name) {
    case 'edge':
        IEOREDGE = true;
        nSupp(browser.name);
        break;
    case 'ie':
        IEOREDGE = true;
        nSupp(browser.name);
        break;
    default:
        IEOREDGE = false;
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

window.W_IGEM_VERSION = '1.0.5'

ReactDOM.render(<App IEOREDGE={IEOREDGE} />, document.getElementById('root'));