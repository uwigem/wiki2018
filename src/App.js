import React, { Component } from 'react';
import { DebugHeader } from './debugfiles/DebugHeader'

// App is the main class that encompasses all the other classes.
// See the render method.
class App extends Component {
    // Set up debugURL
    constructor(props) {
        super(props);
        this.debugURL = "";
    }

    // When component mounts, determine if this is on the live website or not.
    // Post:    Sets `this.pageTitle` to be a string `this.debugURL` if not live, 
    //          or to the text after `Team:Washington` in the url.
    //              eg. "2018.igem.org/Team:Washington/Design" -> "/Design"
    componentWillMount() {
        let splitTitle = window.location.href.split("igem");
        this.pageTitle = this.debugURL;
        this.debugMode = true;
        if (splitTitle.length === 2) {
            let pageURL = splitTitle[1].split("Team:Washington")[1];
            this.pageTitle = pageURL;
            this.debugMode = false;
        }
    }

    // Render the page. 
    // Pre:     The page is either locally hosted or existing on the iGEM Website.
    render() {
        return (
            <div className="App">
                {/* Check for if the page is localhost or actually on igem website */}
                {this.debugMode &&
                    <DebugHeader />
                }

                {/* ASDFTest page */}
                {this.pageTitle === "/ASDFTest" &&
                    <h1>page is asdftest</h1>
                }

                {/* HOME PAGE */}
                {this.pageTitle === "" &&
                    <h1>Welcome to the main page</h1>
                }

            </div>
        );
    }
}

export default App;
