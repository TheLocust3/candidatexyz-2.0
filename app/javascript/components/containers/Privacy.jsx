import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'candidatexyz-common-js/lib/elements';

import TextContent from './content/TextContent';
import Parallax from '../components/common/Parallax';

class Privacy extends React.Component {

    render() {
        return (
            <div className='content content-15'>
                <Text type='headline2'><TextContent identifier='privacyHeader' /></Text>
                <br />

                <Text type='body1'>
                    <TextContent identifier='privacyBlurb' />
                </Text>
            </div>
        );
    }
}

export default connect()(Privacy);
