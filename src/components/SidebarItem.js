import React, { Component } from 'react';
import { SwipeableDrawer, List, Divider, ListItem } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

// LoadingScreen is the page that appears when the page is loading.
export class SidebarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.firstPadding = "15px";
        this.secondPadding = "30px";
    }

    componentWillMount() {
    }

    handleClick() {
        this.setState({ open: !this.state.open });
    }

    handleLinkClick(index) {
        if (window) {
            let link = `${this.props.name}${this.props.nav.links[index]}`;
            if (this.props.nav.title === "Home") {
                link = this.props.nav.links[index];
            }
            window.location.href = link;
        }
    }

    render() {
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
                                    onClick={() => this.handleLinkClick(index)}
                                >
                                    <ListItemText
                                        style={{ paddingLeft: this.secondPadding }}
                                        primary={name}
                                        disabled={this.props.pageTitle === this.props.nav.links[index]}
                                        key={`${name}-li-${index}`}
                                        onClick={() => this.handleLinkClick(index)} />
                                </ListItem>
                            )
                        })}


                    </List>
                </Collapse>
            </div>
        );
    }
}