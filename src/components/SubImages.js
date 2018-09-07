import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';

export class SubImages extends Component {
    render() {
        console.log(this.props);
        return <div>
            <Grid fluid>
                <Row>
                    {this.props.params && this.props.params.map((d, i) => {
                        return <Col md={4} key={'subimg' + i}>{d.IMAGE}</Col>
                    })}
                </Row>
            </Grid>
        </div>
    }
}