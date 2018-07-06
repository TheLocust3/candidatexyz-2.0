import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Text } from 'candidatexyz-common-js/lib/elements';

import { APP_DOMAIN } from '../../../constants';

import SimpleLinkContent from '../content/SimpleLinkContent';

class Footer extends React.Component {
    
    render() {
        return (
            <div className='footer'>
                <div className='footer-content'>
                    <div>
                        <SimpleLinkContent identifier='navLink1' type='headline6' className='footer-link' textClassName='footer-link-text' />

                        <SimpleLinkContent identifier='navLink2' type='headline6' className='footer-link' textClassName='footer-link-text' />

                        <SimpleLinkContent identifier='navLink3' type='headline6' className='footer-link' textClassName='footer-link-text' />

                        <SimpleLinkContent identifier='footerLink4' type='headline6' className='footer-link' textClassName='footer-link-text' />
                    </div>
                    <br />

                    <div>
                        <Link to='/privacy' className='footer-link'>
                            <Text type='body1' className='footer-link-text'>
                                Privacy
                            </Text>
                        </Link>

                        <a href={APP_DOMAIN} className='footer-link'>
                            <Text type='body1' className='footer-link-text'>
                                Staff Login
                            </Text>
                        </a>
                    </div>
                    <br />
                    
                    <div>
                        <a href='https://candidatexyz.com' className='footer-link'>
                            <Text type='body2'>
                                Created with candidateXYZ.
                            </Text>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Footer);
