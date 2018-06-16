import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// LoadingScreen is the page that appears when the page is loading.
export class CustomAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarEnabled: false
        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Washington iGEM
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}