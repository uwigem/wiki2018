import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Zoom from 'react-reveal/Zoom';
import './Footbar.css';

// Footbar is the component that will sit at the bottom of every web page.
// A precondition is that the page is more than 100vh long, which should be
// mandated by a certain style in App.js
export class Footbar extends Component {
    constructor() {
        super();

        // hover state for footbar icons are stored in an array,
        // just like the items themselves.
        this.state = {
            hover: [],
            minimized: false
        }

        this.minWidth = 420;

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
                logo: {
                    purple: 'http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png'
                },
                link: 'http://2018.igem.org/Team:Washington',
                alt: "Team Washington"
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

    /**
     * addHover will set the hover state of the specified icon to *true*
     * @param {number} index index of icon to set state on
     */
    addHover = (index) => {
        let hover = this.state.hover;
        hover[index] = true;
        this.setState({ hover });
    }

    /**
     * addHover will set the hover state of the specified icon to *false*
     * @param {number} index index of icon to set state on
     */
    removeHover = (index) => {
        let hover = this.state.hover;
        hover[index] = false;
        this.setState({ hover });
    }

    componentWillMount() {
        window.addEventListener("resize", this.updateDim);
        if (window.innerWidth <= this.minWidth) {
            this.setState({ minimized: true });
        }
    }

    /**
     * updateDim will update the minimized state of the AppBar
     * based on a minimum width, currently set to be 600
     * based on the AppBar's default.
     * 
     * Will also automatically close the drawer. If we don't do that
     * then we can open the drawer, stretch the page, have the drawer
     * disappear, then minimize the page again, and the drawer would
     * reappear
     */
    updateDim = () => {
        if (window.innerWidth <= this.minWidth && !this.state.minimized) {
            this.setState({ minimized: true });
        } else if (window.innerWidth > this.minWidth && this.state.minimized) {
            this.setState({ minimized: false });
        }
    }

    render() {
        let height = "30vh"
        return <div style={{ width: '100%', height, backgroundColor: 'black', textAlign: 'center', fontSize: 'default' }}>
            <Grid fluid>
                <Row center="xs" middle="xs" style={{ height }}>
                    <Zoom clear cascade duration={2000}>
                        {this.items.map((d, i) => {
                            return <Col key={'footbar' + i}>
                                {!d.logo && <a href={d.link} alt={d.alt}><FontAwesomeIcon icon={d.icon} size={this.state.minimized ? "1x" : "2x"}
                                    className={`icon`}
                                    style={{ color: this.state.hover[i] ? '#420dab' : 'white', margin: 10 }}
                                    onMouseEnter={() => { this.addHover(i) }}
                                    onMouseLeave={() => { this.removeHover(i) }} /></a>}
                                {d.logo &&
                                    <a href={d.link} alt={d.alt}>
                                        <div style={{ margin: 10 }} onMouseEnter={() => { this.addHover(i) }}
                                            onMouseLeave={() => { this.removeHover(i) }}>
                                            <img src={d.logo.purple} style={{
                                                width: this.state.minimized ? 40 : 80,
                                                filter: this.state.hover[i] ? 'brightness(1)' : 'brightness(0) invert(1)',
                                                transition: 'filter 0.2s'
                                            }} />
                                        </div>
                                    </a>
                                }
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