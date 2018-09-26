import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBarMenuList } from './AppBarMenuList';
import { IconButton } from '@material-ui/core';
import { Sidebar } from './Sidebar'
import './CustomAppBar.css';

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
            drawerOpen: false,
            hovered: false,
            pageTop: true
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
        this.minWidth = 768;
        // this.hoveredColor = '#ffcc16';
        this.hoveredColor = '#420dab';
        // this.notHoveredColor = 'rgba(66,13,171,0.01)';
        this.pageTopThresHeight = 300;

        // window.addEventListener('scroll', () => {
        //     if (window.pageYOffset > this.pageTopThresHeight && this.state.pageTop && !this.state.minimized) {
        //         this.removePageTop();
        //     } else if (window.pageYOffset <= this.pageTopThresHeight) {
        //         this.setPageTop();
        //     }
        // })
    }

    setHovered = () => {
        // this.setState({ hovered: true });
    }

    removeHovered = () => {
        // this.setState({ hovered: false });
    }

    setPageTop = () => {
        // this.setState({ pageTop: true });
    }

    removePageTop = () => {
        // this.setState({ pageTop: false });
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
        let a = this.props.a;
        return (
            <div style={{ ...this.appbarStyle }}>
                <AppBar className={'navHov'} style={{ backgroundColor: this.state.pageTop || this.state.hovered ? this.hoveredColor : this.notHoveredColor, boxShadow: 'none' }}
                    onMouseEnter={this.setHovered} 
                    onMouseLeave={this.removeHovered}
                    >
                    <Toolbar>
                        <Typography style={this.logoStyle} variant="title" color="primary">
                            {/* Image fallback
                            
                            <img height={this.logoHeight} alt="Washington Logo" src={this.props.data.getLogo()} /> */}
                            <a href="http://2018.igem.org/Team:Washington">
                                <svg style={{color: 'white'}} height={this.logoHeight} viewBox="0 0 116.25 80">                       
                                    <g>
                                        <path style={{fill: 'white',stroke:'none', strokeWidth: 4}}d="M84.384,3.819c0,0.858,0,12.238,0,13.098c0.856,0,9.206,0,9.206,0
                                        L83.311,55.168c0,0-12.577-50.636-12.756-51.349c-0.687,0-12.626,0-13.303,0c-0.188,0.696-13.796,51.352-13.796,51.352
                                        l-9.466-38.254c0,0,8.726,0,9.585,0c0-0.859,0-12.239,0-13.098c-0.919,0-37.532,0-38.451,0c0,0.858,0,12.238,0,13.098
                                        c0.851,0,8.52,0,8.52,0s14.703,58.809,14.88,59.523c0.708,0,19.942,0,20.639,0c0.183-0.697,9.852-37.454,9.852-37.454
                                        s9.187,36.747,9.364,37.454c0.707,0,19.941,0,20.639,0c0.186-0.702,15.656-59.523,15.656-59.523s7.6,0,8.449,0
                                        c0-0.859,0-12.239,0-13.098C112.217,3.819,85.292,3.819,84.384,3.819z"/>
                                    </g>
                                </svg>
                            </a>
                        </Typography>
                        {/* If screen bigger than this.minwidth, show a button list along the nav bar */}
                        {!this.state.minimized && this.props.data.getNavbarData().map((nav, index) => {
                            return <AppBarMenuList
                                a={a}
                                data={this.props.data}
                                name={this.props.name}
                                pageTitle={this.props.pageTitle}
                                nav={nav}
                                key={`abmL-${index}`}
                                hovered={this.state.hovered}
                                removeHovered={this.removeHovered} />
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
                                    title={this.props.pageTitle}
                                    a={a} />
                            </div>
                        }
                    </Toolbar>
                </AppBar>
            </div >
        );
    }
}