import React, { Component } from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import ReactMarkdown from 'react-markdown';
import './ContentView.css';
import CodeBlock from './CodeBlock';

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
            currentEmail: ''
        };

        this.possibleTypes = ["MARKDOWN", "LATEX", "IMAGE", "SPECIAL"];
    }

    componentWillMount() {
        this.setState({ contentData: this.props.contentData, setEditData: this.props.setEditData, firebase: this.props.firebase });

        if (this.props.edit) {
            this.props.firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setState({ canEdit: true, currentEmail: user.email });
                } else {
                    let provider = new this.props.firebase.auth.GoogleAuthProvider();
                    this.props.firebase.auth().signInWithPopup(provider).then((result) => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = result.credential.accessToken;
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
                        console.log("error, email did not work");
                    });
                }
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ contentData: nextProps.contentData, setEditData: nextProps.setEditData, firebase: this.props.firebase });
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
                if (content.pageTitle === this.props.pageTitle) {
                    this.pageIndex = index;
                    return content;
                }
                index++;
            }
        }
        return null;
    }

    /**
     * createSpecial is used for generating special divs from our schema.
     * For example, the home page's large title page, team page, etc.
     * @param {string} name name of the special object 
     * @return {object} special object, or stub div if undefined. 
     */
    createSpecial(name) {
        let returnDiv = null;
        switch (name) {
            case "HOMEPAGE":
                returnDiv = <div>HOME PAGE</div>
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
        let returnDiv = null;
        switch (data.type) {
            case "MARKDOWN":
                returnDiv = <ReactMarkdown source={data.data}
                    style={{ textAlign: 'left' }}
                    renderers={{ code: CodeBlock }}
                    escapeHtml={true} />;
                break;
            case "LATEX":
                returnDiv = <BlockMath>{data.data}</BlockMath>;
                break;
            case "IMAGE":
                returnDiv = null//<ContentImage image={data.data} />;
                break;
            case "SPECIAL":
                returnDiv = this.createSpecial(data.data);
                break;
            default:
                returnDiv = <div>stub div</div>;
                break;
        }
        // nested ternary operator below maybe? :o
        let isEdit = false;
        if (this.props.edit && this.state.setEditData && this.state.setEditData.index === index) {
            isEdit = true;
        }
        return (<div key={"segment" + index} className={`${this.props.edit ? "editBorder" : ""} ${isEdit ? "greenBorder" : ""}`}>
            {returnDiv}
            {this.props.edit &&
                <div>
                    {!isEdit &&
                        <div>
                            <button onClick={() => {
                                this.props.setEdit(this.props.pageTitle, index);
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
                                this.props.firebase.database().ref(`pageData/${this.pageIndex}`).set(listOfData);
                                this.setState({ setEditData: null, tempEditContent: null, tempEditType: null });
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

    render() {
        let newContentData = this.filterToPage();
        let tempPass = "";

        if (newContentData && !newContentData.content) {
            newContentData.content = [];
        }

        return (
            <div style={{ marginTop: "100px", marginLeft: "5%", marginRight: "5%" }}>
                {((this.props.edit && this.state.canEdit) || !this.props.edit) &&
                    <div>
                        {newContentData &&
                            newContentData.content.map((d, i) => {
                                return this.generateSegment(d, i, newContentData);
                            })
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