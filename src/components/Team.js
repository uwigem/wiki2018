import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Scrollbars } from 'react-custom-scrollbars';
import './Team.css';

export class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: [],
            hover: [],
            data: [],
            loaded: [],
            filterTo: 'All',
            cardBody: 71
        }

        this.filteredCategories = ["All",
            "Drylab",
            "Wetlab",
            "Outreach",
            "Business",
            "Design",
            "Adviser",
            "Leadership",
            "Collaborations",
            "Presenters"];

        window.addEventListener("resize", this.updateDim);
        this.maxThres = 1400;
        this.minThres = 768;
        this.minminThres = 380;
        this.mainColor = '#420dab';

        this.sections = ["Leadership", "Members", "Advisers"];
    }

    /**
     * Update the window sizes for multiple different widths specific to the team page.
     */
    updateDim = () => {
        if ((window.innerWidth < this.minminThres || (window.innerWidth <= this.maxThres && window.innerWidth > this.minThres)) && !this.state.smallerCardBody) {
            this.setState({ smallerCardBody: true, cardBody: 55 });
        } else if ((window.innerWidth >= this.minminThres && (window.innerWidth > this.maxThres || window.innerWidth <= this.minThres)) && this.state.smallerCardBody) {
            this.setState({ smallerCardBody: false, cardBody: 71 });
        }
    }

    /**
     * toggleExpand toggles the expansion of the description of user at position i
     */
    toggleExpand = (i) => {
        let tempExp = this.state.expanded;
        tempExp[i] = !tempExp[i];
        this.setState({ expanded: tempExp });
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
            this.setState({ smallerCardBody: true, cardBody: 55 });
        } else if ((window.innerWidth >= this.minminThres && (window.innerWidth > this.maxThres || window.innerWidth <= this.minThres))) {
            this.setState({ smallerCardBody: false, cardBody: 71 });
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
            <Grid fluid style={{ padding: 0, margin: 20, marginTop: 30, marginBottom: 20 }}>
                <Fade clear cascade>
                    <Row style={{ padding: 0, margin: 'auto', textAlign: 'center' }}>
                        {this.filteredCategories.sort().map((d, i) => {
                            return <Col xs key={'selector' + i}><div onClick={() => {
                                this.setState({ filterTo: d });
                            }} style={{
                                cursor: 'pointer', fontStyle: 'italic',
                                borderBottom: this.state.filterTo === d ? '3px solid black' : '',
                                transition: 'border 0.2s'
                            }} className={"filterButton"}>{d}</div></Col>
                        })}
                    </Row>
                </Fade>
            </Grid>

            {this.sections.map((sect, sectIndex) => {
                return <div key={'sect' + sectIndex} style={{ marginBottom: 20 }}>
                    <div style={{ margin: 'auto', width: '100%', textAlign: 'center', fontSize: 50 }}>{sect}</div>
                    <Grid fluid style={{ padding: 0, margin: 0 }}>
                        <Fade clear cascade>
                            <Row style={{ padding: 0, margin: 0 }} center="xs">
                                {data && data.map((d, i) => {
                                    let filter;
                                    switch (sect) {
                                        case "Leadership":
                                            filter = d.FILTER && d.FILTER.indexOf(sect) === -1;
                                            break;
                                        case "Members":
                                            filter = d.FILTER && (d.FILTER.indexOf('Adviser') !== -1 || d.FILTER.indexOf('Leadership') !== -1)
                                            break;
                                        case "Advisers":
                                            filter = d.FILTER && d.FILTER.indexOf('Adviser') === -1;
                                            break;
                                        default:
                                            filter = d.FILTER && (d.FILTER.indexOf('Adviser') !== -1 || d.FILTER.indexOf('Leadership') !== -1)
                                            break;
                                    }
                                    if (filter) {
                                        return null;
                                    }
                                    let x = d.XPOS ? d.XPOS : 50;
                                    let y = d.YPOS ? d.YPOS : 50;
                                    return <Col md={3} key={'subimg' + i} style={{
                                        textAlign: 'center',
                                        marginTop: 10,
                                        transition: 'height 0.5s',
                                        marginBottom: 10
                                    }}><div style={{
                                        width: '100%',
                                        maxWidth: 402,
                                        minWidth: 180,
                                        height: 'auto',
                                        minHeight: 280,
                                        backgroundColor: 'white',
                                        margin: 'auto',
                                        borderRadius: 20,
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        filter: (d.FILTER && d.FILTER.indexOf(this.state.filterTo) !== -1) || this.state.filterTo === "All" ? '' : 'blur(5px)',
                                        boxShadow: '5px 5px 5px #999999',
                                        transition: 'filter 0.2s'
                                    }} onClick={() => this.toggleExpand(i)}
                                        onMouseEnter={() => this.hover(i)}
                                        onMouseLeave={() => this.removeHover(i)}
                                    >
                                            <Fade when={this.state.loaded[i]}><div style={{
                                                position: 'absolute',
                                                width: '100%',
                                                top: 0,
                                                left: 0,
                                                height: `${this.state.cardBody}%`,
                                                backgroundColor: 'white',
                                                background: `url(${d.PICTURE}) no-repeat ${x}% ${y}%`,
                                                backgroundSize: 'cover'
                                            }}></div></Fade>
                                            <div style={{
                                                position: 'absolute',
                                                width: '100%',
                                                bottom: 0,
                                                left: 0,
                                                height: this.state.expanded[i] ? '100%' : `${100 - this.state.cardBody}%`,
                                                backgroundColor: this.state.hover[i] || this.state.expanded[i] ? this.mainColor : 'white',
                                                transition: 'height 0.5s, background-color 0.5s, color 0.5s',
                                                color: this.state.hover[i] || this.state.expanded[i] ? 'white' : 'black',
                                            }} className={"scrollBox"}>
                                                <Scrollbars style={{
                                                    position: 'absolute',
                                                    margin: 'auto',
                                                    left: 0,
                                                    right: 0,
                                                    textAlign: 'center',
                                                    height: '100%',
                                                    opacity: this.state.expanded[i] ? 1 : 0
                                                }}>
                                                    <Fade duration={500} clear when={this.state.expanded[i] === true}>
                                                        <div style={{
                                                            padding: 20,
                                                            fontSize: 16,
                                                        }}>{d.BIO.split("\\n").map((e, j) => {
                                                            return <p key={d.NAME + 'spl' + j} style={{ marginTop: 10 }}>{e.trim()}</p>
                                                        })}

                                                            <div style={{
                                                                color: 'white',
                                                                padding: 0,
                                                                marginTop: 10
                                                            }}>
                                                                {d.GITHUB &&
                                                                    <a href={d.GITHUB} className="icon">
                                                                        <FontAwesomeIcon icon={faGithub} size={"2x"} />
                                                                    </a>}
                                                                {d.LINKEDIN &&
                                                                    <a href={d.LINKEDIN} className="icon">
                                                                        <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                                                                    </a>}
                                                            </div>
                                                        </div>
                                                    </Fade>
                                                </Scrollbars>
                                                <Fade duration={500} clear when={this.state.expanded[i] !== true}>
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
                                                        }}>{d.ROLE}</div>
                                                    </div>
                                                </Fade>
                                            </div>
                                        </div>
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