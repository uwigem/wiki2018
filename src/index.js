import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';

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