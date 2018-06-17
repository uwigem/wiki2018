import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

/**
 * AppBarMenuList is a single menu per index of data.navbarData.
 * This code is adapted from MaterialUI provided code, so I will
 * only be commenting parts that I have created.
 * 
 * Understanding of materialUI part isn't difficult, but it uses 
 * abnormal syntax to what we've been taught. 
 */
export class AppBarMenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };

        // styles
        this.buttonStyle = {
            margin: "2px",
            textTransform: 'none'
        };
        this.anchorElSpacing = 45;
        this.buttonVariant = "contained";
    }

    componentWillMount() {
        this.appbarStyle = {
            paddingTop: this.props.data.getButtonHeight()
        };
    }

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (e) => {
        // This part will create the links and the redirect when clicking
        if (window && e.target.value !== undefined) {
            let link = `${this.props.name}${this.props.nav.links[e.target.value]}`;
            if (this.props.nav.title === "Home") {
                link = this.props.nav.links[e.target.value];
            }
            window.location.href = link;
        }
        this.setState({ anchorEl: null });
    };

    /**
     * Render a single menu
     * IE
     *  Project
     *      Design
     *      BioBricks
     *      InterLab
     */
    render() {
        const { anchorEl } = this.state;

        return (
            <div style={this.appbarStyle}>
                <Button
                    variant={this.buttonVariant}
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    color="secondary"
                    style={this.buttonStyle}
                >
                    {this.props.nav.title}
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: this.anchorElSpacing,
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    getContentAnchorEl={null} // stupid fixes https://github.com/mui-org/material-ui/issues/7961
                >
                    {this.props.nav.names.map((name, index) => {
                        return (
                            <MenuItem
                                disabled={this.props.pageTitle === this.props.nav.links[index]}
                                key={`${name}-${index}`}
                                onClick={this.handleClose}
                                value={index}>{name}
                            </MenuItem>
                        );
                    })}
                </Menu>
            </div>

        );
    }
}