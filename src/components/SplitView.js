import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import remark from 'remark';
import reactRenderer from 'remark-react';
/**
 * Tabs is used for having markdown content within a few different tabs.
 * Originally created for use by the Business team.
 * @class
 */
export class SplitView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spObjs: []
        }
    }
    componentWillMount() {
        this.setState({ spObjs: this.props.spObjs });
    }

    componentWillReceiveProps({ spObjs }) {
        this.setState({ spObjs });
    }

    render() {
        let it = this.state.spObjs;
        // console.log(this.state.spObjs[0]);
        return <div style={{ marginTop: 20, marginBottom: 20, marginLeft: '5%', marginRight: '5%' }}>
            <Grid fluid>
                <Row>
                    {it.map((d, i) => {
                        let splitTitle = d.title.split(";");
                        let title = splitTitle[0];
                        let x = splitTitle[1] ? splitTitle[1] : 50;
                        let y = splitTitle[2] ? splitTitle[2] : 50;
                        if (title === "IMAGE") {
                            return <Col md={6} style={{ textAlign: 'center' }}>
                                <div style={{
                                    backgroundColor: 'white',
                                    background: `url(${d.data.trim()}) ${x}% ${y}% no-repeat`,
                                    backgroundSize: `cover`,
                                    height: '100%',
                                    width: '80%',
                                    margin: 'auto',
                                    boxShadow: '5px 5px 10px gray'
                                }}
                                    key={'split' + i}></div>
                                {/* <img src={d.data.trim()} style={{ width: '80%', height: 'auto' }} /> */}
                            </Col>
                        } else {
                            return <Col md={6} key={'split' + i}><div>{remark().use(reactRenderer).processSync(d.data).contents}</div></Col>
                        }
                    })}
                </Row>
            </Grid>

        </div>
    }
}