import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'candidatexyz-common-js/lib/elements';

class Footer extends React.Component {
    
    render() {
        return (
            <div className='footer'>
                <div className='footer-content'>
                    <Text type='body2'>© 2018 - candidateXYZ, LLC. All rights reserved</Text>
                </div>
            </div>
        );
    }
}

export default connect()(Footer);
