import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import ExternalLinkContent from '../../containers/content/ExternalLinkContent';

export default class SocialMedia extends React.Component {

    render() {
        let { size, iconClassName, ...props } = this.props;

        iconClassName = _.isEmpty(iconClassName) ? '' : iconClassName;

        return (
            <div {...props}>
                <ExternalLinkContent identifier='facebook' className={`icon-cell unstyled-link-white ${iconClassName}`}><i className='fab fa-facebook-f' style={{ fontSize: `${size}em` }} /></ExternalLinkContent>&nbsp;
                <ExternalLinkContent identifier='twitter' className={`icon-cell unstyled-link-white ${iconClassName}`}><i className='fab fa-twitter' style={{ fontSize: `${size}em` }} /></ExternalLinkContent>&nbsp;
                <ExternalLinkContent identifier='instagram' className={`icon-cell unstyled-link-white ${iconClassName}`}><i className='fab fa-instagram' style={{ fontSize: `${size}em` }} /></ExternalLinkContent>&nbsp;
                <ExternalLinkContent identifier='youtube' className={`icon-cell unstyled-link-white ${iconClassName}`}><i className='fab fa-youtube' style={{ fontSize: `${this.props.size}em` }} /></ExternalLinkContent>&nbsp;
            </div>
        );
    }
}

SocialMedia.propTypes = {
    size: PropTypes.number.isRequired,
    iconClassName: PropTypes.string
};
