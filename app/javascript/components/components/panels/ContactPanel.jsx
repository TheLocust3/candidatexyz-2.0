import React from 'react';
import { Text, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import TextContent from '../../containers/content/TextContent';
import ContactForm from '../forms/ContactForm';

export default class ContactPanel extends React.Component {

    render() {
        return (
            <div className='content-10'>
                <center>
                    <Text type='headline3'><TextContent identifier='takeActionContactHeader' /></Text>
                    <Text type='body1'><TextContent identifier='takeActionContactBlurb' /></Text>
                </center>
            
                <div className='content-5'>
                    <ContactForm />
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}
