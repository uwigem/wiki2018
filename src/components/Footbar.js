import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export class Footbar extends Component {
    render() {
        return <div style={{ width: '100%', height: '30vh' }}>
            <FontAwesomeIcon icon={faGithub} />
            {/* Below is side split code, move to different component */}
            {/* <Grid fluid style={{ padding: 0, margin: 0, height: '100%' }}>
                <Row style={{ padding: 0, margin: 0, height: '100%' }}>
                    <Col style={{ backgroundColor: 'gray', width: '50%', height: '100%' }}></Col>
                    <Col style={{ backgroundColor: 'darkgray', width: '50%', height: '100%' }}></Col>
                </Row>
            </Grid> */}
        </div>
    }
}