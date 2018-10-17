import React, { Component } from 'react';
import './LoadingScreen.css';

// LoadingScreen is the page that appears when the page is loading.
export class LoadingScreen extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center', margin: 'auto', width: '100%' }}>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <h1 style={{ margin: 'auto', width: '100%', textAlign: 'center', color: '#420dab', fontSize: 50 }}>Page loading</h1>
                <div className="sk-circle">
                    <div className="sk-circle1 sk-child"></div>
                    <div className="sk-circle2 sk-child"></div>
                    <div className="sk-circle3 sk-child"></div>
                    <div className="sk-circle4 sk-child"></div>
                    <div className="sk-circle5 sk-child"></div>
                    <div className="sk-circle6 sk-child"></div>
                    <div className="sk-circle7 sk-child"></div>
                    <div className="sk-circle8 sk-child"></div>
                    <div className="sk-circle9 sk-child"></div>
                    <div className="sk-circle10 sk-child"></div>
                    <div className="sk-circle11 sk-child"></div>
                    <div className="sk-circle12 sk-child"></div>
                </div>
            </div>
        );
    }
}