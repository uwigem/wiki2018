import React, { Component } from 'react';

// LoadingScreen is the page that appears when the page is loading.
export class LoadingScreen extends Component {
    render() {
        return (
            <div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <h1>Page loading... <img alt="loading" src="http://2018.igem.org/wiki/images/3/34/T--Washington--LoadingSpin.svg" /></h1>
            </div>
        );
    }
}