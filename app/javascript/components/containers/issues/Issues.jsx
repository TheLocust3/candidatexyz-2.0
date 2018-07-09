import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserActions } from 'candidatexyz-common-js';
import { Text } from 'candidatexyz-common-js/lib/elements';

import { setDocumentTitle, setNavbarType, DEFAULT } from '../../actions/global-actions';
import { fetchPostType } from '../../actions/post-actions';

import TextContent from '../content/TextContent';
import PostThumbnail from '../../components/posts/PostThumbnail';

class Issues extends React.Component {

    componentWillMount() {
        this.props.dispatch(setDocumentTitle('Issues'));
        this.props.dispatch(setNavbarType(DEFAULT));

        this.props.dispatch(fetchPostType('issues'));
        this.props.dispatch(UserActions.fetchCurrentUser());
    }
    
    renderIssueList() {
        return (
            <div>
                {_.range(0, this.props.posts.length, 3).map((index) => {
                    return (
                        <div key={index} className='posts-thumbnail-row'>
                            {_.range(index, index + 3).map((i) => {
                                if (i >= this.props.posts.length) return <div key={i} style={{ display: 'table-cell' }} />;

                                return <PostThumbnail key={this.props.posts[i].id} post={this.props.posts[i]} />
                            })}
                        </div>
                    );
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
                {this.renderAddIssue()}
                <br /><br />

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
