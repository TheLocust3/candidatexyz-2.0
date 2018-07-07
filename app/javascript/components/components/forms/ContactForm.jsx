import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { ContactApi } from 'candidatexyz-common-js';
import { Button, TextField, TextArea, Form } from 'candidatexyz-common-js/lib/elements';

import { history } from '../../../constants';

export default class ContactForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { contact: {}, errors: {} };
    }

    handleChange(event) {
        let contact = this.state.contact;
        contact[event.target.name] = event.target.value;

        this.setState({
            contact: contact
        });
    }

    handleSubmit(event) {
        let contact = this.state.contact;
        ContactApi.create(contact.email, contact.zipCode, contact.firstName, contact.lastName).then(() => {
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

                <TextField label='Email' name='email' onChange={(event) => this.handleChange(event)} style={{ width: '65%', marginRight: '5%' }} />
                <TextField label='Zipcode' name='zipCode' onChange={(event) => this.handleChange(event)} style={{ width: '30%' }} />
                <br />

                <TextField label='Email' name='email' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} />
                <br /><br />

                <Button className='form-button-right'>Submit</Button>
            </Form>
        );
    }
}
