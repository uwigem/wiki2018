import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Fade from 'react-reveal/Fade';

export class Sponsors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: [],
            data: [],
            loaded: [],
            filterTo: 'All',
            cardBody: 80
        }

        window.addEventListener("resize", this.updateDim);
        this.maxThres = 1400;
        this.minThres = 768;
        this.minminThres = 380;
        this.mainColor = '#420dab';

        this.sections = ["Diamond", "Gold", "Silver", "Bronze"];
        this.minBody = 70;
        this.maxBody = 75;
    }

    /**
     * Update the window sizes for multiple different widths specific to the team page.
     */
    updateDim = () => {
        if ((window.innerWidth < this.minminThres || (window.innerWidth <= this.maxThres && window.innerWidth > this.minThres)) && !this.state.smallerCardBody) {
            this.setState({ smallerCardBody: true, cardBody: this.minBody });
        } else if ((window.innerWidth >= this.minminThres && (window.innerWidth > this.maxThres || window.innerWidth <= this.minThres)) && this.state.smallerCardBody) {
            this.setState({ smallerCardBody: false, cardBody: this.maxBody });
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

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.data });
        nextProps.data.forEach((d, i) => {
            let imageLoad = new Image();
            imageLoad.src = d.PICTURE;
            imageLoad.onload = () => this.setLoaded(i);
        })
    }

    /**
     * Dynamic image loading and also setting window sizes preemptively
     */
    componentWillMount() {
        this.setState({ data: this.props.data });
        this.props.data.forEach((d, i) => {
            let imageLoad = new Image();
            imageLoad.src = d.PICTURE;
            imageLoad.onload = () => this.setLoaded(i);
        })

        if ((window.innerWidth < this.minminThres || (window.innerWidth <= this.maxThres && window.innerWidth > this.minThres))) {
            this.setState({ smallerCardBody: true, cardBody: this.minBody });
        } else if ((window.innerWidth >= this.minminThres && (window.innerWidth > this.maxThres || window.innerWidth <= this.minThres))) {
            this.setState({ smallerCardBody: false, cardBody: this.maxBody });
        }
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



    render() {
        // Sort data by first name.
        let data = this.state.data.sort((a, b) => {
            if (a.NAME < b.NAME) {
                return -1;
            } else if (b.NAME < a.NAME) {
                return 1;
            } else {
                return 0;
            }
        });

        return <div>
            <div style={{ margin: 'auto', width: '90%', marginTop: 20, textAlign: 'center', fontSize: '24px' }}>
                We want to thank all of our sponsors for their support.
                Our project would not have been possible without them!
            </div>
            {this.sections.map((sect, sectIndex) => {
                return <div key={'sect' + sectIndex} style={{ marginBottom: 20, marginTop: 20 }}>
                    <div style={{ margin: 'auto', width: '100%', textAlign: 'center', fontSize: 50 }}>{sect}</div>
                    <Grid fluid style={{ padding: 0, margin: 0 }}>
                        <Fade clear cascade>
                            <Row style={{ padding: 0, margin: 0 }} center="xs">
                                {data && data.map((d, i) => {
                                    let filter;
                                    switch (sect) {
                                        case "Diamond":
                                            filter = d.FILTER && d.FILTER.indexOf("Diamond") === -1;
                                            break;
                                        case "Gold":
                                            filter = d.FILTER && d.FILTER.indexOf("Gold") === -1;
                                            break;
                                        case "Silver":
                                            filter = d.FILTER && d.FILTER.indexOf("Silver") === -1;
                                            break;
                                        case "Bronze":
                                            filter = d.FILTER && d.FILTER.indexOf("Bronze") === -1;
                                            break;
                                        default:
                                            filter = d.FILTER
                                            break;
                                    }
                                    if (filter) {
                                        return null;
                                    }
                                    let x = d.XPOS ? d.XPOS : 50;
                                    let y = d.YPOS ? d.YPOS : 20;
                                    let size = d.CUSTSIZE ? d.CUSTSIZE : 100;
                                    return <Col md={3} key={'subimg' + i} style={{
                                        textAlign: 'center',
                                        margin: 10,
                                        transition: 'height 0.5s',
                                        maxWidth: 380,
                                        minWidth: 280,
                                    }}><a href={d.LINK ? d.LINK : '#'} target="_blank">
                                            <div style={{
                                                width: '100%',
                                                maxWidth: 380,
                                                minWidth: 280,
                                                height: 'auto',
                                                minHeight: 380,
                                                backgroundColor: this.state.loaded[i] ? '#f1f1f1' : 'white',
                                                margin: 'auto',
                                                borderRadius: 20,
                                                overflow: 'hidden',
                                                cursor: d.BIO === '' ? 'normal' : 'pointer',
                                                position: 'relative',
                                                filter: (d.FILTER && d.FILTER.indexOf(this.state.filterTo) !== -1) || this.state.filterTo === "All" ? '' : 'blur(5px)',
                                                boxShadow: '5px 5px 5px #999999',
                                                transition: 'filter 0.2s, background-color: 0.2s'
                                            }}
                                                onMouseEnter={() => this.hover(i)}
                                                onMouseLeave={() => this.removeHover(i)}
                                            >
                                                <Fade when={this.state.loaded[i] === true}><div style={{
                                                    position: 'absolute',
                                                    width: '100%',
                                                    top: 0,
                                                    left: 0,
                                                    height: `${this.state.cardBody}%`,
                                                    backgroundColor: 'white',
                                                    background: `url(${d.PICTURE}) no-repeat ${x}% ${y}%`,
                                                    backgroundPositionY: '50%',
                                                    backgroundSize: `${size}%`
                                                }}></div></Fade>
                                                <div style={{
                                                    position: 'absolute',
                                                    width: '100%',
                                                    bottom: 0,
                                                    left: 0,
                                                    height: `${100 - this.state.cardBody}%`,
                                                    backgroundColor: this.state.hover[i] ? this.mainColor : 'white',
                                                    transition: 'height 0.5s, background-color 0.5s, color 0.5s',
                                                    color: this.state.hover[i] ? 'white' : 'black',
                                                }} className={"scrollBox"}>
                                                    <Fade duration={500} clear>
                                                        <div style={{
                                                            position: 'absolute',
                                                            textAlign: 'center',
                                                            margin: 'auto',
                                                            left: 0,
                                                            right: 0
                                                        }}>
                                                            <div style={{
                                                                textTransform: 'uppercase',
                                                                marginTop: 10,
                                                                fontWeight: 'bold',
                                                                fontSize: 20,
                                                                letterSpacing: 3,
                                                                textOverflow: 'ellipsis',
                                                                overflow: 'hidden',
                                                            }}>{d.NAME}</div>
                                                            <div style={{
                                                                marginTop: 10
                                                            }}>{d.SUBTEXT}</div>
                                                        </div>
                                                    </Fade>
                                                </div>
                                            </div>
                                        </a>
                                    </Col>
                                })}
                            </Row>
                        </Fade>
                    </Grid>
                </div>
            })}
        </div>
    }
}