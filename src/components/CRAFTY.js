import React, { Component } from 'react';
import './CRAFTY.css'

/**
 * c r a f t y
 * @class
 */
export class CRAFTY extends Component {
    render() {
        return <div className={'crafty'}>{this.props.text}</div>
    }
}