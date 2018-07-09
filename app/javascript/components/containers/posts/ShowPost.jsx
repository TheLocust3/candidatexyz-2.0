import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { Text } from 'candidatexyz-common-js/lib/elements';

import { history } from '../../../constants';
import { setDocumentTitle } from '../../actions/global-actions';
import { fetchPost } from '../../actions/post-actions';

import Post from '../../components/posts/Post';

class ShowPost extends React.Component {
    
    componentWillMount() {
        let post = this.findPost(this.props);

        if (_.isEmpty(post.url)) {
            this.props.dispatch(fetchPost(this.props.postType, this.props.url));
        }
    }

    findPost(props) {
        let post = _.find(props.posts, { postType: props.postType, url: props.url });

        if (_.isEmpty(post)) {
            return { }
        }

        return post;
    }

    onEditClick() {
        if (!this.props.edit) return;

        history.push(`/staff/posts/${this.props.postType}/${this.props.url}/edit`);
    }

    render() {
        let { postType, url, edit, posts, dispatch, ...props } = this.props;

        let post = this.findPost(this.props);
        
        if (!_.isEmpty(post.title)) {
            this.props.dispatch(setDocumentTitle(post.title));
        }

        return (
            <div onClick={this.onEditClick.bind(this)}>
                <Post post={post} {...props} />
            </div>
        );
    }
}

ShowPost.propTypes = {
    postType: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        posts: state.posts.posts,
        edit: state.content.edit
    };
}

export default connect(mapStateToProps)(ShowPost);
