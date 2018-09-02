import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import Button from '@material-ui/core/Button';
import './MainPageContent.css'
import Fade from 'react-reveal/Fade';


configureAnchors({ offset: -62, scrollDuration: 1000 });

// MainPageContentTest is the main page test component before
// becoming the actual main page.
//
// Credit for background perspective logic goes to Kriszta: 
//      https://codepen.io/vajkri/pen/grgQmb
export class MainPageContentTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false,
            translate: 'scale(1.1)'
        }
        this.defaultImage = 'http://2018.igem.org/wiki/images/5/58/T--Washington--MB.jpg';
        let imageLoad = new Image();
        imageLoad.src = this.props.params.BACKGROUND ? this.props.params.BACKGROUND : this.defaultImage;
        imageLoad.onload = this.imageLoaded;

        this.x = 0;
        this.y = 0;
        this.lFollowX = 0;
        this.lFollowY = 0;
        this.friction = 1 / 30;

        setInterval(() => { this.moveBackground(); }, 15); // This will update the parallax background at ~60 fps
    }

    // Set's the image loaded state to be true
    imageLoaded = () => {
        this.setState({ imageLoaded: true });
    }

    // Will move the background based on the follow numbers
    moveBackground = () => {
        this.x += (this.lFollowX - this.x) * this.friction;
        this.y += (this.lFollowY - this.y) * this.friction;
        let translate = `translate(${this.x}px, ${this.y}px) scale(1.1)`
        this.setState({ translate });
    }

    /**
     * moveBackgroundEvent is called when the user hovers over the large home screen div.
     * It sets the mouse numbers based on the div height and width, and changes follow numbers
     * @param {event} e
     */
    moveBackgroundEvent = (e) => {
        let lMouseX = Math.max(-100, Math.min(100, e.target.clientWidth / 2 - e.clientX));
        let lMouseY = Math.max(-100, Math.min(100, e.target.clientHeight / 2 - e.clientY));
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
                            top: 0,
                            left: 0,
                            WebkitTransform: this.state.translate,
                            transform: this.state.translate,
                        }}></div>
                        <Fade cascade duration={1000}>
                            <div style={{ paddingTop: '30vh' }}>
                                <div style={{ color: 'white', fontSize: `${titleHeight}vh` }}>{title}</div>
                                <div style={{ color: 'white', fontSize: `${subtitleHeight}vh` }}>{subtitle}</div>
                                <Button variant="contained" color="primary" href={'#overview'} style={{ textDecoration: 'none', color: 'white', marginTop: 20 }}>{buttonText}</Button>
                            </div>
                        </Fade>
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
                    <div style={{ marginTop: 70 }}></div>
                </Fade>
            </div >
        );
    }
}