import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Fade from 'react-reveal/Fade'

export class SubImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: [],
            hover: []
        }

        this.cardBody = 71;
    }

    render() {
        console.log(this.props)
        return <div>
            {/* <Grid fluid style={{ padding: 0, margin: 0 }}>
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
                                overflow: 'hidden',
                                cursor: 'pointer',
                                position: 'relative'
                            }} onClick={() => this.toggleExpand(i)}>
                                <div style={{
                                    position: 'absolute',
                                    width: '100%',
                                    top: 0,
                                    left: 0,
                                    height: `${this.cardBody}%`,
                                    backgroundColor: 'white'
                                }}></div>
                                <div style={{
                                    position: 'absolute',
                                    width: '100%',
                                    bottom: 0,
                                    left: 0,
                                    height: this.state.expanded[i] ? '100%' : `${100 - this.cardBody}%`,
                                    backgroundColor: this.state.hover[i] || this.state.expanded[i] ? '#420dab' : 'white',
                                    transition: 'height 0.5s, background-color 0.5s, color 0.5s',
                                    color: this.state.hover[i] || this.state.expanded[i] ? 'white' : 'black'
                                }} onMouseEnter={() => this.hover(i)}
                                    onMouseLeave={() => this.removeHover(i)}>
                                    <Fade duration={500} clear when={this.state.expanded[i] === true}>
                                        <div style={{
                                            position: 'absolute',
                                            margin: 'auto',
                                            left: 0,
                                            right: 0,
                                            textAlign: 'center'
                                        }}>
                                            <div style={{
                                                margin: 20,
                                                fontSize: 16
                                            }}>{d.DESCRIPTION}</div>
                                        </div>
                                    </Fade>
                                    <Fade duration={500} clear when={this.state.expanded[i] !== true}>
                                        <div style={{
                                            position: 'absolute',
                                            textAlign: 'center',
                                            margin: 'auto',
                                            left: 0,
                                            right: 0
                                        }}>
                                            <div style={{
                                                textTransform: 'uppercase',
                                                marginTop: 10,
                                                fontWeight: 'bold',
                                                fontSize: 25,
                                                letterSpacing: 3
                                            }}>{d.TITLE}</div>
                                            <div style={{
                                                marginTop: 10
                                            }}>{d.SUBTITLE}</div>
                                        </div>
                                    </Fade>
                                </div>
                            </div></Col>
                        })}
                    </Row>
                </Fade>
            </Grid> */}
        </div>
    }
}