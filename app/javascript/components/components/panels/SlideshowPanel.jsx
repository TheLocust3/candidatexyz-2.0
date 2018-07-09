import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from 'candidatexyz-common-js/lib/elements';

import Parallax from '../common/Parallax';

import TextContent from '../../containers/content/TextContent';
import LinkContent from '../../containers/content/LinkContent';
import SlideshowContent from '../../containers/content/SlideshowContent';

export default class SlideshowPanel extends React.Component {

    render() {
        return (
            <div className='mdc-layout-grid slideshow-panel relative'>
                <div className='mdc-layout-grid__inner'>
                    <div className='mdc-layout-grid__cell--span-5 slideshow-panel-blurb'>
                        <Text type='headline6'><TextContent identifier='slideshowPanelBlurb' /></Text>
                        <br />

                        <LinkContent identifier='slideshowPanelLink' type='headline6' className='slideshow-link' textClassName='slideshow-link' />
                    </div>

                    <div className='mdc-layout-grid__cell--span-7'>
                        <SlideshowContent identifier='indexSlideshow' />
                    </div>
                </div>
            </div>
        );
    }
}
