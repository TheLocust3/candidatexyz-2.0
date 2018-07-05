import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
    
    render() {
        return (
            <div className='content content-10'>
                Footer
            </div>
        );
    }
}

export default connect()(Footer);
