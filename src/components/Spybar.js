import React, { Component } from 'react';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Row } from 'react-flexbox-grid';
import './Spybar.css';

export class Spybar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spyArr: [],
            positions: {},
            x: window.innerWidth / 3
        }

        window.addEventListener("resize", () => {
            if (this.mounted) {
                this.setState({ x: window.innerWidth / 3 });
            }
        });

        this.unselectedColor = '#9c81d0';
        this.selectedColor = '#420dab';
        // this.unselectedColor = '#ffcc16';
        // this.selectedColor = '#fbb03b';
    }

    componentWillMount() {
        this.setState({ spyArr: this.props.spyArr, positions: this.props.positions });
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    componentWillReceiveProps({ spyArr, positions }) {
        this.setState({ spyArr, positions });
    }

    render() {
        // Congregate information
        let arr = this.state.spyArr.map(d => {
            let split = d.data.split("\n");
            let sectionCode = split[1];
            let sectionTitle = split[2];
            let sectionY = this.state.positions[`spy-${sectionCode}`];
            return { sectionTitle, sectionY, href: `#${sectionCode}` };
        });

        // Set up top offset position
        let topOffset = 66; // 19 on local, 66 on actual iGEM site

        // Determine if it is active or not, re store it. 
        arr = arr.reduce((acc, d, i) => {
            let active = false;
            if (i === 0) {
                active = true;
            } else {
                if (d.sectionY < topOffset) {
                    acc[i - 1].active = false;
                    active = true;
                }
            }
            acc.push({ ...d, active });
            return acc;
        }, []);

        let maxLength;
        let x = this.state.x;
        if (x < 350) {
            maxLength = 20;
        } else if (x < 400) {
            maxLength = 22;
        } else if (x < 500) {
            maxLength = 25;
        } else if (x < 525) {
            maxLength = 32;
        } else if (x < 550) {
            maxLength = 32;
        } else if (x < 600) {
            maxLength = 35;
        } else {
            maxLength = 40;
        }

        return <div style={{ paddingTop: 15, position: 'sticky', top: 60 }}>
            <div style={{
                position: 'absolute',
                width: 7, // Tough math, don't change!
                height: 40 * (arr.length - 1),
                marginTop: 10,
                bottom: 10,
                left: 24.5,
                zIndex: -1,
                backgroundColor: this.unselectedColor
            }}></div>
            {arr.map((d, i) => {
                return <div key={'spybar-' + i} style={{ marginTop: 10, height: 30, width: 'auto' }}>
                    <Grid fluid>
                        <a style={{ textDecoration: 'none', color: 'black' }} href={d.href}>
                            <Row middle="xs">
                                <span style={{
                                    // color: '#420dab',
                                    color: d.active ? this.selectedColor : this.unselectedColor,
                                    width: 40,
                                    height: 40,
                                    textAlign: 'center',
                                    fontSize: d.active ? 20 : 15,
                                    // opacity: d.active ? 1 : 0.5,
                                    transition: 'font-size 0.5s, opacity 0.5s',
                                    lineHeight: '40px'
                                }}><FontAwesomeIcon icon={faCircle} style={{ margin: 'auto' }} /></span>
                                <span style={{
                                    fontSize: d.active ? 20 : 15,
                                    opacity: d.active ? 1 : 0.5,
                                    fontFamily: 'RalewayBold',
                                    transition: 'font-size 0.5s, opacity 0.5s',
                                    lineHeight: '40px',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {d.sectionTitle.length > maxLength ? d.sectionTitle.substring(0, maxLength - 3) + '...' : d.sectionTitle}
                                </span>
                            </Row>
                        </a>
                    </Grid>
                </div>
            })}
        </div>

        // <div style="position: absolute; left: 13px; top: 10px; height:
        // 70px; width: 2px; background: #0096ff; z-index: -1;"></div>
    }
}