import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { UserActions } from 'candidatexyz-common-js';
import { Text } from 'candidatexyz-common-js/lib/elements';

import { setDocumentTitle } from '../../actions/global-actions';
import { fetchPostType } from '../../actions/post-actions';

import TextContent from '../content/TextContent';
import PostPreview from '../posts/PostPreview';

class News extends React.Component {

    componentWillMount() {
        this.props.dispatch(setDocumentTitle('News'));

        this.props.dispatch(UserActions.fetchCurrentUser());
        this.props.dispatch(fetchPostType('news'));
    }
    
    renderNewsList() {
        let posts = _.reverse(_.sortBy(this.props.posts, [(post) => { return post.createdAt }]));

        return (
            <div>
                {posts.map((post, index) => {
                    return (
                        <div key={index}>
                            <PostPreview key={index} post={post} />
                        </div>
                    );
                })}
            </div>
        );
    }

    renderAddNews() {
        if (!this.props.isUserReady || _.isEmpty(this.props.user)) return;

        return (
            <Link className='link' to={`/staff/posts/news/new`}>
                <Text type='headline6' className='underline-headline6 underline-headline6--hoverable'>
                    Add News
                </Text>
            </Link>
        );
    }

    render() {
        return (
            <div className='content content-10'>
                <Text type='headline2'><TextContent identifier='newsHeader' /></Text>

                <div className='content-2'>
                    {this.renderAddNews()}<br /><br />

                    {this.renderNewsList()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.postsOfType,
        isUserReady: state.users.isCurrentUserReady,
        user: state.users.currentUser,
    };
}

export default connect(mapStateToProps)(News);
