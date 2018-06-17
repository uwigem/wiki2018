import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// LoadingScreen is the page that appears when the page is loading.
export class CustomAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarEnabled: false,
            minimized: false
        }
        this.updateDim = this.updateDim.bind(this);

        // AppBar specific constants
        this.appbarStyle = {
            paddingTop: "2px"
        }
        this.logoHeight = 30;
        this.minWidth = 600;
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
    }

    /**
     * updateDim will update the minimized state of the AppBar
     * based on a minimum width, currently set to be 600
     * based on the AppBar's default.
     */
    updateDim() {
        if (window.innerWidth <= this.minWidth && !this.state.minimized) {
            this.setState({ minimized: true });
        } else if (window.innerWidth > this.minWidth && this.state.minimized) {
            this.setState({ minimized: false });
        }
    }

    render() {
        return (
            <AppBar style={this.appbarStyle}>
                <Toolbar>
                    <Typography variant="title" color="secondary">
                        <img height={this.logoHeight} alt="Washington Logo" src={this.props.data.getLogo()} />
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}