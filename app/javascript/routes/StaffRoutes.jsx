import _ from 'lodash';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserActions } from 'candidatexyz-common-js';

import { APP_DOMAIN } from '../constants';

import RedirectExternal from './RedirectExternal';

import EditPost from '../components/containers/posts/EditPost';
import CreatePost from '../components/containers/posts/CreatePost';
import EditRichTextContent from '../components/containers/content/EditRichTextContent';
import EditRawContent from '../components/containers/staff/EditRawContent';
import Help from '../components/containers/staff/Help';

class StaffRoutes extends React.Component {

    componentWillMount() {
        this.props.dispatch(UserActions.fetchCurrentUser());
    }

    render() {
        if (!this.props.isReady) return null;
        if (_.isEmpty(this.props.user)) return <RedirectExternal to={APP_DOMAIN} />;

        return (
            <Route path='/staff'>
                <Switch>
                    <Route exact path='/staff/posts/:postType/:url/edit' component={EditPost} />
                    <Route exact path='/staff/posts/:postType/new' component={CreatePost} />

                    <Route exact path='/staff/content/:identifier/edit' component={EditRichTextContent} />

                    <Route exact path='/staff/edit-content' component={EditRawContent} />
                    <Route exact path='/staff/help' component={Help} />
                </Switch>
            </Route>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.users.isCurrentUserReady,
        user: state.users.currentUser
    };
}

export default connect(mapStateToProps)(StaffRoutes);
