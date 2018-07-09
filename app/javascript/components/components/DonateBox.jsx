import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button } from 'candidatexyz-common-js/lib/elements';

import TextContent from '../containers/content/TextContent';
import ButtonLinkContent from '../containers/content/ButtonLinkContent';

export default class DonateBox extends React.Component {

    render() {
        return (
            <div className='donate-box'>
                <div className='donate-header relative'>
                    <Text type='headline4' className='header-text white middle'>
                        <TextContent className='upcase' identifier='indexDonateBoxHeader' />
                    </Text>
                </div>

                <div className='mdc-layout-grid donate-buttons'>
                    <center>
                        <div className='mdc-layout-grid__inner'>
                            <div className='mdc-layout-grid__cell--span-4'>
                                <ButtonLinkContent identifier='donateButton1' type='subtitle1' className='unstyled-link-white' textClassName='header-text upcase' buttonClassName='donate-button' />
                            </div>

                            <div className='mdc-layout-grid__cell--span-4'>
                                <ButtonLinkContent identifier='donateButton2' type='subtitle1' className='unstyled-link-white' textClassName='header-text upcase' buttonClassName='donate-button' />
                            </div>

                            <div className='mdc-layout-grid__cell--span-4'>
                                <ButtonLinkContent identifier='donateButton3' type='subtitle1' className='unstyled-link-white' textClassName='header-text upcase' buttonClassName='donate-button' />
                            </div>

                            <div className='mdc-layout-grid__cell--span-4'>
                                <ButtonLinkContent identifier='donateButton4' type='subtitle1' className='unstyled-link-white' textClassName='header-text upcase' buttonClassName='donate-button' />
                            </div>

                            <div className='mdc-layout-grid__cell--span-4'>
                                <ButtonLinkContent identifier='donateButton5' type='subtitle1' className='unstyled-link-white' textClassName='header-text upcase' buttonClassName='donate-button' />
                            </div>

                            <div className='mdc-layout-grid__cell--span-4'>
                                <ButtonLinkContent identifier='donateButton6' type='subtitle1' className='unstyled-link-white' textClassName='header-text upcase' buttonClassName='donate-button' />
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        );
    }
}
