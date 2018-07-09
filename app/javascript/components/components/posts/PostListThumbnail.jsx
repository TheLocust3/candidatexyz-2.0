import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import objectFitImages from 'object-fit-images';
import { Text, Button } from 'candidatexyz-common-js/lib/elements';

import { MAX_MOBILE_WIDTH } from '../../../constants';

const THUMBNAIL_BODY_LENGTH = 300;

export default class PostListThumbnail extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lastRenderedWidth: $(document).width() };
    }

    updateDimensions() {
        let width = $(document).width();
        if ((this.state.lastRenderedWidth > MAX_MOBILE_WIDTH && width < MAX_MOBILE_WIDTH) || (this.state.lastRenderedWidth < MAX_MOBILE_WIDTH && width > MAX_MOBILE_WIDTH)) {
            this.setState({
                lastRenderedWidth: width
            });

            this.forceUpdate();
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.updateDimensions());

        objectFitImages();
    }

    renderCreatedAt() {
        if (this.props.small) return;

        return (
            <div className='post-list-thumbnail-created-at'>
                <Text type='caption'>
                    {moment(this.props.post.createdAt).format('MMMM D, YYYY')}
                </Text>
            </div>
        );
    }

    render() {
        let { post, ...props } = this.props;

        let length = this.state.lastRenderedWidth < MAX_MOBILE_WIDTH ? THUMBNAIL_BODY_LENGTH / 2 : THUMBNAIL_BODY_LENGTH;
        
        return (
            <div className='post-list-thumbnail relative' {...props}>
                <img className='post-list-thumbnail-image' src={post.image} />
                
                <div className='post-list-thumbnail-text middle'>
                    {this.renderCreatedAt()}
                    <br />

                    <Text type='headline6' className='bold'>{post.title}</Text>

                    <Text type='body2'>
                        <span dangerouslySetInnerHTML={{__html: `${post.body.substring(0, length) }...`}} /><br />
                    </Text>

                    <Link to={`/${this.props.post.postType}/${this.props.post.url}`}>
                        <Button className='header-text form-button-right'>READ MORE</Button>
                    </Link>
                </div>
            </div>
        );
    }
}

PostListThumbnail.propTypes = {
    post: PropTypes.object.isRequired
};
