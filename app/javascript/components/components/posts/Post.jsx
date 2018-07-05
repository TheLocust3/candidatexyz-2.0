import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Text } from 'candidatexyz-common-js/lib/elements';

import { history, DOMAIN } from '../../../constants';

import Share from '../global/Share';

export default class Post extends React.Component {

    render() {
        let { posts, headerType, ...props } = this.props;

        return (
            <div className='post' {...props}>
                <Text type={headerType}>{this.props.post.title}</Text>

                <div className='post-created-at'>{moment(this.props.post.createdAt).format('MMMM D, YYYY')}</div><br />
                <img className='post-image' src={this.props.post.image} /><br /><br />

                <span dangerouslySetInnerHTML={{__html: this.props.post.body }} {...props} />

                <Share text={this.props.post.title} url={`${DOMAIN}/issues/${this.props.post.url}`} />
            </div>
        );
    }
}

Post.propTypes = {
    post: PropTypes.object,
    headerType: PropTypes.string
};
