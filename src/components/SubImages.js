import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Fade from 'react-reveal/Fade'

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

    /**
     * hover will set the hover state of the user at position i
     */
    hover = (i) => {
        let tempHov = this.state.hover;
        tempHov[i] = true;
        this.setState({ hover: tempHov })
    }

    /**
     * removeHover will remove the hover state of the user at position i
     */
    removeHover = (i) => {
        let tempHov = this.state.hover;
        tempHov[i] = false;
        this.setState({ hover: tempHov })
    }

    render() {
        let data = this.state.data;
        console.log(data);
        return <div style={{ margin: 'auto', marginTop: 30, marginBottom: 30, textAlign: 'center' }}>
            <Grid fluid style={{ padding: 0, margin: 0 }}>
                <Fade clear cascade>
                    <Row style={{ padding: 0, margin: 0 }}>
                        {data && data.map((d, i) => {
                            return <Col md={Math.round(12 / this.state.maxImagesPerRow)} key={'img' + i} style={{
                                marginTop: 10,
                            }}>
                                <div style={{
                                    width: '100%',
                                    maxWidth: 402,
                                    minWidth: 180,
                                    height: 'auto',
                                    minHeight: 280,
                                    margin: 'auto',
                                    backgroundColor: `#${i}${i}ffff`
                                }} alt="test"> </div>
                                {/* {d.SUBTITLE} */}
                            </Col>
                        })}
                    </Row>
                </Fade>
            </Grid>

        </div>
    }
}