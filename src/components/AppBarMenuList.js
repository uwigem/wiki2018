import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export class AppBarMenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };

        this.appbarStyle = {
            paddingTop: "7px"
        };
        this.buttonStyle = {
            margin: "2px",
            textTransform: 'none'
        };
    }

    handleClick = (event) => {
        console.log(event.currentTarget)
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <div style={this.appbarStyle}>
                <Button
                    variant="contained"
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    color="secondary"
                    style={this.buttonStyle}
                >
                    Open Menu
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    getContentAnchorEl={null} // stupid fixes https://github.com/mui-org/material-ui/issues/7961
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
            </div>

        );
    }
}