import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Button, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import Parallax from '../common/Parallax';

import TextContent from '../../containers/content/TextContent';

export default class AboutPanel extends React.Component {

    render() {
        return (
            <div>
                <Parallax height='70vh' width='100vw' imageIdentifier='aboutPanelBackground'>
                    <div className='relative' style={{ height: '70vh' }}>
                        <div className='about-box-wrapper'>
                            <div className='about-box middle'>
                                <Text type='headline5' className='header-text upcase'><TextContent identifier='aboutPanelHeader' /></Text>
                                <hr />

                                <Text type='body2'><TextContent identifier='aboutPanelBlurb' /></Text>

                                <Link to='/about'><Button className='about-box-button header-text'>Read More</Button></Link>
                            </div>
                        </div>
                    </div>
                </Parallax>

                <MDCAutoInit />
            </div>
        );
    }
}
