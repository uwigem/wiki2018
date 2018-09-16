import React, { Component } from 'react';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Row, Col } from 'react-flexbox-grid';

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
        let arr = this.state.spyArr.map((d, i) => {
            let split = d.data.split("\n");
            let sectionCode = split[1];
            let sectionTitle = split[2];
            let sectionY = this.state.positions[`spy-${sectionCode}`];
            return { sectionTitle, sectionY, href: `#${sectionCode}` };
        });

        let topOffset = 18.7;
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
        }, [])
        console.log(arr);
        return <div style={{ paddingTop: 15, position: 'sticky', top: 60 }}>
            {arr.map((d, i) => {
                return <div key={'spybar-' + i} style={{ marginTop: 10, height: 30, width: 'auto' }}>
                    <Grid fluid>
                        <a style={{ textDecoration: 'none', color: 'black' }} href={d.href}>
                            <Row middle="xs">
                                <span style={{
                                    color: '#420dab',
                                    width: 40,
                                    height: 40,
                                    textAlign: 'center',
                                    fontSize: d.active ? 30 : 20,
                                    opacity: d.active ? 1 : 0.5,
                                    transition: 'font-size 0.5s, opacity 0.5s',
                                    lineHeight: '40px'
                                }}><FontAwesomeIcon icon={faCircle} style={{ margin: 'auto' }} /></span>
                                <span style={{
                                    fontSize: d.active ? 30 : 20,
                                    opacity: d.active ? 1 : 0.5,
                                    transition: 'font-size 0.5s, opacity 0.5s',
                                    lineHeight: '40px'
                                }}>
                                    {d.sectionTitle}
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