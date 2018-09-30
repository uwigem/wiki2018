import React, { Component } from 'react';
import './katex.css';
import { BlockMath } from 'react-katex';
import './ContentView.css';
import { MainPageContent } from './MainPageContent';
import { ContentImage } from './ContentImage';
import { CRAFTY } from './CRAFTY';
import { Team } from './Team';
import { HeaderBar } from './HeaderBar';
import { SubImages } from './SubImages';
import remark from 'remark';
import reactRenderer from 'remark-react';
import Fade from 'react-reveal/Fade';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Spybar } from './Spybar';
import { Tabs } from './Tabs';

configureAnchors({ offset: -64, scrollDuration: 1000 }); // -18 for hide, -64 for no hide

// ContentView is the main content hub that controls a certain page's
// content. It also contains some logic for editing.
export class ContentView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentData: null,
            setEditData: null,
            firebase: null,
            tempEditType: "",
            tempEditContent: "",
            canEdit: false,
            currentEmail: '',
            pageTitle: '',
            newPage: '',
            isContent: false,
            spyPositions: {},
            initPositions: {}
        };

        this.possibleTypes = ["MARKDOWN", "LATEX", "IMAGE", "SPECIAL"];
        window.scrollTo(0, 0);

        // Scroll spy. Does nothing if no references. Takes initial positions of
        // references and then updates a position of them on the screen every time
        // user scrolls
        window.addEventListener('scroll', () => {
            let r = this.state.initPositions;
            let objKeys = Object.keys(r);
            if (objKeys.length > 0) {
                let temp = this.state.spyPositions;
                let tempY = window.scrollY;
                objKeys.forEach(d => {
                    temp[d] = r[d] - tempY;
                });
                this.setState({ spyPositions: temp });
            }
        });

        // Set an interval to grab references once they appear. Checks every
        // 20 milliseconds until it happens, then it clears the interval.
        // This is crucial for the scroll spy to work.
        let getRefs = window.setInterval(() => {
            let objKeys = Object.keys(this.refs);
            if (objKeys.length > 0) {
                let temp = this.state.initPositions;
                objKeys.forEach(d => {
                    let domNode = ReactDOM.findDOMNode(this.refs[d]);
                    if (domNode) {
                        temp[d] = domNode.getBoundingClientRect().top;
                    }
                });
                this.setState({ initPositions: temp });
                window.clearInterval(getRefs);
            }
        }, 20);

        this.minWidth = 1000;
        window.addEventListener("resize", this.updateDim);
    }

    // on mount, check for email
    componentWillMount() {
        this.setState({
            contentData: this.props.contentData,
            setEditData: this.props.setEditData,
            firebase: this.props.firebase,
            pageTitle: this.props.pageTitle
        });

        if (this.props.edit) {
            this.props.firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setState({ canEdit: true, currentEmail: user.email });
                } else {
                    let provider = new this.props.firebase.auth.GoogleAuthProvider();
                    this.props.firebase.auth().signInWithPopup(provider).then((result) => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        // var token = result.credential.accessToken;
                        // The signed-in user info.
                        var user = result.user;
                        // console.log(user.email);
                        let splitEmail = user.email.split("@")[1];
                        if (splitEmail === "uw.edu" ||
                            splitEmail === "washington.edu" ||
                            splitEmail === "u.washington.edu") {
                            this.setState({ canEdit: true, currentEmail: user.email });
                        } else {
                            alert("email not allowed, your email has been logged and will be reported to igem administration");
                            this.props.firebase.database().ref('evilPeople').push(user.email);
                        }
                        // ...
                    }).catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        // ...
                        console.log(errorCode, errorMessage, email, credential, "error, email did not work");
                    });
                }
            });
        }

        if (window.innerWidth <= this.minWidth) {
            this.setState({ minimized: true });
        }
    }

    // update if receive connection to firebase
    componentWillReceiveProps(nextProps) {
        this.setState({
            contentData: nextProps.contentData,
            setEditData: nextProps.setEditData,
            firebase: this.props.firebase
        });
    }

    /**
     * filterToPage takes the current contentData provided by the parent element (App.js)
     * and grabs the relevant data to the current selected page.
     * 
     * If no page is found, it returns null
     * @return page data
     */
    filterToPage() {
        if (this.state.contentData) {
            let index = 0;
            for (let content of this.state.contentData) {
                if (content.pageTitle === this.state.pageTitle) {
                    this.pageIndex = index;
                    return content;
                }
                index++;
            }
        }
        return null;
    }

    /**
     * storeWhoEdit will store a user's edit and also keep track of what time
     * it was edited. It also stores the change, so we can back up if we want.
     * This function will allow us to see any sabotage and revoke access.
     */
    storeWhoEdit() {
        let email = this.state.currentEmail;
        let tempEditContent = this.state.tempEditContent;
        let pageTitle = this.state.pageTitle;
        let fbUID = this.props.firebase.auth().currentUser ? this.props.firebase.auth().currentUser : null;
        let uid = fbUID ? fbUID.uid : '';
        let displayName = fbUID && fbUID.displayName ? fbUID.displayName : '';
        let store = {
            email, tempEditContent, uid, displayName
        };
        this.props.firebase.database().ref(`editData/${pageTitle}`).push({ ...store, timestamp: this.props.firebase.database.ServerValue.TIMESTAMP }, () => {
            this.setState({ setEditData: null, tempEditContent: null, tempEditType: null });
        });
    }

    /**
     * createSpecial is used for generating special divs from our schema.
     * For example, the home page's large title page, team page, etc.
     * @param {string} data name of the special object 
     * @return {object} special object, or stub div if undefined. 
     */
    createSpecial(data) {
        let returnDiv = null;
        let splitData = data.split('\n');
        let name = splitData[0].trim();
        switch (name) {
            case "HOMEPAGE":
                let restParams = splitData.slice(1);
                let restParamsObj = {};
                restParams.forEach(d => {
                    let KV = d.split("=");
                    let K = KV[0].trim();
                    let V = KV[1].trim();
                    restParamsObj[K] = V;
                });
                returnDiv = <div><MainPageContent params={restParamsObj} /></div>;
                break;
            case "CRAFTY":
                returnDiv = <div><CRAFTY text={splitData.slice(1).join()} /></div>;
                break;
            case "SECTION":
                let id = splitData[1];
                returnDiv = <div id={`spy-${id}`} ref={`spy-${id}`}>
                    <ScrollableAnchor id={id}>
                        <div >
                        </div>
                    </ScrollableAnchor>
                </div>
                break;
            case "HEADER":
                let restParamsH = splitData.slice(1);
                let restParamsObjH = {};
                restParamsH.forEach(d => {
                    let KV = d.split("=");
                    let K = KV[0].trim();
                    let V = KV[1].trim();
                    restParamsObjH[K] = V;
                });
                returnDiv = <div><HeaderBar params={restParamsObjH} /></div>
                break;
            case "TEAM":
                let restParamsTeam = splitData.slice(1);
                let restParamsArr = [];
                restParamsTeam.forEach(d => {
                    let KVs = d.split(";");
                    let obj = {};
                    KVs.forEach(e => {
                        let KV = e.split("=")
                        let K = KV[0].trim();
                        let V = KV[1].trim();
                        obj[K] = V;
                    });
                    restParamsArr.push(obj);
                })
                returnDiv = <div><Team data={restParamsArr} /></div>
                break;
            case "SUBIMAGES":
                let maxImagesPerRow = Number(splitData[1].split("=")[1].trim());
                let restParamsSub = splitData.slice(2);
                let restParamsArrSub = [];
                restParamsSub.forEach(d => {
                    let KVs = d.split(";");
                    let obj = {};
                    KVs.forEach(e => {
                        let KV = e.split("=")
                        let K = KV[0].trim();
                        let V = KV[1].trim();
                        obj[K] = V;
                    });
                    restParamsArrSub.push(obj);
                })
                returnDiv = <div><SubImages maxImagesPerRow={maxImagesPerRow} data={restParamsArrSub} /></div>
                break;
            case "SEP":
                returnDiv = <div style={{
                    margin: 'auto',
                    marginTop: 30,
                    marginBottom: 5,
                    width: '33%',
                    height: 5,
                    backgroundColor: '#420dab'
                }}> </div>;
                break;
            case "TAB":
                let tabData = data.split("===").slice(1);
                let tabObjs = tabData.map(d => {
                    let dSplit = d.split('\n');
                    let title = dSplit[1]
                    let data = dSplit.slice(2).join('\n');
                    return { title, data };
                });
                returnDiv = <div><Tabs tabObjs={tabObjs} /></div>
                break;
            default:
                returnDiv = <div>stub div</div>;
                break;
        }
        return returnDiv;
    }

    /**
     * generateSegment will parse through the current object's data and generate divs
     * based on the type.
     * @param {object} data data object 
     * @param {number} index index of content item
     * @return {object} returns the object associated with the type.
     */
    generateSegment(data, index, newContentData) {
        // This part will parse the content and store some of the default segment types
        // otherwise it calls on this.createSpecial() which will give some further types.
        let returnDiv = null;
        switch (data.type) {
            case "MARKDOWN":
                returnDiv = <div style={{ marginLeft: '5%', marginRight: '5%' }}>
                    <Fade clear cascade>
                        {remark().use(reactRenderer).processSync(data.data).contents}
                    </Fade>
                </div>
                break;
            case "LATEX":
                returnDiv = <BlockMath style={{ marginLeft: '5%', marginRight: '5%' }}>{data.data}</BlockMath>;
                break;
            case "IMAGE":
                let params = data.data.split(',');
                let restParams = params.slice(2);
                let restParamsObj = restParams.map(d => {
                    let KV = d.split(":");
                    let K = KV[0].trim();
                    let V = KV[1].trim();
                    return { K, V }
                });
                returnDiv = <ContentImage style={{ marginLeft: '5%', marginRight: '5%' }} imageUrl={params[0].trim()} alt={params[1].trim()} params={restParamsObj} />;
                break;
            case "SPECIAL":
                returnDiv = this.createSpecial(data.data);
                break;
            default:
                returnDiv = <div>stub div</div>;
                break;
        }

        // Checks if the isEdit is active for this segment
        let isEdit = false;
        if (this.props.edit && this.state.setEditData && this.state.setEditData.index === index) {
            isEdit = true;
        }

        // Returns the segment wrapped around a lot of editing logic.
        // This is never used if using hard-coded data.
        return (<div key={"segment" + index} className={`${this.props.edit ? "editBorder" : ""} ${isEdit ? "greenBorder" : ""}`}>
            {returnDiv}
            {this.props.edit &&
                <div>
                    {!isEdit &&
                        <div>
                            <button onClick={() => {
                                this.props.setEdit(this.state.pageTitle, index);
                                this.setState({ tempEditContent: null, tempEditType: null });
                            }}>edit</button>

                            <button style={{ margin: 10 }} onClick={() => {
                                let listOfData = newContentData;
                                listOfData.content.splice(index, 0, { type: "MARKDOWN", data: "Insert text" });
                                this.props.firebase.database().ref(`pageData/${this.pageIndex}`).set(listOfData);
                                this.setState({ setEditData: null, tempEditContent: null, tempEditType: null });
                            }}>insert before</button>

                            <button style={{ margin: 10 }} onClick={() => {
                                let listOfData = newContentData;
                                listOfData.content.splice(index + 1, 0, { type: "MARKDOWN", data: "Insert text" });
                                this.props.firebase.database().ref(`pageData/${this.pageIndex}`).set(listOfData);
                                this.setState({ setEditData: null, tempEditContent: null, tempEditType: null });
                            }}>insert after</button>

                            <button onClick={() => {
                                let listOfData = newContentData;
                                listOfData.content.splice(index, 1);
                                this.props.firebase.database().ref(`pageData/${this.pageIndex}`).set(listOfData);
                                this.setState({ setEditData: null, tempEditContent: null, tempEditType: null });
                            }}>delete</button>
                        </div>

                    }

                    {isEdit &&
                        <div>
                            <select value={this.state.tempEditType !== null ? this.state.tempEditType : data.type} onChange={(e) => {
                                this.setState({ tempEditType: e.target.value });
                            }}>
                                {this.possibleTypes.map((d) => {
                                    return <option value={d} key={d}>{d}</option>
                                })}
                            </select>
                            <button onClick={() => {
                                let listOfData = newContentData;
                                listOfData.content[index] = {
                                    data: this.state.tempEditContent !== null ? this.state.tempEditContent : data.data,
                                    type: this.state.tempEditType !== null ? this.state.tempEditType : data.type
                                };
                                if (this.state.pageTitle !== "/Team" || this.state.currentEmail.indexOf("wkwok16") !== -1) {
                                    this.props.firebase.database().ref(`pageData/${this.pageIndex}`).set(listOfData);
                                }
                                this.storeWhoEdit();
                            }}>submit</button>
                            <button onClick={() => {
                                this.setState({ setEditData: null, tempEditContent: null, tempEditType: null });
                            }}>cancel</button>
                            <br />
                            <textarea style={{ margin: "auto" }} cols={100} rows={30} value={this.state.tempEditContent !== null ? this.state.tempEditContent : data.data}
                                onChange={(e) => {
                                    this.setState({ tempEditContent: e.target.value });
                                }} />
                        </div>
                    }

                </div>
            }
        </div>)
    }

    /**
     * submitNewPage will take whatever is in the input box and create a new page
     * @pre the new page must begin with a "/"
     */
    submitNewPage() {
        if (this.state.newPage && this.state.newPage[0] === "/") {
            let newPageToAdd = { pageTitle: this.state.newPage, isContent: this.state.isContent };
            let modified = this.state.contentData;
            modified.push(newPageToAdd);
            this.props.firebase.database().ref(`pageData`).set(modified, () => {
                this.setState({ newPage: '', pageTitle: this.state.newPage, isContent: false });
            });
        } else {
            alert("error, invalid string");
        }

    }

    /**
     * Updates the dimension of the page. Recalculates the overall positions of content on the page
     * for if there are any items that require a spy bar
     */
    updateDim = () => {
        if (window.innerWidth <= this.minWidth && !this.state.minimized) {
            this.setState({ minimized: true });
        } else if (window.innerWidth > this.minWidth && this.state.minimized) {
            this.setState({ minimized: false });
        }

        let objKeys = Object.keys(this.refs);
        if (objKeys.length > 0) {
            let temp = this.state.initPositions;
            objKeys.forEach(d => {
                let domNode = ReactDOM.findDOMNode(this.refs[d]);
                if (domNode) {
                    temp[d] = domNode.getBoundingClientRect().top + window.scrollY;
                }
            });
            this.setState({ initPositions: temp });
        }
    }

    render() {
        // Do initial calculations to check for spy content

        // console.log(this.state.spyPositions);
        let newContentData = this.filterToPage();
        // console.log(newContentData); // newContentData.isContent === boolean

        // let isContent = Object.keys(this.refs).length > 0;
        let contentMapping = [];

        /** doesn't have to be too optimized */
        let pages = this.state.contentData ? this.state.contentData.reduce((acc, d) => {
            acc.push(d.pageTitle);
            return acc;
        }, []) : [];

        if (newContentData && !newContentData.content) {
            newContentData.content = [];
        }

        if ((newContentData && !newContentData.isContent) || this.state.minimized) {// && !isContent
            contentMapping = newContentData.content.map((d, i) => {
                return this.generateSegment(d, i, newContentData);
            })
        } else if (newContentData) {
            let spyArr = [];
            // let contentArr = [];
            newContentData.content.forEach((d, i) => {
                if (d.type === "SPECIAL" && d.data.split("\n")[0] === "SECTION") {
                    spyArr.push(d);
                }
            });
            contentMapping = <div>
                {/* All content with a scroll spy will always have a header */}
                {this.generateSegment(newContentData.content[0], 0, newContentData)}
                <Grid fluid>
                    <Row>
                        <Col md={3}><Spybar spyArr={spyArr} positions={this.state.spyPositions} /></Col>
                        <Col md={8}>{newContentData.content.map((d, i) => {
                            if (i > 0) {
                                return this.generateSegment(d, i, newContentData);
                            } else {
                                return <div key={'blank' + i}></div>
                            }
                        })}</Col>
                    </Row>
                </Grid>
            </div>
        }

        // render everything-- if edit page then we have extra things for the user to create pages.
        return (
            <div style={{ marginTop: 0 }}> {/*style={{ marginTop: "100px", marginLeft: "5%", marginRight: "5%" }}*/}
                {((this.props.edit && this.state.canEdit) || !this.props.edit) &&
                    <div>
                        {this.props.edit &&
                            <div style={{ marginTop: 80 }}>
                                <h1>Choose a page to edit:</h1>
                                <select value={this.state.pageTitle ? this.state.pageTitle : this.props.pageTitle} onChange={(e) => {
                                    this.setState({ pageTitle: e.target.value });
                                }}>
                                    {pages.map((d) => {
                                        return <option value={d} key={d}>{d}</option>
                                    })}
                                </select>
                                <br /><br />

                                <h1>Create new page</h1>
                                <p>Must have / before it, and correct capitalization</p>
                                <input value={this.state.newPage} onChange={e => { this.setState({ newPage: e.target.value }) }} />
                                <br />
                                <input type="checkbox" checked={this.state.isContent} onChange={e => { this.setState({ isContent: !this.state.isContent }) }} />
                                Is content
                                <br /><button onClick={() => { this.submitNewPage() }} >submit new page</button>
                                <br /><br />
                            </div>
                        }
                        {contentMapping && contentMapping
                        }
                        {this.props.edit &&
                            <div><button style={{ margin: 10 }} onClick={() => {
                                let listOfData = newContentData;
                                listOfData.content.push({ type: "MARKDOWN", data: "Insert text" });
                                this.props.firebase.database().ref(`pageData/${this.pageIndex}`).set(listOfData);
                                this.setState({ setEditData: null, tempEditContent: null, tempEditType: null });
                            }}>insert after</button>
                                <button onClick={() => {
                                    this.props.firebase.auth().signOut();
                                }}>sign out</button></div>
                        }
                    </div>
                }
            </div>
        );
    }
}