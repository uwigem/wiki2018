import React, { Component } from 'react';
import { DebugHeader } from './debugfiles/DebugHeader';
import { LoadingScreen } from './components/LoadingScreen';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CustomAppBar } from './components/CustomAppBar';
import { MainPageContent } from './components/MainPageContent';
import Data from './data/Data';

import firebase from 'firebase';

window.addEventListener('unload', function () { });

/**
 * App is the main class that encompasses all the other classes.
 * See the render method.
 */
class App extends Component {
    // Set up debugURL
    constructor(props) {
        super(props);
        this.debugURL = "";
        this.name = "http://2018.igem.org/Team:Washington";
        this.state = {
            loading: true,
            data: new Data()       // data object can now be called by this.state.data
        }

        this.displayLoadingMessage = this.displayLoadingMessage.bind(this);
        this.getContentData = this.getContentData.bind(this);
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


        // TODO: REPLACE FIREBASE BEFORE WIKI FREEZE
        let dataRef = firebase.database().ref("/");
        dataRef.once("value", (snapshot) => {
            this.firebaseIsSet = true;
            this.setState({ contentData: snapshot.val() });
        });
        ////////////////////////////////////////////
    }

    /**
     * getContentData gets the page's content data. It grabs it from firebase
     * if wiki freeze has not happened yet
     * @return {object} page content data as a json object
     */
    getContentData() {
        if (this.firebaseIsSet && Date.now() < 1539835140000) { // Hardcoded value for Wiki freeze, just for security
            return this.state.contentData;
        } else {
            return this.state.data.getContentData();
        }
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
        setTimeout(() => {
            this.setState({ loading: false });
        }, 500);
    }

    /**
     * Render the page.
     * Pre:     The page is either locally hosted or existing on the iGEM Website.
     */
    render() {
        let a = this.displayLoadingMessage;
        let contentData = this.getContentData();
        return (
            <div className="App">
                <MuiThemeProvider theme={this.theme}>
                    {/* Check for if the page is localhost or actually on igem website */}
                    {this.debugMode &&
                        <DebugHeader />
                    }

                    <CustomAppBar name={this.name} pageTitle={this.pageTitle} data={this.state.data} a={a} />
                    <div style={{ marginTop: "40px" }}></div>

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
                            {/* IT IS IMPERITIVE THAT WHEN WE PUSH THIS CODE, THE ABSTRACT WILL APPEAR */}
                            {this.pageTitle === "" &&
                                <div>
                                    <MainPageContent />
                                </div>
                            }

                            {/* TEMPORARY MAIN PAGE */}
                            {this.pageTitle === "/TempMain" &&
                                //<TempMainPageContent />
                                <div>
                                    <MainPageContent />
                                </div>
                            }

                            {this.pageTitle === "/ContentTest" &&
                                <div>
                                    {/* <Content edit={false} pageTitle={this.pageTitle} a={a} data={this.state.data} contentData={contentData}/> */}
                                </div>
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
