import React, { Component } from 'react';

// ContentView is the main content hub that controls a certain page's
// content
export class ContentView extends Component {
    // <ContentView edit={false} pageTitle={this.pageTitle} a={a} data={this.state.data} contentData={contentData} />
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

    generateSegment(data, index) {
        return (<div>
            {

            }
        </div>)
    }

    render() {
        let newContentData = this.filterToPage();
        return (
            <div>
                {newContentData &&
                    newContentData.map((d, i) => {

                    })
                }
            </div>
        );
    }
}