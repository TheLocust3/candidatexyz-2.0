import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { MessageApi } from 'candidatexyz-common-js';
import { Button, TextField, TextArea, Form } from 'candidatexyz-common-js/lib/elements';

import { history } from '../../../constants';

export default class MessageForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { message: {}, errors: {} };
    }

    handleChange(event) {
        let message = this.state.message;
        message[event.target.name] = event.target.value;

        this.setState({
            message: message
        });
    }

    handleSubmit(event) {
        let message = this.state.message;
        MessageApi.create(message.firstName, message.lastName, message.email, message.subject, message.message).then(() => {
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
                <TextField label='First Name' name='firstName' onChange={(event) => this.handleChange(event)} style={{ width: '47.5%', marginRight: '5%' }} />
                <TextField label='Last Name' name='lastName' onChange={(event) => this.handleChange(event)} style={{ width: '47.5%' }} />
                <br />

                <TextField label='Email' name='email' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} />
                <br />

                <TextField label='Subject' name='subject' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} />
                <br />

                <TextArea label='Message' name='message' onChange={(event) => this.handleChange(event)} rows={10} style={{ width: '100%' }} />
                <br />

                <Button className='form-button-right'>Save</Button>
            </Form>
        );
    }
}
