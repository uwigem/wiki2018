import React, { Component } from 'react';
export class ContentImage extends Component {
    constructor() {
        super();
        this.state = { styles: {} }
    }

    componentWillMount() {
        let styles = {};
        this.props.params.forEach(d => {
            let obj = {};
            obj[d.K] = d.V;
            styles = { ...styles, ...obj };
        });
        this.setState({ styles });
    }

    componentWillReceiveProps(nextProps) {
        let styles = {};
        this.props.params.forEach(d => {
            let obj = {};
            obj[d.K] = d.V;
            styles = { ...styles, ...obj };
        });
        this.setState({ styles });
    }

    render() {
        console.log(this.state.styles);
        return <img src={this.props.imageUrl} style={this.state.styles} />
    }
}