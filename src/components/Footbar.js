import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footbar.css';

export class Footbar extends Component {
    constructor() {
        super();

        this.state = {
            hover: []
        }

        this.items = [
            {
                icon: faGithub,
                link: "https://github.com/uwigem",
                alt: 'Washington iGEM Github'
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
                    {this.items.map((d, i) => {
                        return <Col>
                            <FontAwesomeIcon icon={d.icon} size={"3x"}
                                className={`icon`}
                                style={{ color: this.state.hover[i] ? 'red' : 'white' }}
                                onMouseEnter={() => { this.addHover(i) }}
                                onMouseLeave={() => { this.removeHover(i) }} />
                        </Col>
                    })}

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