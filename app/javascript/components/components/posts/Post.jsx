import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Text } from 'candidatexyz-common-js/lib/elements';

import { history, DOMAIN } from '../../../constants';

import Share from '../global/Share';

export default class Post extends React.Component {

    renderShare() {
        if (this.props.hideShare) return;

        return <Share text={this.props.post.title} url={`${DOMAIN}/issues/${this.props.post.url}`} />;
    }

    renderImage() {
        if (this.props.hideImage) return;

        return (
            <div className='post-image-wrapper'>
                <img className='post-image' src={this.props.post.image} />
            </div>
        );
    }

    renderCreatedAt() {
        if (this.props.hideCreatedAt) return;

        return (
            <Text type='body2'>
                {moment(this.props.post.createdAt).format('MMMM D, YYYY')}
            </Text>
        );
    }

    render() {
        let { posts, headerType, hideShare, hideCreatedAt, hideImage, ...props } = this.props;

        headerType = _.isEmpty(headerType) ? 'headline3' : headerType;

        return (
            <div className='post' {...props}>
                <Text type={headerType}>{this.props.post.title}</Text>

                {this.renderCreatedAt()}
                <br />

                {this.renderImage()}

                <Text type='body1' className='post-body'>
                    <span dangerouslySetInnerHTML={{__html: this.props.post.body }} {...props} />
                </Text>

                {this.renderShare()}
            </div>
        );
    }
}

Post.propTypes = {
    post: PropTypes.object,
    headerType: PropTypes.string,
    hideShare: PropTypes.bool,
    hideCreatedAt: PropTypes.bool,
    hideImage: PropTypes.bool
};
