import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import Button from '@material-ui/core/Button';
import './MainPageContent.css'


configureAnchors({ offset: -64, scrollDuration: 1000 });

// LoadingScreen is the page that appears when the page is loading.
export class MainPageContentTest extends Component {
    render() {
        let p = this.props.params;
        let bg = p.BACKGROUND ? p.BACKGROUND : 'http://2018.igem.org/wiki/images/5/58/T--Washington--MB.jpg'
        let bgLightness = p.BACKGROUNDLIGHTNESS ? p.BACKGROUNDLIGHTNESS : 0;
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
            <div>
                <div style={{
                    width: '100%',
                    height: window.innerHeight + 18, // Hardcoded number, for the iGEM navigation bar.
                    backgroundAttachment: 'fixed',
                    background: `url(${bg}) center center`,
                    backgroundSize: 'auto 100%',
                    textAlign: 'center',
                    margin: 'auto',
                    paddingTop: '30vh',
                    backgroundColor: `hsla(0,0%,${bgLightness}%,${bgOpacity})`,
                    backgroundBlendMode: 'overlay',
                }}>
                    <div style={{ color: 'white', fontSize: `${titleHeight}vh` }}>{title}</div>
                    <div style={{ color: 'white', fontSize: `${subtitleHeight}vh` }}>{subtitle}</div>
                    <Button variant="contained" color="primary" href={'#overview'} style={{ textDecoration: 'none', color: 'white', marginTop: 20 }}>{buttonText}</Button>
                </div>
                <ScrollableAnchor id={'overview'}><div></div></ScrollableAnchor>
                <div style={{ marginTop: 70 }}></div>
                <Card style={{ minWidth: 250, maxWidth: "80%", margin: "auto", marginTop: 0, textAlign: 'center' }}>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {contentTitle}
                            <br />
                            {contentSubtitle}
                        </Typography>
                        {content.map((d, i) => {
                            return <Typography component="p" key={'par' + i} style={{ textAlign: "left", marginTop: 10 }}>
                                {d.trim()}
                            </Typography>
                        })}
                    </CardContent>
                </Card>
                <br />
                <div style={{ height: '100vh' }}></div>
            </div>
        );
    }
}