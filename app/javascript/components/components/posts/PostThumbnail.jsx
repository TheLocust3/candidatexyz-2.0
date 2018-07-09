import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import objectFitImages from 'object-fit-images';
import { Text, Button } from 'candidatexyz-common-js/lib/elements';

const THUMBNAIL_BODY_LENGTH = 300;

export default class PostThumbnail extends React.Component {

    componentDidMount() {
        objectFitImages();
    }

    render() {
        let { post, ...props } = this.props;
        
        return (
            <div className='post-thumbnail' {...props}>
                <img className='post-thumbnail-image' src={post.image} />
                
                <div className='post-thumbnail-text'>
                    <Text type='headline6'>{post.title}</Text>

                    <Text type='body2'>
                        <span dangerouslySetInnerHTML={{__html: `${post.body.substring(0, THUMBNAIL_BODY_LENGTH) }...`}} /><br />
                    </Text>

                    <Link to={`/${this.props.post.postType}/${this.props.post.url}`} className='unstyled-link-white'>
                        <Button>Read More</Button>
                    </Link>
                </div>
            </div>
        );
    }
}

PostThumbnail.propTypes = {
    post: PropTypes.object.isRequired
};
