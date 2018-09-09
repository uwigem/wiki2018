import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
        }

        this.cardBody = 71;
        this.filteredCategories = ["All",
            "Drylab",
            "Wetlab",
            "Outreach",
            "Business",
            "Design",
            "Adviser",
            "Leadership",
            "Collaborations"];

    }

    toggleExpand = (i) => {
        let tempExp = this.state.expanded;
        tempExp[i] = !tempExp[i];
        this.setState({ expanded: tempExp });
    }

    hover = (i) => {
        let tempHov = this.state.hover;
        tempHov[i] = true;
        this.setState({ hover: tempHov })
    }
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

    componentWillMount() {
        this.setState({ data: this.props.data });
        this.props.data.forEach((d, i) => {
            let imageLoad = new Image();
            imageLoad.src = d.PICTURE;
            imageLoad.onload = () => this.setLoaded(i);
        })
    }

    setLoaded = (i) => {
        let tempL = this.state.loaded;
        tempL[i] = true;
        this.setState({ loaded: tempL });
    }

    render() {
        // let dataFiltered = this.state.data
        // console.log(dataFiltered)
        // let dataFiltered = this.state.data.reduce((acc, d, i) => {
        //     if (this.state.filterTo === "All") {
        //         acc.push(d);
        //         return acc;
        //     } else {
        //         if (d.FILTER && d.FILTER.indexOf(this.state.filterTo) !== -1) {
        //             acc.push(d);
        //             return acc;
        //         } else {
        //             return acc;
        //         }
        //     }
        // }, []);
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
                            }} style={{ cursor: 'pointer', fontStyle: 'italic' }}>{d}</div></Col>
                        })}
                    </Row>
                </Fade>
            </Grid>
            <Grid fluid style={{ padding: 0, margin: 0 }}>
                <Fade clear cascade>
                    <Row style={{ padding: 0, margin: 0 }}>
                        {data && data.map((d, i) => {
                            return <Col md={3} key={'subimg' + i} style={{
                                textAlign: 'center',
                                marginTop: 10,
                                transition: 'height 0.5s',

                                // this.state.filterTo === d.FILTER || this.state.filterTo === "All" ?
                            }}><div style={{
                                width: '100%',
                                maxWidth: 402,
                                minWidth: 230,
                                height: '25vw',
                                minHeight: 402,
                                backgroundColor: 'white',
                                margin: 'auto',
                                borderRadius: 20,
                                overflow: 'hidden',
                                cursor: 'pointer',
                                position: 'relative',
                                filter: this.state.filterTo === d.FILTER || this.state.filterTo === "All" ? '' : 'blur(5px)',
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
                                        height: `${this.cardBody}%`,
                                        backgroundColor: 'white',
                                        background: `url(${d.PICTURE}) no-repeat center center`,
                                        backgroundSize: 'cover'
                                    }}></div></Fade>
                                    <div style={{
                                        position: 'absolute',
                                        width: '100%',
                                        bottom: 0,
                                        left: 0,
                                        height: this.state.expanded[i] ? '100%' : `${100 - this.cardBody}%`,
                                        backgroundColor: this.state.hover[i] || this.state.expanded[i] ? '#420dab' : 'white',
                                        transition: 'height 0.5s, background-color 0.5s, color 0.5s',
                                        color: this.state.hover[i] || this.state.expanded[i] ? 'white' : 'black',
                                    }} className={"scrollBox"}>
                                        <Fade duration={500} clear when={this.state.expanded[i] === true}>
                                            <div style={{
                                                position: 'absolute',
                                                margin: 'auto',
                                                left: 0,
                                                right: 0,
                                                textAlign: 'center',
                                            }}>
                                                <div style={{
                                                    padding: 20,
                                                    fontSize: 16,
                                                    height: '80%',
                                                    overflowY: 'hidden'
                                                }}>{d.BIO}</div>
                                                <div style={{
                                                    color: 'white',
                                                    padding: 0,
                                                    height: '20%'
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
                                                    fontSize: 25,
                                                    letterSpacing: 3
                                                }}>{d.NAME}</div>
                                                <div style={{
                                                    marginTop: 10
                                                }}>{d.ROLE}</div>
                                            </div>
                                        </Fade>
                                    </div>
                                </div></Col>
                        })}
                    </Row>
                </Fade>
            </Grid>
        </div>
    }
}

