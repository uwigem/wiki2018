import React, { Component } from 'react';

export class Spybar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spyArr: [],
            positions: {}
        }
    }
    componentWillMount() {
        this.setState({ spyArr: this.props.spyArr, positions: this.props.positions });
    }
    componentWillReceiveProps({ spyArr, positions }) {
        this.setState({ spyArr, positions });
    }
    render() {
        let arr = this.state.spyArr.map(d => {
            let split = d.data.split("\n");
            let sectionCode = split[1];
            let sectionTitle = split[2];
            let sectionY = this.state.positions[`spy-${sectionCode}`];
            return { sectionTitle, sectionY };
        })
        return <div>Spybar</div>
    }
}