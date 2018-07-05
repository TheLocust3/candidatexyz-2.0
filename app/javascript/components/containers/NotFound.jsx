import React from 'react';
import { connect } from 'react-redux';

import { setDocumentTitle } from '../actions/global-actions';

class NotFound extends React.Component {

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Page Not Found'));
    }
    
    render() {
        return (
            <div className='content content-10'>
                Page Not Found
            </div>
        );
    }
}

export default connect()(NotFound);
