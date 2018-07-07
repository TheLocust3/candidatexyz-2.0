import React from 'react';
import { connect } from 'react-redux';
import { Text, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import TextContent from './content/TextContent';
import ContactPanel from '../components/panels/ContactPanel';
import VolunteerPanel from '../components/panels/VolunteerPanel';

class TakeAction extends React.Component {

    render() {
        return (
            <div className='content content-10'>
                <Text type='headline2'><TextContent identifier='takeActionHeader' /></Text>
                <br />
                <Text type='headline6'><TextContent identifier='takeActionBlurb' /></Text>
                <br /><br /><br />
            
                <ContactPanel />
                <br /><br /><br />

                <VolunteerPanel />

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(TakeAction);
