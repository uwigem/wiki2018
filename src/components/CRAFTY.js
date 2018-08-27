import React, { Component } from 'react';
import './Crafty.css'

export class CRAFTY extends Component {
    render() {
        return <div className={'crafty'}>{this.props.text}</div>
    }
}