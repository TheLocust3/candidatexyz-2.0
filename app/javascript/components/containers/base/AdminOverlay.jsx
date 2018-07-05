import React from 'react';
import { connect } from 'react-redux';

class AdminOverlay extends React.Component {
    
    render() {
        return (
            <div>
                Admin Overlay
            </div>
        );
    }
}

export default connect()(AdminOverlay);
