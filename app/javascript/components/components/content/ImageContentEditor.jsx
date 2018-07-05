import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, TextField, Form } from 'candidatexyz-common-js/lib/elements';

import ContentApi from '../../../api/content-api';
import { setEditOverlayOpen, pushContentHistory } from '../../actions/content-actions';

import ImageUploader from '../global/ImageUploader';

class ImageContentEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: props.content, oldContent: _.cloneDeep(this.props.content) };

        if (_.isEmpty(this.state.content.content.text)) {
            this.state.content.content.text = '';
        }
    }

    handleImageChange(event) {
        let content = this.state.content;
        content.content.image = event.target.value;

        this.setState({
            content: content
        });
    }

    handleTextChange(event) {
        let content = this.state.content;
        content.content.text = event.target.value;

        this.setState({
            content: content
        });
    }

    handleSubmit(event) {
        this.props.dispatch(pushContentHistory(this.state.oldContent));
        ContentApi.update(this.props.content.identifier, this.state.content.content);

        this.props.dispatch(setEditOverlayOpen(false));
    }

    onUpload(url) {   
        let content = this.state.content;
        content.content.image = url;

        this.setState({
            content: content
        });
    }

    render() {
        return (
            <Form handleSubmit={(event) => this.handleSubmit(event)}>
                <TextField label='Image URL' onChange={(event) => this.handleImageChange(event)} defaultValue={this.state.content.content.image} size={20} style={{ width: '100%' }} />
                <TextField label='Replacement Text' onChange={(event) => this.handleTextChange(event)} defaultValue={this.state.content.content.text} size={20} style={{ width: '100%' }} />

                <Button className='edit-content-button'>Save</Button>
                <ImageUploader className='edit-content-button' handleUpload={(url) => this.onUpload(url)} style={{ marginRight: '3%' }} />
            </Form>
        );
    }
}

ImageContentEditor.propTypes = {
    content: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect()(ImageContentEditor);
