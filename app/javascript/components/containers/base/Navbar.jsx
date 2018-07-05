import React from 'react';
import { connect } from 'react-redux';

class Navbar extends React.Component {
    
    render() {
        return (
            <div className='navbar'>
                Navbar
            </div>
        );
    }
}

export default connect()(Navbar);
