import React from 'react';
import { connect } from 'react-redux';

class Navbar extends React.Component {
    
    render() {
        return (
            <div className='content content-10'>
                Navbar
            </div>
        );
    }
}

export default connect()(Navbar);
