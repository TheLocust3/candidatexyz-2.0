import React from 'react';
import { connect } from 'react-redux';
import mdcAutoInit from '@material/auto-init';
import { MDCTextField } from '@material/textfield';
import { MDCCheckbox } from '@material/checkbox';
import { MDCSelect } from '@material/select';
import { MDCTabBar } from '@material/tabs';

// TODO: Find better way to do this
export default class MDCAutoInit extends React.Component {

    autoInit() {
        mdcAutoInit.deregisterAll();

        mdcAutoInit.register('MDCTextField', MDCTextField);
        mdcAutoInit.register('MDCCheckbox', MDCCheckbox);
        mdcAutoInit.register('MDCSelect', MDCSelect);
        mdcAutoInit.register('MDCTabBar', MDCTabBar);
        mdcAutoInit(document, () => { /* no messages */ });
    }

    componentDidMount() {
        this.autoInit();
    }

    render() {
        this.autoInit();
        
        return null;
    }
}
