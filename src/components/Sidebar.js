import React, { Component } from 'react';
import { SwipeableDrawer, List, Divider, ListItem } from '@material-ui/core';

// LoadingScreen is the page that appears when the page is loading.
export class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false
        }
    }

    componentWillMount() {
        this.setState({
            drawerOpen: this.props.drawerOpen
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            drawerOpen: nextProps.drawerOpen
        });
    }

    render() {
        return (
            <SwipeableDrawer
                anchor="right"
                open={this.state.drawerOpen}
                onClose={() => this.props.toggleDrawer()}
                onOpen={() => this.props.toggleDrawer()}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={() => this.props.toggleDrawer()}
                    onKeyDown={() => this.props.toggleDrawer()}
                >
                    <div style={{ width: 250 }}>
                        <List>
                            <ListItem>Test</ListItem>
                        </List>
                        <Divider />
                        <List></List>
                    </div>
                </div>
            </SwipeableDrawer>
        );
    }
}