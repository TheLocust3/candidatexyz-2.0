import _ from 'lodash';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../constants';
import { fetchWebsiteTitle } from '../components/actions/global-actions';

import MDCAutoInit from '../components/components/MDCAutoInit';
import Navbar from '../components/containers/base/Navbar';
import Footer from '../components/containers/base/Footer';
import AdminOverlay from '../components/containers/base/AdminOverlay';

import RootRoutes from './RootRoutes';

// Always start navigation at the top of the page
const ScrollToTop = () => {
    window.scrollTo(0, 0);

    return null;
};

class Routes extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchWebsiteTitle());
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Route component={ScrollToTop} />

                    <Navbar />
                    <AdminOverlay />

                    <Switch>
                        <Route path='/' component={RootRoutes} />
                    </Switch>

                    <Footer />

                    <MDCAutoInit />
                </div>
            </Router>
        );
    }
}

export default connect()(Routes);
