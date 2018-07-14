import React, { Component } from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import ReactMarkdown from 'react-markdown';
import './ContentView.css';

// ContentView is the main content hub that controls a certain page's
// content. It also contains some logic for editing.
export class ContentView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentData: null,
            setEditData: null,
            firebase: null
        };
    }

    componentWillMount() {
        this.setState({ contentData: this.props.contentData, setEditData: this.props.setEditData, firebase: this.props.firebase });
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
            for (let content of this.state.contentData) {
                if (content.pageTitle === this.props.pageTitle) {
                    return content;
                }
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
    generateSegment(data, index) {
        let returnDiv = null;
        switch (data.type) {
            case "MARKDOWN":
                returnDiv = <ReactMarkdown source={data.data} style={{ textAlign: 'left' }} />;
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
                <div><button onClick={() => {
                    this.props.setEdit(this.props.pageTitle, index);
                }}>edit</button></div>
            }
        </div>)
    }

    render() {
        let newContentData = this.filterToPage();
        return (
            <div style={{ marginTop: "100px", marginLeft: "5%", marginRight: "5%" }}>
                {newContentData &&
                    newContentData.content.map((d, i) => {
                        return this.generateSegment(d, i);
                    })
                }
            </div>
        );
    }
}