import _ from 'lodash';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { StaffActions } from 'candidatexyz-common-js';

import EditPost from '../components/containers/posts/EditPost';
import CreatePost from '../components/containers/posts/CreatePost';
import Help from '../components/containers/staff/Help';

class StaffRoutes extends React.Component {

    componentWillMount() {
        this.props.dispatch(StaffActions.fetchCurrentUser());
    }

    render() {
        if (_.isEmpty(this.props.user)) return null;

        return (
            <Route path='/staff'>
                <Switch>
                    <Route exact path='/staff/posts/:postType/:url/edit' component={EditPost} />
                    <Route exact path='/staff/posts/:postType/new' component={CreatePost} />

                    <Route exact path='/staff/help' component={Help} />
                </Switch>
            </Route>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.staff.currentUser
    };
}

export default connect(mapStateToProps)(StaffRoutes);
