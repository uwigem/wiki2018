import React, { Component } from 'react';

export class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.data });
    }

    componentWillMount() {
        this.setState({ data: this.props.data });
    }

    render() {
        let data = this.state.data;
        return <div>
            {data.map((d, i) => {
                return <div key={d.name + "" + i}>{
                    d.NAME
                }</div>
            })}
        </div>
    }
}