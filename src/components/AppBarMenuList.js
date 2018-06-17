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
        this.anchorElSpacing = 45;
    }

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (e) => {
        if (window && e.target.value !== undefined) {
            let link = `${this.props.name}${this.props.nav.links[e.target.value]}`;
            if (this.props.nav.title === "Home") {
                link = this.props.nav.links[e.target.value];
            }
            window.location.href = link;
        }
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