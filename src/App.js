import React, { Component } from 'react';
import { DebugHeader } from './debugfiles/DebugHeader';
import { LoadingScreen } from './components/LoadingScreen';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CustomAppBar } from './components/CustomAppBar';

var data = require("./data/Data.js");

/**
 * App is the main class that encompasses all the other classes.
 * See the render method.
 */
class App extends Component {
    // Set up debugURL
    constructor(props) {
        super(props);
        this.debugURL = "/ASDFTest";
        this.name = "http://2018.igem.org/Team:Washington";
        this.state = {
            loading: false,
            data: new data.Data()       // data object can now be called by this.state.data
        }

        this.displayLoadingMessage = this.displayLoadingMessage.bind(this);
    }

    /**
     * When component mounts, determine if this is on the live website or not.
     * @post    Sets `this.pageTitle` to be a string `this.debugURL` if not live, 
     *          or to the text after `Team:Washington` in the url.
     *           eg. "2018.igem.org/Team:Washington/Design" -> "/Design"
     */
    componentWillMount() {
        let splitTitle = window.location.href.split("igem");
        this.pageTitle = this.debugURL;
        this.debugMode = true;
        if (splitTitle.length === 2) {
            let pageURL = splitTitle[1].split("Team:Washington")[1];
            this.pageTitle = pageURL;
            this.debugMode = false;
        }
        console.log(this.pageTitle, this.debugMode);;
        this.setState({ loading: false });

        let displayConstants = this.state.data.getDisplayConstants(this.pageTitle);

        // Create mui theme from data colors. Don't modify this segment, modify Data.js
        // instead.
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: displayConstants.primaryColor
                },
                secondary: {
                    main: displayConstants.secondaryColor
                }
            }
        });

        this.theme = theme;
    }

    /**
     * displayLoadingMessage sets the state of loading to true. This is used
     * for in between pages
     * This function MUST be sent down as a prop to ALL the pages, so the
     * appropriate loading procedure takes place.
     * 
     * From now on, we will pass this down like this:
     * 
     *      <CustomView a={this.displayLoadingMessage} />
     *      
     *      in CustomView:
     * 
     *          render() {
     *              let a = this.props.a;
     *              return (
     *                  <div>   
     *                      <ChildView a={a} />
     *                      <a href="_____" onClick={a} />
     *                  </div>
     *              )
     *          }
     */
    displayLoadingMessage() {
        this.setState({ loading: true });
    }

    /**
     * Render the page.
     * Pre:     The page is either locally hosted or existing on the iGEM Website.
     */
    render() {
        let a = this.displayLoadingMessage;
        return (
            <div className="App">
                <MuiThemeProvider theme={this.theme}>
                    {/* Check for if the page is localhost or actually on igem website */}
                    {this.debugMode &&
                        <DebugHeader />
                    }

                    <CustomAppBar name={this.name} pageTitle={this.pageTitle} data={this.state.data} a={a} />

                    {!this.state.loading &&
                        <div>
                            {/* ASDFTest page */}
                            {this.pageTitle === "/ASDFTest" &&
                                <h1><br /><br /><br /><br /><br /><br />
                                    <a onClick={() => this.displayLoadingMessage()} style={{ color: "white" }} href={`${this.name}/TempMain`}>page is asdftest</a></h1>
                            }

                            {this.pageTitle === "/ASDFTestA" &&
                                <h1>Page is not asdftest</h1>
                            }

                            {/* HOME PAGE */}
                            {this.pageTitle === "" &&
                                <h1>Welcome to the main page</h1>
                            }

                            {/* TEMPORARY MAIN PAGE */}
                            {this.pageTitle === "/TempMain" &&
                                //<MainPage setLoading />
                                <div></div>
                            }
                        </div>
                    }

                    {this.state.loading &&
                        <LoadingScreen />
                    }
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
