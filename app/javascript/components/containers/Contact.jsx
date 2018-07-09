import React from 'react';
import { connect } from 'react-redux';
import { Text, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import { setDocumentTitle, setNavbarType, DEFAULT } from '../actions/global-actions';

import MessageForm from '../components/forms/MessageForm';
import TextContent from './content/TextContent';

class Contact extends React.Component {

    componentWillMount() {
        this.props.dispatch(setDocumentTitle('Contact'));
        this.props.dispatch(setNavbarType(DEFAULT));
    }

    render() {
        return (
            <div className='content'>
                <div className='mdc-layout-grid'>
                    <div className='mdc-layout-grid__inner'>
                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-5'>
                            <br />

                            <Text type='headline3'>
                                <TextContent identifier='contactHeader' />
                            </Text>
                            <br />

                            <Text type='body1' className='content-2'>
                                <TextContent identifier='contactBlurb' />
                            </Text>
                        </div>

                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-7'>
                            <MessageForm />
                        </div>
                    </div>
                    <br /><br />

                    <div className='mdc-layout-grid__inner'>
                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-8'>
                            <iframe className='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.2509632529427!2d-71.06394388451153!3d42.35849057918693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3709b4b5d6127%3A0xbe806688e1e49d85!2s11+Beacon+St%2C+Boston%2C+MA+02108!5e0!3m2!1sen!2sus!4v1520863408329' frameBorder='0' style={{ width: '100%', height: '450px', border: 0 }} allowFullScreen></iframe>
                        </div>

                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-4'>
                            <Text type='headline4'><TextContent identifier='contactVisitHeader' /></Text>
                            <Text type='body1'><TextContent identifier='contactVisitAddress' /></Text>
                            <br />

                            <Text type='headline4'><TextContent identifier='contactPOBoxHeader' /></Text>
                            <Text type='body1'><TextContent identifier='contactPOBoxAddress' /></Text>
                            <br />

                            <Text type='headline4'><TextContent identifier='contactCallHeader' /></Text>
                            <Text type='body1'><TextContent identifier='contactPhoneNumber' /></Text>
                            <br />
                        </div>
                    </div>
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Contact);
