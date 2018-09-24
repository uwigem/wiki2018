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

        this.getLink = this.getLink.bind(this);

        // styles
        this.buttonStyle = {
            margin: "2px",
            textTransform: 'none',
            fontFamily: 'RalewayBold',
            marginLeft: 15
        };
        this.anchorElSpacing = 45;
        this.buttonVariant = "text";
        this.menuItemStyles = {
            color: "#000000",
            textDecoration: "none",
            fontFamily: 'RalewayBold'
        };
    }

    componentWillMount() {
        this.appbarStyle = {
            paddingTop: this.props.data.getButtonHeight()
        };
        this.a = this.props.a;
    }

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
        this.props.removeHovered();
    };

    handleLink = () => {
        this.a();
        this.handleClose();
    }

    /**
     * Gets the link of the matching name for the menu item. Special
     * case for "Home"
     * @param {number} index index of matching link from name
     */
    getLink(index) {
        let link = `${this.props.name}${this.props.nav.links[index]}`;
        if (this.props.nav.title === "Home") {
            link = this.props.nav.links[index];
        }
        return link;
    }

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
                    color="inherit"
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
                                style={this.menuItemStyles}
                                component="a"
                                href={this.getLink(index)}
                                disabled={this.props.pageTitle === this.props.nav.links[index]}
                                key={`${name}-${index}`}
                                onClick={this.handleLink}
                                value={index}>{name}
                            </MenuItem>
                        );
                    })}
                </Menu>
            </div >

        );
    }
}