import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button, TextField, TextEditor, Form } from 'candidatexyz-common-js/lib/elements';

import { history } from '../../../constants';
import PostApi from '../../../api/post-api';

import ImageUploader from '../global/ImageUploader';

export default class PostForm extends React.Component {
    
    constructor(props) {
        super(props);

        if (_.isEmpty(this.props.post)) {
            this.state = { post: { postType: this.props.postType, url: this.props.url }, errors: {} };
        } else {
            this.state = { post: this.props.post, errors: {} };
        }
    }

    handleChange(event) {
        let post = this.state.post;
        post[event.target.name] = event.target.value;

        this.setState({
            post: post
        });
    }

    handleEditorChange(body) {
        let post = this.state.post;
        post.body = body;

        this.setState({
            post: post
        });
    }

    handleSubmit(event) {
        if (_.isEmpty(this.props.post)) {
            PostApi.create(this.state.post.postType, this.state.post.url, this.state.post.title, this.state.post.body, this.state.post.image).then(() => {
                history.push('/');
            }).catch((response) => {
                this.setState({
                    errors: response.responseJSON.errors
                });
            });
        } else {
            PostApi.update(this.state.post.id, this.state.post.postType, this.state.post.url, this.state.post.title, this.state.post.body, this.state.post.image).then(() => {
                history.push('/');
            }).catch((response) => {
                this.setState({
                    errors: response.responseJSON.errors
                });
            });
        }
    }

    onDeleteClick() {
        PostApi.destroy(this.state.post.postType, this.state.post.url).then(() => {
            history.push('/');
        });
    }

    onUpload(url) {   
        let post = this.state.post;
        post.image = url;

        this.setState({
            post: post
        });
    }

    renderDeleteButton() {
        if (_.isEmpty(this.props.post)) return;

        return (
            <Button className='form-button-right-extra' onClick={this.onDeleteClick.bind(this)}>Delete</Button>
        );
    }

    render() {
        return (
            <Form handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors} className='content content-15'>
                <TextField label='Title' name='title' onChange={(event) => this.handleChange(event)} defaultValue={this.state.post.title} style={{ width: '100%' }} /><br />

                <TextField label='Article URL' name='url' onChange={(event) => this.handleChange(event)} defaultValue={this.state.post.url} style={{ width: '100%' }} required />
                <br /><br />

                <Text type='body1'>
                    <ImageUploader text='Upload Image' handleUpload={(url) => this.onUpload(url)} styleOuter={{ display: 'inline-block' }} />
                    <span style={{ marginLeft: '3%' }}>{this.state.post.image}</span>
                </Text>

                <TextEditor label='Body' content={this.state.post.body} onChange={(text) => { this.handleEditorChange(text) }} />

                <Button className='form-button-right'>Save</Button>
                {this.renderDeleteButton()}
            </Form>
        );
    }
}

PostForm.propTypes = {
    post: PropTypes.object,
    postType: PropTypes.string
};
