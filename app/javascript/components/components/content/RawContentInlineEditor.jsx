import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, TextField, Form } from 'candidatexyz-common-js/lib/elements';

import ContentApi from '../../../api/content-api';
import { setEditOverlayOpen, pushContentHistory } from '../../actions/content-actions';

class RawContentInlineEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: props.content, oldContent: _.cloneDeep(this.props.content) };
    }

    handleContentChange(event) {
        let content = this.state.content;

        if (_.isObject(this.props.content.content)) {
            content.content = { text: event.target.value };
        } else {
            content.content = event.target.value;
        }

        this.setState({
            content: content
        });
    }

    handleSubmit(event) {
        this.props.dispatch(pushContentHistory(this.state.oldContent));
        ContentApi.update(this.props.content.identifier, this.state.content.content);

        this.props.dispatch(setEditOverlayOpen(false));
    }

    render() {
        let content = _.isObject(this.props.content.content) ? this.props.content.content.text : this.props.content.content; // hope it's text if there's an object

        return (
            <Form handleSubmit={(event) => this.handleSubmit(event)}>
                <TextField label={this.props.content.identifier} onChange={(event) => this.handleContentChange(event)} defaultValue={content} size={50} />

                <Button className='edit-raw-content-button'>Save</Button>
            </Form>
        );
    }
}

RawContentInlineEditor.propTypes = {
    content: PropTypes.object.isRequired
};

export default connect()(RawContentInlineEditor);
