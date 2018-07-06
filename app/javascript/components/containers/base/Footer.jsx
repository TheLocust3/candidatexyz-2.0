import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Text } from 'candidatexyz-common-js/lib/elements';

import { APP_DOMAIN } from '../../../constants';

import LinkContent from '../content/LinkContent';

class Footer extends React.Component {
    
    render() {
        return (
            <div className='footer'>
                <div className='footer-content'>
                    <div>
                        <LinkContent identifier='navLink1' type='headline6' className='footer-link' textClassName='footer-link-text' />

                        <LinkContent identifier='navLink2' type='headline6' className='footer-link' textClassName='footer-link-text' />

                        <LinkContent identifier='navLink3' type='headline6' className='footer-link' textClassName='footer-link-text' />

                        <LinkContent identifier='footerLink4' type='headline6' className='footer-link' textClassName='footer-link-text' />
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
                                Created with candidate<span className='xyz'>XYZ</span>.
                            </Text>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Footer);
