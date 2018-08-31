import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Zoom from 'react-reveal/Zoom';
import './Footbar.css';

export class Footbar extends Component {
    constructor() {
        super();

        this.state = {
            hover: []
        }

        this.items = [
            {
                icon: faFacebook,
                link: "https://www.facebook.com/WashingtoniGEM/",
                alt: "Washington iGEM Facebook"
            },
            {
                icon: faInstagram,
                link: "https://www.instagram.com/washington_igem/",
                alt: "Washington iGEM Instagram"
            },
            {
                icon: faGithub,
                link: "https://github.com/uwigem",
                alt: 'Washington iGEM Github'
            },
            {
                icon: faEnvelope,
                link: "mailto:uwigem@uw.edu",
                alt: 'Washington iGEM Email'
            }
        ]
    }

    addHover = (index) => {
        let hover = this.state.hover;
        hover[index] = true;
        this.setState({ hover });
    }

    removeHover = (index) => {
        let hover = this.state.hover;
        hover[index] = false;
        this.setState({ hover });
    }

    // ${this.state.hover[i] ? 'red' : ''}

    render() {
        let height = "30vh"
        return <div style={{ width: '100%', height, backgroundColor: 'black', textAlign: 'center' }}>
            <Grid fluid>
                <Row center="xs" middle="xs" style={{ height }}>
                    <Zoom clear cascade duration={2000}>
                        {this.items.map((d, i) => {
                            return <Col key={'footbar' + i}>
                                {!d.logo && <a href={d.link} alt={d.alt}><FontAwesomeIcon icon={d.icon} size={"3x"}
                                    className={`icon`}
                                    style={{ color: this.state.hover[i] ? '#420dab' : 'white', margin: 10 }}
                                    onMouseEnter={() => { this.addHover(i) }}
                                    onMouseLeave={() => { this.removeHover(i) }} /></a>}
                            </Col>
                        })}
                    </Zoom>

                </Row>
            </Grid>
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