import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Fade from 'react-reveal/Fade';

export class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: [],
            hover: [],
            data: [],
            loaded: []
        }

        this.cardBody = 71;
    }

    toggleExpand = (i) => {
        let tempExp = this.state.expanded;
        tempExp[i] = !tempExp[i];
        this.setState({ expanded: tempExp });
    }

    hover = (i) => {
        let tempHov = this.state.hover;
        tempHov[i] = true;
        this.setState({ hover: tempHov })
    }
    removeHover = (i) => {
        let tempHov = this.state.hover;
        tempHov[i] = false;
        this.setState({ hover: tempHov })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.data });
        nextProps.data.forEach((d, i) => {
            let imageLoad = new Image();
            imageLoad.src = d.PICTURE;
            imageLoad.onload = () => this.setLoaded(i);
        })
    }

    componentWillMount() {
        this.setState({ data: this.props.data });
        this.props.data.forEach((d, i) => {
            let imageLoad = new Image();
            imageLoad.src = d.PICTURE;
            imageLoad.onload = () => this.setLoaded(i);
        })
    }

    setLoaded = (i) => {
        let tempL = this.state.loaded;
        tempL[i] = true;
        this.setState({ loaded: tempL });
    }

    render() {
        let data = this.state.data;
        console.log(data);
        return <div style={{ marginTop: 80 }}>
            <Grid fluid style={{ padding: 0, margin: 0 }}>
                <Fade clear cascade>
                    <Row style={{ padding: 0, margin: 0 }}>
                        {data.map((d, i) => {
                            return <Col md={4} key={'subimg' + i} style={{ textAlign: 'center', marginTop: 10 }}><div style={{
                                width: '100%',
                                maxWidth: 402,
                                minWidth: 230,
                                height: '25vw',
                                minHeight: 402,
                                backgroundColor: 'white',
                                margin: 'auto',
                                borderRadius: 20,
                                overflow: 'hidden',
                                cursor: 'pointer',
                                position: 'relative'
                            }} onClick={() => this.toggleExpand(i)}
                                onMouseEnter={() => this.hover(i)}
                                onMouseLeave={() => this.removeHover(i)}
                            >
                                <Fade when={this.state.loaded[i]}><div style={{
                                    position: 'absolute',
                                    width: '100%',
                                    top: 0,
                                    left: 0,
                                    height: `${this.cardBody}%`,
                                    backgroundColor: 'white',
                                    background: `url(${d.PICTURE}) no-repeat center center`,
                                    backgroundSize: 'cover'
                                }}></div></Fade>
                                <div style={{
                                    position: 'absolute',
                                    width: '100%',
                                    bottom: 0,
                                    left: 0,
                                    height: this.state.expanded[i] ? '100%' : `${100 - this.cardBody}%`,
                                    backgroundColor: this.state.hover[i] || this.state.expanded[i] ? '#420dab' : 'white',
                                    transition: 'height 0.5s, background-color 0.5s, color 0.5s',
                                    color: this.state.hover[i] || this.state.expanded[i] ? 'white' : 'black',
                                }} className={"scrollBox"}>
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
                                                fontSize: 16,
                                                height: '80%'
                                            }}>{d.BIO}</div>
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
                                            }}>{d.NAME}</div>
                                            <div style={{
                                                marginTop: 10
                                            }}>{d.ROLE}</div>
                                        </div>
                                    </Fade>
                                </div>
                            </div></Col>
                        })}
                    </Row>
                </Fade>
            </Grid>
        </div>
    }
}

