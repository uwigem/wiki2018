import React, { Component } from 'react';
// import { Document, Page } from 'react-pdf';
// import pdf from '../debugfiles/PDFContentTest.pdf';

export class PDF extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1,
        }
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;


        return <div style={{ margin: 'auto', textAlign: 'center' }}>
            {/* <Document
                // file="../debugFiles/PDFContentTest.pdf"
                file={pdf}
                onLoadSuccess={this.onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document> */}
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    }
}