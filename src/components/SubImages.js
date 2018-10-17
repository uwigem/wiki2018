import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Fade from 'react-reveal/Fade';
import './SubImages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';


export class SubImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: [],
            data: [],
            hover: []
        }

        this.cardBody = 71;
    }

    componentWillMount() {
        this.setState({ data: this.props.data, maxImagesPerRow: this.props.maxImagesPerRow });
        this.props.data.forEach((d, i) => {
            let imageLoad = new Image();
            imageLoad.src = d.PICTURE;
            imageLoad.onload = () => this.setLoaded(i);
        })
    }

    componentWillReceiveProps({ data, maxImagesPerRow }) {
        this.setState({ data, maxImagesPerRow });
    }

    /**
     * setLoaded sets the loaded state at the position i to true for the image,
     * allowing for fade in to act.
     */
    setLoaded = (i) => {
        if (!this.state.loaded[i]) {
            let tempL = this.state.loaded;
            tempL[i] = true;
            this.setState({ loaded: tempL });
        }
    }

    render() {
        let data = this.state.data;
        return <div style={{ margin: 30, textAlign: 'center' }}>
            <Grid fluid style={{ padding: 0, margin: 0 }}>
                <Fade clear cascade>
                    <Row style={{ padding: 0, margin: 0 }} center="xs">
                        {data && data.map((d, i) => {
                            let x = d.XPOS ? d.XPOS : 50;
                            let y = d.YPOS ? d.YPOS : 50;
                            return <Col md={Math.round(12 / this.state.maxImagesPerRow)} key={'img' + i} style={{
                                marginTop: 10,
                            }}>
                                <Fade when={this.state.loaded[i]}>
                                    <div>
                                        {d.LINK &&
                                            <a href={d.LINK} style={{
                                                textDecoration: 'none',
                                            }} className={"linkSubImageTotal"}>
                                                <div style={{
                                                    width: '100%',
                                                    maxWidth: 402,
                                                    minWidth: 180,
                                                    height: 'auto',
                                                    minHeight: 280,
                                                    margin: 'auto',
                                                    backgroundColor: 'white',
                                                    background: `url(${d.PICTURE}) no-repeat ${x}% ${y}%`,
                                                    backgroundSize: 'cover',
                                                    cursor: 'pointer',
                                                    boxShadow: '5px 5px 10px gray',
                                                    marginBottom: 10
                                                }} className={'linkSubImage'}></div>
                                                {d.TITLE && <div style={{
                                                    padding: 5,
                                                    fontSize: '16pt'
                                                }}>{d.TITLE} <FontAwesomeIcon icon={faArrowAltCircleRight} /></div>}
                                                <div style={{
                                                    padding: 5,
                                                    fontSize: '11pt'
                                                }}>{d.DESCRIPTION}</div>
                                            </a>
                                        }
                                        {!d.LINK && <div>
                                            <div style={{
                                                width: '100%',
                                                maxWidth: 402,
                                                minWidth: 180,
                                                height: 'auto',
                                                minHeight: 280,
                                                margin: 'auto',
                                                backgroundColor: 'white',
                                                background: `url(${d.PICTURE}) no-repeat ${x}% ${y}%`,
                                                backgroundSize: 'cover',
                                                boxShadow: '5px 5px 10px gray',
                                                marginBottom: 10
                                            }}></div>
                                            {d.TITLE && <div style={{
                                                padding: 5,
                                                fontSize: '16pt'
                                            }}>{d.TITLE}</div>}
                                            <div style={{ padding: 5, fontSize: '11pt' }}>{d.DESCRIPTION}</div>
                                        </div>
                                        }
                                    </div>
                                </Fade>
                            </Col>
                        })}
                    </Row>
                </Fade>
            </Grid>

        </div>
    }
}