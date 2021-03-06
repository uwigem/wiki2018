import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TabsMUI from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import remark from 'remark';
import reactRenderer from 'remark-react';
import Fade from 'react-reveal/Fade';
import './Tabs.css';

/**
 * Tabs is used for having markdown content within a few different tabs.
 * Originally created for use by the Business team.
 * @class
 */
export class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            tabObjs: [],
        }
    }

    /**
     * handleChange handles the clicks of the tabs and sets the value
     * to the tab that is selected.
     * @param {event} event 
     * @param {number} value value of active tab selected
     */
    handleChange = (event, value) => {
        this.props.updateDim();
        this.setState({ value });
    };

    componentWillMount() {
        this.setState({ tabObjs: this.props.tabObjs });
    }

    componentWillReceiveProps({ tabObjs }) {
        this.setState({ tabObjs });
    }

    render() {
        let it = this.state.tabObjs;
        return <div style={{ margin: 'auto', marginTop: 20, marginBottom: 20, width: '95%' }}><AppBar position="static">
            <TabsMUI value={this.state.value} onChange={this.handleChange} style={{ width: '100%' }}
                scrollable
                scrollButtons="auto">
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
                    lineHeight: 'normal',
                    width: '100%'
                }} key={'tabC' + i}>
                    <Fade clear when={this.state.value === i} duration={500} cascade>
                        <div style={{ fontSize: '16px' }} className={"tabsContent"}>
                            {remark().use(reactRenderer).processSync(d.data).contents}
                        </div>
                    </Fade>
                </Typography>
            })}
        </div>
    }
}