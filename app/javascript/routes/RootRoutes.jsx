import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { CampaignActions, AnalyticEntryApi } from 'candidatexyz-common-js';

import { CAMPAIGN_NAME } from '../constants';

import Index from '../components/containers/Index';
import News from '../components/containers/news/News';
import ShowNews from '../components/containers/news/ShowNews';

import NotFound from '../components/containers/NotFound';

class RootRoutes extends React.Component {

    constructor(props) {
        super(props);

        this.state = { pageView: false };
    }

    componentWillMount() {
        this.props.dispatch(CampaignActions.fetchCampaignByName(CAMPAIGN_NAME));
    }

    componentWillReceiveProps(nextProps) {
        if (_.isEmpty(nextProps.campaign)) return;

        if (!this.state.pageView) {
            AnalyticEntryApi.pageView();

            this.setState({
                pageView: true
            });
        }
        
    }

    render() {
        if (_.isEmpty(this.props.campaign)) return null;
        
        return (
            <Switch>
                <Route exact path='/' component={Index} />
                <Route exact path='/news' component={News} />
                <Route exact path='/news/:url' component={ShowNews} />

                <Route path='/404' component={NotFound} />
                <Redirect from='*' to='/404' />
            </Switch>
        );
    }
}

function mapStateToProps(state) {
    return {
        campaign: state.campaigns.campaign
    };
}

export default connect(mapStateToProps)(RootRoutes);
