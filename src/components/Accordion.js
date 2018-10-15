import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import remark from 'remark';
import reactRenderer from 'remark-react';
import Fade from 'react-reveal/Fade';

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
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Expansion Panel 1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>




            {/*         
        <AppBar position="static">
            <TabsMUI value={this.state.value} onChange={this.handleChange}>
                {it.map((d, i) => <Tab key={'tab' + i} value={i} label={d.title} />)}
            </TabsMUI>
        </AppBar>
            {it.map((d, i) => {
                return <Typography component="div" style={{
                    backgroundColor: 'white',
                    border: '1px solid gray',
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    padding: 8 * 3,
                    display: this.state.value === i ? '' : 'none',
                    transition: 'display 0.5s',
                    lineHeight: 'normal'
                }} key={'tabC' + i}>
                    <Fade clear when={this.state.value === i} duration={500} cascade>
                        {remark().use(reactRenderer).processSync(d.data).contents}
                    </Fade>
                </Typography>
            })} */}




        </div>
    }
}