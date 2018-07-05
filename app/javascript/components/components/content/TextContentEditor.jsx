import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, TextField, TextArea, Form } from 'candidatexyz-common-js/lib/elements';

import ContentApi from '../../../api/content-api';
import { setEditOverlayOpen, pushContentHistory, fetchAllContent } from '../../actions/content-actions';

const TEXT_FIELD_CUTOFF = 100;

class TextContentEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = { content: props.content, oldContent: _.cloneDeep(this.props.content), textField: props.content.content.text.length < TEXT_FIELD_CUTOFF };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.content.identifier != nextProps.content.identifier) { // only change textfield to textarea if user selected new content
            this.setState({
                textField: nextProps.content.content.text.length < TEXT_FIELD_CUTOFF
            });
        }
    }

    handleContentChange(event) {
        let content = this.state.content;
        content.content.text = event.target.value;

        this.setState({
            content: content
        });
    }

    handleSubmit(event) {
        this.props.dispatch(pushContentHistory(this.state.oldContent));
        ContentApi.update(this.props.content.identifier, this.state.content.content).then(() => {
            this.props.dispatch(fetchAllContent());
        });

        this.props.dispatch(setEditOverlayOpen(false));
    }

    renderTextField() {
        if (this.state.textField) {
            return (
                <TextField label='Text Content' onChange={(event) => this.handleContentChange(event)} defaultValue={this.props.content.content.text} size={40} />
            )
        } else {
            return (
                <div>
                    <TextArea label='Text Content' onChange={(event) => this.handleContentChange(event)} defaultValue={this.props.content.content.text} rows={20} cols={100} style={{ marginBottom: '-10vh' }} /><br />
                </div>
            )
        }
    }
    
    render() {
        return (
            <Form handleSubmit={(event) => this.handleSubmit(event)}>
                {this.renderTextField()}

                <Button className='edit-content-button'>Save</Button>
            </Form>
        );
    }
}

TextContentEditor.propTypes = {
    content: PropTypes.object.isRequired
};

export default connect()(TextContentEditor);
