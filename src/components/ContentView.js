import React, { Component } from 'react';

// ContentView is the main content hub that controls a certain page's
// content. It also contains some logic for editing.
export class ContentView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentData: null
        };
    }

    componentWillMount() {
        this.setState({ contentData: this.props.contentData });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ contentData: nextProps.contentData });
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
            for (let i = 0; i < this.state.contentData.length; i++) {
                if (this.state.contentData[i].pageTitle === this.props.pageTitle) {
                    return this.state.contentData[i];
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
                returnDiv = <div>MARKDOWN</div>;
                break;
            case "LATEX":
                returnDiv = <div>LATEX</div>;
                break;
            case "SPECIAL":
                returnDiv = this.createSpecial(data.data);
                break;
            default:
                returnDiv = <div>stub div</div>;
                break;
        }
        // nested ternary operator below maybe? :o
        return (<div key={"segment" + index} style={{ border: this.props.edit ? "2px solid black" : "none" }}>
            {returnDiv}
            {this.props.edit &&
                <div>insert editing console here</div>
            }
        </div>)
    }

    render() {
        let newContentData = this.filterToPage();
        return (
            <div style={{ marginTop: "100px" }}>
                {newContentData &&
                    newContentData.content.map((d, i) => {
                        return this.generateSegment(d, i);
                    })
                }
            </div>
        );
    }
}