import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import './NavigationBottom.css';

export class NavigationBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navParams: this.props.navParams
        };

        this.iconLeft = faArrowCircleLeft;
        this.iconRight = faArrowCircleRight;
    }

    componentWillMount() {
        this.setState({ navParams: this.props.navParams });
    }

    componentWillReceiveProps({ navParams }) {
        this.setState({ navParams });
    }

    render() {
        let it = this.state.navParams;
        return <div style={{ marginTop: 30, marginBottom: 30 }}>
            <Grid fluid>
                <Row style={{ width: '100%', fontSize: '24px' }}>
                    <Col style={{ width: '50%', textAlign: 'left' }}>
                        {it.LEFT && it.LEFTNAME &&
                            <div>
                                <a onClick={this.props.a} href={it.LEFT} className={"navLinkA"}><FontAwesomeIcon icon={this.iconLeft} style={{ marginRight: 10 }} /> {it.LEFTNAME}</a>
                            </div>
                        }
                    </Col>
                    <Col style={{ width: '50%', textAlign: 'right' }}>
                        {it.RIGHT && it.RIGHTNAME &&
                            <div>
                                <a onClick={this.props.a} href={it.RIGHT} className={"navLinkA"}>{it.RIGHTNAME} <FontAwesomeIcon icon={this.iconRight} style={{ marginLeft: 10 }} /> </a>
                            </div>
                        }</Col>
                </Row>
            </Grid>
        </div>
    }
}