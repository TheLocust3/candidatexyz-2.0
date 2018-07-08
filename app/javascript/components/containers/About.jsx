import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'candidatexyz-common-js/lib/elements';

import TextContent from './content/TextContent';
import Parallax from '../components/common/Parallax';

class About extends React.Component {

    render() {
        return (
            <div className='content-bottom'>
                <Parallax height='75vh' width='100vw' imageIdentifier='aboutBackground'>
                    <Text type='headline2' className='white meet-header-text' outerClassName='meet-header'><TextContent identifier='aboutHeader' /></Text>
                </Parallax>
                <br />

                <div className='content-15'>
                    <Text type='body1'>
                        <TextContent identifier='aboutBlurb' />
                    </Text>
                </div>
            </div>
        );
    }
}

export default connect()(About);
