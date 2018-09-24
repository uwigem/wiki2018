import React, { Component } from 'react';
import './CRAFTY.css'

export class CRAFTY extends Component {
    render() {
        return <div className={'crafty'}>{this.props.text}</div>
    }
}