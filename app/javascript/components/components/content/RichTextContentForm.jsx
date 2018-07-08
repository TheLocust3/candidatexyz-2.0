import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button, TextField, TextEditor, Form } from 'candidatexyz-common-js/lib/elements';

import { history } from '../../../constants';
import ContentApi from '../../../api/content-api';

export default class RichTextContentForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { content: this.props.content, errors: {} };
    }

    handleEditorChange(body) {
        let content = this.state.content;
        content.content.text = body;

        this.setState({
            content: content
        });
    }

    handleSubmit(event) {
        ContentApi.update(this.state.content.identifier, this.state.content.content).then(() => {
            history.push('/');
        }).catch((response) => {
            this.setState({
                errors: response.responseJSON.errors
            });
        });
    }

    render() {
        return (
            <Form handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <TextEditor label='Text' content={this.state.content.content.text} onChange={(text) => { this.handleEditorChange(text) }} />

                <Button className='form-button-right'>Save</Button>
            </Form>
        );
    }
}

RichTextContentForm.propTypes = {
    content: PropTypes.object,
};
