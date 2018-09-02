import React, { Component } from 'react';

// ContentImage is a SPECIAL ContentView component which allows for 
// images to be shown with custom CSS styles based on the key values
// Usage can be found on github:
// https://github.com/uwigem/wiki2018/issues/13#issuecomment-416096076
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

    /**
     * parseStyles will parse the styles given from props
     * and store it into a state variable
     * @param prop the set of props to parse the styles from
     */
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
        return <div style={{ width: '100%', textAlign: 'center' }}><img src={this.props.imageUrl} alt={this.props.alt} style={this.state.styles} /></div>
    }
}