import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import objectFitImages from 'object-fit-images';

import { setNavbarType, DEFAULT } from '../../actions/global-actions';
import { fetchPost } from '../../actions/post-actions';

import ShowPost from '../posts/ShowPost';

class ShowIssue extends React.Component {

    componentWillMount() {
        this.props.dispatch(setNavbarType(DEFAULT));
        
        this.props.dispatch(fetchPost(this.props.postType, this.props.url));
    }

    componentDidMount() {
        objectFitImages();
    }

    findPost(postType, url) {
        let post = _.find(this.props.posts, { postType: postType, url: url });

        if (_.isEmpty(post)) {
            return { }
        }

        return post;
    }

    render() {
        let post = this.findPost('issues', this.props.match.params.url);
        
        return (
            <div className='content content-10'>
                <img className='issue-image-header' src={post.image} />
            
                <div className='issue-body'>
                    <ShowPost postType='issues' url={this.props.match.params.url} hideCreatedAt={true} hideImage={true} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.posts
    };
}

export default connect(mapStateToProps)(ShowIssue);
