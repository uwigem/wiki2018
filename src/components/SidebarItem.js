import React, { Component } from 'react';
import { List, ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

/**
 * SidebarItem creates the individual sidebar dropdowns
 */
export class SidebarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.getLink = this.getLink.bind(this);
        this.firstPadding = "15px";
        this.secondPadding = "30px";
    }

    /**
     * handleClick handles the sidebar dropdown opening or closing
     */
    handleClick() {
        this.setState({ open: !this.state.open });
    }

    /**
     * handleLinkClick works similar to how handleClose() does in
     * AppBarMenuList.js. In fact, TODO, that should be changed
     * to this version.
     * 
     * This part basically takes the thing clicked and sets a 
     * redirect link
     * @param {integer} index of sub-element
     */
    handleLinkClick(index) {
        if (window) {
            let link = `${this.props.name}${this.props.nav.links[index]}`;
            if (this.props.nav.title === "Home") {
                link = this.props.nav.links[index];
            }
            window.location.href = link;
        }
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

    render() {
        let a = this.props.a;
        return (
            <div>
                <ListItem button onClick={this.handleClick}>
                    <ListItemText style={{ paddingLeft: this.firstPadding }} primary={this.props.nav.title} />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div">
                        {this.props.nav.names.map((name, index) => {
                            return (
                                <ListItem
                                    button
                                    key={`${name}-${index}`}
                                    component="a"
                                    href={this.getLink(index)}
                                    onClick={a}
                                >
                                    <ListItemText
                                        style={{ paddingLeft: this.secondPadding }}
                                        primary={name}
                                        disabled={this.props.pageTitle === this.props.nav.links[index]}
                                        key={`${name}-li-${index}`} />
                                </ListItem>
                            )
                        })}
                    </List>
                </Collapse>
            </div>
        );
    }
}