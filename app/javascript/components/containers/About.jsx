import React from 'react';
import { connect } from 'react-redux';

class About extends React.Component {

    render() {
        return (
            <div className='content'>
                About
            </div>
        );
    }
}

export default connect()(About);
