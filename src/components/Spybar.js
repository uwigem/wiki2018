import React, { Component } from 'react';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Spybar.css';

export class Spybar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spyArr: [],
            positions: {}
        }
    }

    componentWillMount() {
        this.setState({ spyArr: this.props.spyArr, positions: this.props.positions });
    }

    componentWillReceiveProps({ spyArr, positions }) {
        this.setState({ spyArr, positions });
    }

    render() {
        // Congregate information
        let arr = this.state.spyArr.map((d, i) => {
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

        console.log(arr.length);
        return <div style={{ paddingTop: 15, position: 'sticky', top: 60, backgroundColor: 'gray' }}>
            <div style={{
                position: 'absolute',
                width: 7, // Tough math, don't change!
                height: 40 * (arr.length - 1),
                marginTop: 10,
                bottom: 10,
                left: 24.5,
                zIndex: -1,
                backgroundColor: '#9C81D0'
            }}></div>
            {arr.map((d, i) => {
                return <div key={'spybar-' + i} style={{ marginTop: 10, height: 30, width: 'auto' }}>
                    <Grid fluid>
                        <a style={{ textDecoration: 'none', color: 'black' }} href={d.href}>
                            <Row middle="xs">
                                <span style={{
                                    // color: '#420dab',
                                    color: d.active ? "#420dab" : "#9C81D0",
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
                                    {d.sectionTitle.length > 22 ? d.sectionTitle.substring(0, 19) + '...' : d.sectionTitle}
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