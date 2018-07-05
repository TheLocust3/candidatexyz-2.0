import _ from 'lodash';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import { history } from '../constants';
import { fetchWebsiteTitle } from '../components/actions/global-actions';

import Navbar from '../components/containers/base/Navbar';
import Footer from '../components/containers/base/Footer';
import AdminOverlay from '../components/containers/base/AdminOverlay';

import RootRoutes from './RootRoutes';
import StaffRoutes from './StaffRoutes';

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

                    <div className='content-root'>
                        <AdminOverlay />

                        <div className='content-wrapper'>
                            <Navbar />
                            
                            <Switch>
                                <Route path='/staff' component={StaffRoutes} />

                                <Route path='/' component={RootRoutes} />
                            </Switch>
                        </div>
                    </div>

                    <Footer />

                    <MDCAutoInit />
                </div>
            </Router>
        );
    }
}

export default connect()(Routes);
