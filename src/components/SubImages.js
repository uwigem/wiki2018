import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Fade from 'react-reveal/Fade'

export class SubImages extends Component {
    render() {
        return <div>
            <Grid fluid style={{ padding: 0, margin: 0 }}>
                <Fade clear cascade>
                    <Row style={{ padding: 0, margin: 0 }}>
                        {this.props.params && this.props.params.map((d, i) => {
                            return <Col md={4} key={'subimg' + i} style={{ textAlign: 'center', marginTop: 10 }}><div style={{
                                width: '100%',
                                maxWidth: 402,
                                height: '25vw',
                                minHeight: 402,
                                backgroundColor: 'red',
                                margin: 'auto',
                                borderRadius: 20,
                                overflow: 'hidden'
                            }}>
                                <div style={{ height: '71%', backgroundColor: 'white' }}></div>
                                <div style={{ height: '29%', backgroundColor: 'green' }}></div>
                            </div></Col>
                        })}
                    </Row>
                </Fade>
            </Grid>
        </div>
    }
}