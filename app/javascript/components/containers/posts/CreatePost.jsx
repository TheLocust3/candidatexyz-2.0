import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import { setDocumentTitle, setNavbarType, DEFAULT } from '../../actions/global-actions';

import PostForm from '../../components/posts/PostForm';

class CreatePost extends React.Component {

    componentWillMount() {
        this.props.dispatch(setDocumentTitle('Create Post'));
        this.props.dispatch(setNavbarType(DEFAULT));
    }

    render() {
        return (
            <div>
                <PostForm postType={this.props.match.params.postType} />
                
                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(CreatePost);
