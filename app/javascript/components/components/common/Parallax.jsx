import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Parallax, Background } from 'react-parallax';
import objectFitImages from 'object-fit-images';

import ImageContent from '../../containers/content/ImageContent';

export default class CommonParallax extends React.Component {

    componentDidMount() {
        objectFitImages();
    }

    renderImage() {
        if (!_.isEmpty(this.props.imageIdentifier)) return;

        return <img src={this.props.image} style={{ width: '100%', height: '100vh', objectFit: 'cover', fontFamily: 'object-fit: cover' }} />
    }

    renderImageContent() {
        if (_.isEmpty(this.props.imageIdentifier)) return;

        return <ImageContent identifier={this.props.imageIdentifier} style={{ width: '100%', height: '100vh', objectFit: 'cover', fontFamily: 'object-fit: cover' }} />
    }

    render() {
        let { image, imageIdentifier, height, width, children, ...props } = this.props;

        height = _.isEmpty(height) ? '50vh' : height;

        return (
            <Parallax strength={300} style={{ height: height, width: width }} bgStyle={{ width: '100%' }} {...props}>
                <Background>
                    {this.renderImage()}
                    {this.renderImageContent()}
                </Background>

                {children}
            </Parallax>
        );
    }
}

CommonParallax.propTypes = {
    image: PropTypes.string,
    imageIdentifier: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    children: PropTypes.any
};
