import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'candidatexyz-common-js/lib/elements';

import { setDocumentTitle } from '../actions/global-actions';

class NotFound extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Page Not Found'));
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
