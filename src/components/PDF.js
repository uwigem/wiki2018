import React, { Component } from 'react';

/**
 * PDF is a very simple object that renders an embed for PDFs.
 * Used primarly by the business team
 * @class
 */
export class PDF extends Component {
    render() {
        return <div style={{ margin: 'auto', textAlign: 'center' }}>
            <embed src={this.props.pdfLink} style={{ width: '90%', height: 1000 }} />
        </div>
    }
}