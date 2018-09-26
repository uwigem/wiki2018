import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

/**
 * HeaderBar is the header for every single content page.
 * 
 * Note that it won't have the correct functionality on the editor page,
 * but is totally supported as long as it is at the top of the page.
 * This functionality can be made universal with some work, that I will
 * be implementing as a standalone project.
 * 
 * @class
 */
export class HeaderBar extends Component {
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
        this.minWidth = 850;
        this.headerBarPercentage = 0.3;

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
        // if (window.pageYOffset < this.state.innerHeight * this.headerBarPercentage && !this.state.minimized) {
        //     this.x += (this.lFollowX - this.x) * this.friction;
        //     this.y += (this.lFollowY - this.y) * this.friction;
        //     this.tX += (this.lFollowX - this.x) * this.friction * 2;
        //     this.tY += (this.lFollowY - this.y) * this.friction * 2;
        //     let translate = `translate(${this.x}px, ${this.y}px) scale(1.1)`;
        //     let translateText = `translate(${this.tX}px, ${this.tY}px) scale(1.0)`
        //     this.setState({ translate, translateText });
        // }
    }

    /**
     * moveBackgroundEvent is called when the user hovers over the large home screen div.
     * It sets the mouse numbers based on the div height and width, and changes follow numbers
     * @param {event} e
     */
    moveBackgroundEvent = (e) => {
        let lMouseX = Math.max(-100, Math.min(100, (window.innerWidth) / 2 - e.clientX));
        let lMouseY = Math.max(-100, Math.min(100, (this.headerBarPercentage * window.innerHeight) / 2 - e.clientY));
        this.lFollowX = (20 * lMouseX) / 100
        this.lFollowY = (20 * lMouseY) / 100
    }

    render() {
        let p = this.props.params;
        let bgLightness = p.BACKGROUNDLIGHTNESS ? p.BACKGROUNDLIGHTNESS : 0;
        let bg = p.BACKGROUND ? p.BACKGROUND : this.defaultImage;
        let bgOpacity = p.BACKGROUNDOPACITY ? p.BACKGROUNDOPACITY : 0.60;
        let titleHeight = p.TEXTHEIGHT ? p.TEXTHEIGHT : 12;
        let title = p.TEXT ? p.TEXT : "";
        let blur = p.BLUR ? p.BLUR : 5;
        let minTitleHeight = p.MINTITLEHEIGHT ? p.MINTITLEHEIGHT : 8;
        let mPT = p.MINPADDINGTOP ? p.MINPADDINGTOP : 80;
        let pT = p.PADDINGTOP ? p.PADDINGTOP : 120;
        return <div>
            <Fade when={this.state.imageLoaded}>
                <div style={{
                    width: '100%',
                    height: this.headerBarPercentage * window.innerHeight + 18,
                    textAlign: 'center',
                    margin: 'auto',
                    overflow: 'hidden',
                    position: 'relative',
                }}
                // onMouseMove={this.moveBackgroundEvent}
                >
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundAttachment: 'fixed',
                        background: `url(${bg})`,
                        backgroundColor: `hsla(0,0%,${bgLightness}%,${bgOpacity})`,
                        backgroundBlendMode: 'overlay',
                        backgroundSize: 'cover',
                        position: 'absolute',
                        filter: `blur(${blur}px)`,
                        top: 18,
                        left: 0,
                        WebkitTransform: this.state.translate,
                        transform: this.state.translate,
                        msTransform: this.state.translate,
                        OTransform: this.state.translate,
                        MozTransform: this.state.translate
                    }}>
                    </div>
                    <div style={{
                        paddingTop: this.state.minimized ? mPT + "px" : pT + "px",
                        WebkitTransform: this.state.translateText,
                        transform: this.state.translateText,
                        msTransform: this.state.translateText,
                        OTransform: this.state.translateText,
                        MozTransform: this.state.translateText
                    }}>
                        <div style={{
                            color: 'white',
                            fontSize: `${this.state.minimized ? minTitleHeight : titleHeight}vh`,
                            textAlign: 'center',
                            fontFamily: 'Leixo'
                        }}>
                            <Fade clear duration={1500} when={this.state.imageLoaded}>
                                {title}
                            </Fade>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    }
}