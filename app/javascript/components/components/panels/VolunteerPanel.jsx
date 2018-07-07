import React from 'react';
import { Text, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import TextContent from '../../containers/content/TextContent';
import VolunteerForm from '../forms/VolunteerForm';

export default class VolunteerPanel extends React.Component {

    render() {
        return (
            <div className='content-10'>
                <center>
                    <Text type='headline3'><TextContent identifier='takeActionVolunteerHeader' /></Text>
                    <Text type='body1'><TextContent identifier='takeActionVolunteerBlurb' /></Text>
                </center>
            
                <div className='content-5'>
                    <VolunteerForm />
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}
