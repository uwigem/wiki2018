import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import remark from 'remark';
import reactRenderer from 'remark-react';
import './Accordion.css';
/**
 * Tabs is used for having markdown content within a few different tabs.
 * Originally created for use by the Business team.
 * @class
 */
export class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            accObjs: [],
        }
    }

    /**
     * handleChange handles the clicks of the tabs and sets the value
     * to the tab that is selected.
     * @param {event} event 
     * @param {number} value value of active tab selected
     */
    handleChange = (event, value) => {
        this.setState({ value });
    };

    componentWillMount() {
        this.setState({ accObjs: this.props.accObjs });
    }

    componentWillReceiveProps({ accObjs }) {
        this.setState({ accObjs });
    }

    render() {
        let it = this.state.accObjs;
        console.log(it);
        return <div style={{ marginTop: 20, marginBottom: 20, marginLeft: '5%', marginRight: '5%' }}>
            {it.map((d, i) => {
                return <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{d.title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={"accordionContent"}>
                        {/* <Typography > */}
                        {remark().use(reactRenderer).processSync(d.data).contents}
                        {/* </Typography> */}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            })}

        </div>
    }
}