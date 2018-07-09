import React from 'react';
import { connect } from 'react-redux';
import { Text, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import { setNavbarType, TRANSPARENT } from '../actions/global-actions';

import TextContent from './content/TextContent';
import Parallax from '../components/common/Parallax';
import SocialMedia from '../components/common/SocialMedia';
import SlimContactForm from '../components/forms/SlimContactForm';
import DonateBox from '../components/DonateBox';

class Index extends React.Component {

    componentDidMount() {
        this.props.dispatch(setNavbarType(TRANSPARENT));
    }

    render() {
        return (
            <div className='content-bottom'>
                <Parallax height='100vh' width='100vw' imageIdentifier='indexBackground'>
                    <DonateBox />

                    <div className='header-box'>
                        <div className='header-box-left'>
                            <Text outerClassName='sign-up-text' className='header-text' type='subtitle1'><TextContent className='upcase' identifier='indexHeaderBoxSignUp' /></Text>

                            <div className='sign-up-form'>
                                <SlimContactForm />
                            </div>
                        </div>

                        <div className='header-box-right'>
                            <Text className='header-text' type='subtitle1'><TextContent className='upcase' identifier='indexHeaderBoxFollow' /></Text>

                            <div className='header-social-media'>
                                <SocialMedia size={2} />
                            </div>
                        </div>
                    </div>
                </Parallax>
                <br />

                Hello World!

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Index);
