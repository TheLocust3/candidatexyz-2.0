import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { CampaignActions, AnalyticEntryApi } from 'candidatexyz-common-js';

import { CAMPAIGN_NAME } from '../constants';

import Index from '../components/containers/Index';
import Privacy from '../components/containers/Privacy';
import Contact from '../components/containers/Contact';
import About from '../components/containers/About';
import TakeAction from '../components/containers/TakeAction';

import News from '../components/containers/news/News';
import ShowNews from '../components/containers/news/ShowNews';
import Issues from '../components/containers/issues/Issues';
import ShowIssue from '../components/containers/issues/ShowIssue';

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
                <Route exact path='/privacy' component={Privacy} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/about' component={About} />
                <Route exact path='/action' component={TakeAction} />

                <Route exact path='/news' component={News} />
                <Route exact path='/news/:url' component={ShowNews} />

                <Route exact path='/issues' component={Issues} />
                <Route exact path='/issues/:url' component={ShowIssue} />

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
