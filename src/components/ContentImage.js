import React, { Component } from 'react';
export class ContentImage extends Component {
    constructor() {
        super();
        this.state = { styles: {} }
    }

    componentWillMount() {
        this.parseStyles(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.parseStyles(nextProps);
    }

    parseStyles = (prop) => {
        let styles = {};
        prop.params.forEach(d => {
            let obj = {};
            let val = d.V
            if (!isNaN(Number(d.V))) {
                val = Number(d.V);
            }
            obj[d.K] = val;
            styles = { ...styles, ...obj };
        });
        this.setState({ styles });
    }

    render() {
        return <div style={{ width: '100%', textAlign: 'center' }}><img src={this.props.imageUrl} style={this.state.styles} /></div>
    }
}