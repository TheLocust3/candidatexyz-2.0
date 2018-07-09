import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import { setDocumentTitle, setNavbarType, DEFAULT } from '../../actions/global-actions';
import { fetchPost } from '../../actions/post-actions';

import PostForm from '../../components/posts/PostForm';

class EditPost extends React.Component {

    componentWillMount() {
        this.props.dispatch(setDocumentTitle('Edit Post'));
        this.props.dispatch(setNavbarType(DEFAULT));

        if (_.isEmpty(this.findPost().url)) {
            this.props.dispatch(fetchPost(this.props.match.params.postType, this.props.match.params.url));
        }
    }

    findPost() {
        let post = _.find(this.props.posts, { postType: this.props.match.params.postType, url: this.props.match.params.url })

        if (_.isEmpty(post)) {
            return { }
        }

        return post;
    }

    render() {
        let post = this.findPost();
        
        if (_.isEmpty(post.url)) return null;

        return (
            <div>
                <PostForm post={post} />
                
                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.posts
    };
}

export default connect(mapStateToProps)(EditPost);
