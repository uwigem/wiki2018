import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { Grid, Row, Col } from 'react-flexbox-grid';


/**
 * HeaderBar is the header for every single content page
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
        this.minWidth = 800;
        this.headerBarPercentage = 0.2;
        this.headerBarHeight = `${this.headerBarPercentage * 100}vh`

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
        if (window.pageYOffset < this.state.innerHeight * this.headerBarPercentage && !this.state.minimized) {
            this.x += (this.lFollowX - this.x) * this.friction;
            this.y += (this.lFollowY - this.y) * this.friction;
            this.tX += (this.lFollowX - this.x) * this.friction * 2;
            this.tY += (this.lFollowY - this.y) * this.friction * 2;
            let translate = `translate(${this.x}px, ${this.y}px) scale(1.1)`;
            let translateText = `translate(${this.tX}px, ${this.tY}px) scale(1.0)`
            this.setState({ translate, translateText });
        }
    }

    render() {
        return <div>

        </div>
    }
}