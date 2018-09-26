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
        console.log(this.props)
        return <div>
            <Grid fluid style={{ padding: 0, margin: 0 }}>
                <Fade clear cascade>
                    <Row style={{ padding: 0, margin: 0 }}>
                    </Row>
                </Fade>
            </Grid>

        </div>
    }
}