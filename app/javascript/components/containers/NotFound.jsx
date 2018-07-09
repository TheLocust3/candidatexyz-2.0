import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'candidatexyz-common-js/lib/elements';

import { setDocumentTitle, setNavbarType, DEFAULT } from '../actions/global-actions';

class NotFound extends React.Component {

    componentWillMount() {
        this.props.dispatch(setDocumentTitle('Page Not Found'));
        this.props.dispatch(setNavbarType(DEFAULT));
    }
    
    render() {
        return (
            <div className='content content-10'>
                <Text type='headline4'>Page Not Found</Text>

                <Text type='body1'>You've found a page that doesn't exist!</Text>
            </div>
        );
    }
}

export default connect()(NotFound);
