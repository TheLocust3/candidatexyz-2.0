import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Text, Button, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import TextContent from '../../containers/content/TextContent';
import PostListThumbnail from '../posts/PostListThumbnail';

export default class NewsPanel extends React.Component {

    renderPostList() {
        return (
            <div>
                {_.slice(this.props.posts, 0, 2).map((post) => {
                    return (
                        <div key={post.id}>
                            <PostListThumbnail post={post} />
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <div className='news-panel'>
                {this.renderPostList()}

                <center>
                    <Link className='unstyled-link' to='/news'><Button className='header-text'>READ MORE POSTS</Button></Link>
                </center>

                <MDCAutoInit />
            </div>
        );
    }
}

NewsPanel.propTypes = {
    posts: PropTypes.array
};
