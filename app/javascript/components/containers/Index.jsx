import React from 'react';
import { connect } from 'react-redux';
import { Text, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import { transparentNavbarManager } from '../../helpers';
import { setDocumentTitle, setNavbarType, TRANSPARENT } from '../actions/global-actions';
import { fetchPostType } from '../actions/post-actions';

import TextContent from './content/TextContent';
import Parallax from '../components/common/Parallax';
import SocialMedia from '../components/common/SocialMedia';
import SlimContactForm from '../components/forms/SlimContactForm';
import DonateBox from '../components/DonateBox';
import SlideshowPanel from '../components/panels/SlideshowPanel';
import NewsPanel from '../components/panels/NewsPanel';
import AboutPanel from '../components/panels/AboutPanel';
import MobileDonatePanel from '../components/panels/MobileDonatePanel';

class Index extends React.Component {

    componentWillMount() {
        this.props.dispatch(setDocumentTitle('Home'));
        this.props.dispatch(setNavbarType(TRANSPARENT));

        this.props.dispatch(fetchPostType('news'));
    }

    componentDidUpdate() {
        transparentNavbarManager(this.props);
    }

    render() {
        if (!this.props.isReady) return null;

        return (
            <div className='content-bottom'>
                <Parallax className='index-header' width='100vw' imageIdentifier='indexBackground'>
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
                <MobileDonatePanel />
                <br />

                <SlideshowPanel />
                
                <NewsPanel posts={this.props.posts} />

                <AboutPanel />

                <center>
                    <SocialMedia size={2} className='social-media-footer' iconClassName='social-media-footer-icon' />
                </center>

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.posts.isReady,
        posts: state.posts.postsOfType,
        navbarType: state.global.navbarType
    };
}

export default connect(mapStateToProps)(Index);
