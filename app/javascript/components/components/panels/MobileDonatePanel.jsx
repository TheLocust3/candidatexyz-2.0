import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Button, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import { MAX_MOBILE_WIDTH } from '../../../constants';

import Parallax from '../common/Parallax';
import TextContent from '../../containers/content/TextContent';
import SlimContactForm from '../forms/SlimContactForm';
import SocialMedia from '../common/SocialMedia';
import DonateBox from '../DonateBox';

export default class MobileDonatePanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lastRenderedWidth: $(document).width() };
    }

    updateDimensions() {
        let width = $(document).width();
        if ((this.state.lastRenderedWidth > MAX_MOBILE_WIDTH && width < MAX_MOBILE_WIDTH) || (this.state.lastRenderedWidth < MAX_MOBILE_WIDTH && width > MAX_MOBILE_WIDTH)) {
            this.setState({
                lastRenderedWidth: width
            });

            this.forceUpdate();
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.updateDimensions());
    }

    renderMobile() {
        return (
            <div>
                <div className='mobile-contact-panel'>
                    <br />
                    <Text className='header-text white' type='subtitle1'><TextContent className='upcase' identifier='indexHeaderBoxSignUp' /></Text>

                    <SlimContactForm mobile={true} />

                    <Text className='header-text white' type='subtitle1'><TextContent className='upcase' identifier='indexHeaderBoxFollow' /></Text>
                    <div className='header-social-media'>
                        <SocialMedia size={2} />
                    </div>
                </div>

                <DonateBox mobile={true} />
            </div>
        );
    }

    render() {
        if (this.state.lastRenderedWidth < MAX_MOBILE_WIDTH) {
            return this.renderMobile();
        } else {
            return null;
        }
    }
}
