import React, { Component } from 'react';
import { DebugHeader } from './debugfiles/DebugHeader';
import { LoadingScreen } from './components/LoadingScreen';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CustomAppBar } from './components/CustomAppBar';
// import { MainPageContent } from './components/MainPageContent';
import { ContentView } from './components/ContentView';
import { Footbar } from './components/Footbar';
import Data from './data/Data';

// comment out for production build
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
///

window.addEventListener('unload', function () { });

/**
 * App is the main class that encompasses all the other classes.
 * See the render method.
 */
class App extends Component {
    // Set up debugURL
    constructor(props) {
        super(props);
        this.debugURL = "/Human_Practices";
        this.name = "http://2018.igem.org/Team:Washington";
        this.state = {
            loading: true,
            data: new Data()       // data object can now be called by this.state.data
        }

        this.displayLoadingMessage = this.displayLoadingMessage.bind(this);
        this.getContentData = this.getContentData.bind(this);
        this.setEdit = this.setEdit.bind(this);

        // Images to prefetch:
        // 
        let imgs = [
            // Team images
            'http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png',
            "http://2018.igem.org/wiki/images/5/58/T--Washington--AerilynnTeam.jpg",
            "http://2018.igem.org/wiki/images/2/2f/T--Washington--AlanPic.jpg",
            "http://2018.igem.org/wiki/images/b/bc/T--Washington--AnastasiaTeam.jpg",
            "http://2018.igem.org/wiki/images/c/ce/T--Washington--AndrewTeam.jpg",
            "http://2018.igem.org/wiki/images/a/ac/T--Washington--AngelTeam.jpg",
            "http://2018.igem.org/wiki/images/1/1a/T--Washington--CharlieTeam.jpg",
            "http://2018.igem.org/wiki/images/5/5d/T--Washington--ChemayTeam.jpg",
            "http://2018.igem.org/wiki/images/5/50/T--Washington--DallasTeam.jpg",
            "http://2018.igem.org/wiki/images/9/99/T--Washington--SauroTeam.jpg",
            "http://2018.igem.org/wiki/images/2/20/T--Washington--GuTeam.jpg",
            "http://2018.igem.org/wiki/images/d/de/T--Washington--TPhotoDreycey.jpg",
            "http://2018.igem.org/wiki/images/1/1d/T--Washington--GraceTeam.jpg",
            "http://2018.igem.org/wiki/images/6/6c/T--Washington--HannahTeam.jpg",
            "http://2018.igem.org/wiki/images/f/fb/T--Washington--IshiraTeam.jpg",
            "http://2018.igem.org/wiki/images/e/e6/T--Washington--JayTeam.jpg",
            "http://2018.igem.org/wiki/images/4/49/T--Washington--JoshuaTeam.jpg",
            "http://2018.igem.org/wiki/images/e/e7/T--Washington--KarlTeam.jpg",
            "http://2018.igem.org/wiki/images/b/b2/T--Washington--KrithiTeam.jpg",
            "http://2018.igem.org/wiki/images/c/ca/T--Washington--RenaldoTeam.jpg",
            "http://2018.igem.org/wiki/images/7/77/T--Washington--SairandriTeam.jpg",
            "http://2018.igem.org/wiki/images/e/ec/T--Washington--SeaEunTeam.jpg",
            "http://2018.igem.org/wiki/images/7/7d/T--Washington--VeraTeam.jpg",
            "http://2018.igem.org/wiki/images/0/0c/T--Washington--WilliamTeam.jpg",
            "http://2018.igem.org/wiki/images/4/40/T--Washington--YoshiTeam.jpg",
            'http://2018.igem.org/wiki/images/3/3d/T--Washington--PNWMeetup.png',
            "http://2018.igem.org/wiki/images/7/78/T--Washington--CollabKeynoteSpeech.png",
            "http://2018.igem.org/wiki/images/2/2d/T--Washington--Panel.png",
            "http://2018.igem.org/wiki/images/c/c0/T--Washington--Ingrid.png",
            "http://2018.igem.org/wiki/images/5/5e/T--Washington--David.png",
            'http://2018.igem.org/wiki/images/5/5b/T--Washington--CindyWu.png',
            'http://2018.igem.org/wiki/images/4/45/T--Washington--Regina.png',
            'http://2018.igem.org/wiki/images/e/ec/T--Washington--RoyaTalk.png',

        ]
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
            },
            typography: {
                fontFamily: ["Raleway"]
            }
        });

        this.theme = theme;

        this.firebasePassIn = null;

        // Note: if anything ever happens to me (William), you can print out what is on firebase
        // and plug that in to Data.js. Then when you comment this part out, and the import statement
        // out, then you can get all the data.
        // COMMENT OUT FOR PRODUCTION
        this.firebasePassIn = firebase;
        let dataRef = firebase.database().ref("/");
        dataRef.on("value", (snapshot) => {
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
            return this.state.contentData.pageData;
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
     * setEdit is used in ContentView to set the certain element to edit
     * This is used later in the ContentEditor (TODO)
     * @param {string} page string of page to edit
     * @param {number} index index of the content box to edit
     */
    setEdit(page, index) {
        this.setState({ setEditData: { page, index } });
    }

    /**
     * Render the page.
     * Pre:     The page is either locally hosted or existing on the iGEM Website.
     */
    render() {
        let a = this.displayLoadingMessage;
        let contentData = this.getContentData();
        let pageIsEditor = this.pageTitle === "/Editor";
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

                            {/* keeping this failsafe in for now */}

                            <div style={{ minHeight: '100vh' }}> {/* Change minimum height */}
                                <ContentView setEdit={this.setEdit}
                                    setEditData={this.state.setEditData}
                                    edit={pageIsEditor}
                                    pageTitle={pageIsEditor ? contentData[0].pageTitle : this.pageTitle}
                                    a={a}
                                    data={this.state.data}
                                    contentData={contentData}
                                    firebase={this.firebasePassIn} />
                            </div>

                            <Footbar />
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
