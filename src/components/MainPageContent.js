import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import Button from '@material-ui/core/Button';
import './MainPageContent.css'
import Fade from 'react-reveal/Fade';
import { Grid, Row, Col } from 'react-flexbox-grid';


configureAnchors({ offset: -18, scrollDuration: 1000 });

// MainPageContent is the actual main page. This is hardcoded because it
// is a crucial page. 
export class MainPageContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false,
            translate: 'scale(1.1)',
            translateText: 'scale(1.0)',
            minimized: false,
            innerHeight: window.innerHeight
        }
        this.defaultImage = 'http://2018.igem.org/wiki/images/5/58/T--Washington--MB.jpg';
        let imageLoad = new Image();
        imageLoad.src = this.props.params.BACKGROUND ? this.props.params.BACKGROUND : this.defaultImage;
        imageLoad.onload = this.imageLoaded;

        this.x = 0;
        this.y = 0;
        this.tX = 0;
        this.tY = 0;
        this.lFollowX = 0;
        this.lFollowY = 0;
        this.friction = 1 / 30;
        this.minWidth = 800;

        setInterval(() => { this.moveBackground(); }, 15); // This will update the parallax background at ~60 fps

        window.addEventListener("resize", this.updateDim);
    }

    updateDim = () => {
        if (window.innerWidth <= this.minWidth && !this.state.minimized) {
            this.setState({ minimized: true });
        } else if (window.innerWidth > this.minWidth && this.state.minimized) {
            this.setState({ minimized: false, drawerOpen: false });
        }
        this.setState({ innerHeight: window.innerHeight });
    }
    // Set's the image loaded state to be true
    imageLoaded = () => {
        this.setState({ imageLoaded: true });
    }

    componentWillMount = () => {
        if (window.innerWidth <= this.minWidth) {
            this.setState({ minimized: true });
        }
    }

    // Will move the background based on the follow numbers
    // check of pageYOffset reduces lag, only set state when the page is above a certain height
    moveBackground = () => {
        if (window.pageYOffset < this.state.innerHeight && !this.state.minimized) {
            this.x += (this.lFollowX - this.x) * this.friction;
            this.y += (this.lFollowY - this.y) * this.friction;
            this.tX += (this.lFollowX - this.x) * this.friction * 2;
            this.tY += (this.lFollowY - this.y) * this.friction * 2;
            let translate = `translate(${this.x}px, ${this.y}px) scale(1.1)`;
            let translateText = `translate(${this.tX}px, ${this.tY}px) scale(1.0)`
            this.setState({ translate, translateText });
        }
    }

    /**
     * moveBackgroundEvent is called when the user hovers over the large home screen div.
     * It sets the mouse numbers based on the div height and width, and changes follow numbers
     * @param {event} e
     */
    moveBackgroundEvent = (e) => {
        let lMouseX = Math.max(-100, Math.min(100, (window.innerWidth) / 2 - e.clientX));
        let lMouseY = Math.max(-100, Math.min(100, (window.innerHeight) / 2 - e.clientY));
        this.lFollowX = (20 * lMouseX) / 100
        this.lFollowY = (20 * lMouseY) / 100
    }

    render() {
        let p = this.props.params;
        let bgLightness = p.BACKGROUNDLIGHTNESS ? p.BACKGROUNDLIGHTNESS : 0;
        let bg = p.BACKGROUND ? p.BACKGROUND : this.defaultImage;
        let bgOpacity = p.BACKGROUNDOPACITY ? p.BACKGROUNDOPACITY : 0.60;
        let titleHeight = p.TITLEHEIGHT ? p.TITLEHEIGHT : 12;
        let subtitleHeight = p.SUBTITLEHEIGHT ? p.SUBTITLEHEIGHT : 7;
        let title = p.TITLE ? p.TITLE : "Stronger Together";
        let subtitle = p.SUBTITLE ? p.SUBTITLE : "";
        let buttonText = p.BUTTONTEXT ? p.BUTTONTEXT : 'Overview';
        let contentTitle = p.CONTENTTITLE ? p.CONTENTTITLE : 'Washington iGEM 2018 Project';
        let contentSubtitle = p.CONTENTSUBTITLE ? p.CONTENTSUBTITLE : 'Chemically Induced Dimerization of Nanobodies for the Development of Versatile Biosensors';
        let content = p.CONTENT ? p.CONTENT.split(';') : [''];
        let blur = p.BLUR ? p.BLUR : 5;
        return (
            <div >
                <Fade when={this.state.imageLoaded}>
                    <div style={{
                        width: '100%',
                        height: window.innerHeight + 18, // Hardcoded number, for the iGEM navigation bar.
                        textAlign: 'center',
                        margin: 'auto',
                        overflow: 'hidden',
                        position: 'relative'
                    }} onMouseMove={this.moveBackgroundEvent}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundAttachment: 'fixed',
                            background: `url(${bg}) no-repeat center center`,
                            backgroundColor: `hsla(0,0%,${bgLightness}%,${bgOpacity})`,
                            backgroundBlendMode: 'overlay',
                            backgroundSize: 'cover',
                            position: 'absolute',
                            filter: `blur(${blur}px)`,
                            top: 0,
                            left: 0,
                            WebkitTransform: this.state.translate,
                            transform: this.state.translate,
                        }}></div>
                        {/* <Fade cascade duration={1000}> */}
                        <div style={{
                            paddingTop: this.state.minimized ? '10vh' : '30vh', WebkitTransform: this.state.translateText,
                            transform: this.state.translateText,
                        }}>
                            <div style={{ color: 'white', fontSize: `${titleHeight}vh` }}>
                                <Grid fluid style={{ padding: 0, margin: 0 }}>
                                    <Row>
                                        <Col
                                            md={this.state.minimized ? 12 : 6}
                                            style={{
                                                width: this.state.minimized ? '100%' : '50%',
                                                textAlign: this.state.minimized ? 'center' : 'right',
                                                paddingRight: this.state.minimized ? 0 : 10
                                            }}>
                                            <Fade left duration={700} when={this.state.imageLoaded} style={{ display: 'inline' }}>{title.split(' ')[0]}</Fade>
                                        </Col>
                                        <Col md={this.state.minimized ? 12 : 6}
                                            style={{
                                                width: this.state.minimized ? '100%' : '50%',
                                                textAlign: this.state.minimized ? 'center' : 'left',
                                                paddingLeft: this.state.minimized ? 0 : 10
                                            }}>
                                            <Fade right duration={2000} when={this.state.imageLoaded} style={{ display: 'inline' }}>{title.split(' ')[1]}</Fade>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <Fade clear duration={1500} when={this.state.imageLoaded}>
                                <div style={{ color: 'white', fontSize: `${subtitleHeight}vh` }}>{subtitle}</div>
                            </Fade>
                            <Fade clear duration={2000} when={this.state.imageLoaded}>
                                <Button variant="contained" color="primary" href={'#overview'} style={{ textDecoration: 'none', color: 'white', marginTop: 20 }}>{buttonText}</Button>
                            </Fade>
                        </div>
                        {/* </Fade> */}
                    </div>
                    <ScrollableAnchor id={'overview'}><div></div></ScrollableAnchor>
                    <div style={{ marginTop: 70 }}></div>
                    <Card style={{ minWidth: 250, maxWidth: "80%", margin: "auto", marginTop: 0, textAlign: 'center' }}>
                        <CardContent>
                            <Fade cascade duration={1000}>
                                <Typography gutterBottom variant="headline" component="h2">
                                    {contentTitle}
                                    <br />
                                    {contentSubtitle}
                                </Typography>
                            </Fade>
                            <Fade cascade duration={1000}>
                                <div>
                                    {content.map((d, i) => {
                                        return <Typography component="p" key={'par' + i} style={{ textAlign: "left", marginTop: 10 }}>
                                            {d.trim()}
                                        </Typography>
                                    })}
                                </div>
                            </Fade>
                        </CardContent>
                    </Card>
                    <div style={{ marginTop: 300 }}></div>
                </Fade>
            </div >
        );
    }
}
