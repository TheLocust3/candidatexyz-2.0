import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserActions } from 'candidatexyz-common-js';
import { Text } from 'candidatexyz-common-js/lib/elements';

import { setDocumentTitle } from '../../actions/global-actions';
import { fetchPostType } from '../../actions/post-actions';

import TextContent from '../content/TextContent';
import ShowPost from '../posts/ShowPost';

class Issues extends React.Component {

    componentWillMount() {
        this.props.dispatch(UserActions.fetchCurrentUser());
    }

    componentDidMount() {
        this.props.dispatch(setDocumentTitle('Issues'));
        this.props.dispatch(fetchPostType('issues'));
    }
    
    renderIssueList() {
        return (
            <div className='issues-list'>
                {this.props.posts.map((post) => {
                    return (
                        <div className='issues-list-link' key={post.url}>
                            <Link className='link' to={`/issues/${post.url}`}>{post.title}</Link>
                        </div>
                    )
                })}
            </div>
        )
    }

    renderAddIssue() {
        if (!this.props.isUserReady || _.isEmpty(this.props.user)) return;

        return (
            <Link className='link' to={`/staff/posts/issues/new`}>
                <Text type='headline6' className='underline-headline6 underline-headline6--hoverable'>
                    Add Issue
                </Text>
            </Link>
        );
    }

    render() {
        return (
            <div className='content content-10'>
                <Text type='headline2'><TextContent identifier='issuesHeader' /></Text>
                {this.renderAddIssue()}<br />

                {this.renderIssueList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.postsOfType,
        isUserReady: state.users.isCurrentUserReady,
        user: state.users.currentUser
    };
}

export default connect(mapStateToProps)(Issues);
