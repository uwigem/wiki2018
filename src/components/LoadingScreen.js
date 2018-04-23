import React, { Component } from 'react';

// LoadingScreen is the page that appears when the page is loading.
export class LoadingScreen extends Component {
    render() {
        return (
            <div>
                <p className="centeredMid" >Page loading...<br /><img src="http://2018.igem.org/wiki/images/3/34/T--Washington--LoadingSpin.svg" /></p>
            </div>
        );
    }
}
