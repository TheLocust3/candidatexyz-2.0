import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import objectFitImages from 'object-fit-images';
import { Text } from 'candidatexyz-common-js/lib/elements';

import { history } from '../../../constants';

import Post from '../../components/posts/Post';

const PREVIEW_BODY_LENGTH = 3000;

class NewsPreview extends React.Component {

    componentDidMount() {
        objectFitImages();
    }

    onThumbnailClick() {
        history.push(`/news/${this.props.post.url}`)
    }

    renderCreatedAt() {
        if (this.props.small) return;

        return (
            <div className='post-created-at'>
                <Text type='body2'>
                    {moment(this.props.post.createdAt).format('MMMM D, YYYY')}
                </Text>
            </div>
        );
    }

    render() {
        let { post, ...props } = this.props;

        post.body = post.body.substring(0, PREVIEW_BODY_LENGTH);
        
        return (
            <div {...props}>
                <Post post={post} headerType='headline4' hideShare={true} />

                <Link to={`/news/${post.url}`} className='link'>
                    <Text type='body2' className='underline-body2 underline-body2--hoverable'>Read more</Text>
                </Link>
            </div>
        );
    }
}

NewsPreview.propTypes = {
    post: PropTypes.object.isRequired
};

export default NewsPreview;
