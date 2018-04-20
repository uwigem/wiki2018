import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let splitTitle = window.location.href.split("Team:Washington/");
        let pageURL = "";
        if (splitTitle.length == 2) {
            pageURL = splitTitle[1];
        }
        this.pageTitle = pageURL;

    }

    render() {
        return (
            <div className="App">
                {this.pageTitle === "" &&
                    <h1>debug mode</h1>

                }
                {this.pageTitle === "ASDFTest" &&
                    <h1>page is asdftest</h1>
                }
                {this.pageTitle !== "ASDFTest" &&
                    <h1>page is NOT ASDFTest</h1>
                }
            </div>
        );
    }
}

export default App;
