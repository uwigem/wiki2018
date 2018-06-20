import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBarMenuList } from './AppBarMenuList';
import { IconButton } from '@material-ui/core';
import { Sidebar } from './Sidebar'

/**
 * CustomAppBar controls the display and functionality of the
 * navigation bar, navigation bar buttons, hamburger button,
 * and the sidebar itself. 
 */
export class CustomAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarEnabled: false,
            minimized: false,
            drawerOpen: false
        }
        this.updateDim = this.updateDim.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);

        // AppBar specific constants
        this.appbarStyle = {
            flexGrow: 1,
            paddingTop: "2px"
        }
        this.logoStyle = {
            flex: 1,
            textAlign: 'left'
        }
        this.logoHeight = 30;
        this.minWidth = 660;
    }

    /**
     * On mount, set up minimized state or not, default is not.
     * Also, set a window resize event listener
     */
    componentWillMount() {
        window.addEventListener("resize", this.updateDim);
        if (window.innerWidth <= this.minWidth) {
            this.setState({ minimized: true });
        }

        this.hamburgerStyle = {
            paddingTop: this.props.data.getButtonHeight()
        }
    }

    /**
     * updateDim will update the minimized state of the AppBar
     * based on a minimum width, currently set to be 600
     * based on the AppBar's default.
     * 
     * Will also automatically close the drawer. If we don't do that
     * then we can open the drawer, stretch the page, have the drawer
     * disappear, then minimize the page again, and the drawer would
     * reappear
     */
    updateDim() {
        if (window.innerWidth <= this.minWidth && !this.state.minimized) {
            this.setState({ minimized: true });
        } else if (window.innerWidth > this.minWidth && this.state.minimized) {
            this.setState({ minimized: false, drawerOpen: false });
        }
    }

    /**
     * toggleDrawer toggles the state of the drawer, only should be
     * running when the screen width is < this.minWidth
     */
    toggleDrawer() {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }

    render() {
        return (
            <div style={this.appbarStyle}>
                <AppBar>
                    <Toolbar>
                        <Typography style={this.logoStyle} variant="title" color="secondary">
                            <img height={this.logoHeight} alt="Washington Logo" src={this.props.data.getLogo()} />
                        </Typography>
                        {/* If screen bigger than this.minwidth, show a button list along the nav bar */}
                        {!this.state.minimized && this.props.data.getNavbarData().map((nav, index) => {
                            return <AppBarMenuList a={this.props.a} data={this.props.data} name={this.props.name} pageTitle={this.props.pageTitle} nav={nav} key={`abmL-${index}`} />
                        })}
                        {/* If the screen is less, show a hamburger button that shows a sidebar */}
                        {this.state.minimized &&
                            <div style={this.hamburgerStyle}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={() => this.toggleDrawer()}
                                ><MenuIcon /></IconButton>
                                <Sidebar
                                    drawerOpen={this.state.drawerOpen}
                                    toggleDrawer={this.toggleDrawer}
                                    data={this.props.data}
                                    side="right"
                                    name={this.props.name}
                                    title={this.props.pageTitle} />
                            </div>
                        }
                    </Toolbar>
                </AppBar>
            </div >
        );
    }
}