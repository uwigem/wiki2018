import React, { Component } from 'react';
import { SwipeableDrawer, List } from '@material-ui/core';
import { SidebarItem } from './SidebarItem';

/**
 * Sidebar controls the sidebar appearing and generation of
 * the individual SidebarItems 
 */
export class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false
        }
        this.drawerWidth = 250;
    }

    componentWillMount() {
        this.setState({
            drawerOpen: this.props.drawerOpen
        });
    }

    /**
     * The component will constantly be updating based on what
     * the parent state is. This object WON'T be deleted then
     * recreated, but we have to update it somehow. The way to
     * do this is by introducing new props to it, which is
     * possible to do with componentWillReceiveProps
     * @param {props} nextProps 
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            drawerOpen: nextProps.drawerOpen
        });
    }

    render() {
        let a = this.props.a;
        return (
            <SwipeableDrawer
                anchor={this.props.side}
                open={this.state.drawerOpen}
                onClose={() => this.props.toggleDrawer()}
                onOpen={() => this.props.toggleDrawer()}>
                <div
                    tabIndex={0}
                    role="button"
                >
                    <div style={{ width: this.drawerWidth }}>
                        <List style={{ paddingTop: this.props.data.getButtonHeight() }}>
                            {this.props.data.getNavbarData().map((nav, index) => {
                                return <SidebarItem
                                    data={this.props.data}
                                    name={this.props.name}
                                    pageTitle={this.props.pageTitle}
                                    nav={nav}
                                    key={`sbit-${index}`}
                                    a={a} />
                            })}
                        </List>
                    </div>
                </div>
            </SwipeableDrawer>
        );
    }
}