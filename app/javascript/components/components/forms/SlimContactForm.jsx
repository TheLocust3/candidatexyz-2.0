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
        ContactApi.create(contact.email, contact.zipCode).then(() => {
            window.location.reload();
        }).catch((response) => {
            this.setState({
                errors: response.responseJSON.errors
            });
        });
    }

    renderDesktop() {
        return (
            <Form handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <TextField label='Email' name='email' className='white' textFieldClassName='white header-text header-text-small' labelClassName='white header-text' onChange={(event) => this.handleChange(event)} style={{ width: '45%', marginRight: '2.5%' }} />
                <TextField label='Zipcode' name='zipCode' className='white' textFieldClassName='white header-text header-text-small' labelClassName='white header-text' onChange={(event) => this.handleChange(event)} style={{ width: '20%', marginRight: '2.5%' }} />

                <Button className='header-text' style={{ width: '35%' }}>Submit</Button>
            </Form>
        );
    }

    renderMobile() {
        return (
            <Form handleSubmit={(event) => this.handleSubmit(event)} errors={this.state.errors}>
                <TextField label='Email' name='email' className='slim-textfield white' textFieldClassName='white header-text header-text-small' labelClassName='white header-text' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} />
                <TextField label='Zipcode' name='zipCode' className='slim-textfield white' textFieldClassName='white header-text header-text-small' labelClassName='white header-text' onChange={(event) => this.handleChange(event)} style={{ width: '100%' }} />

                <Button className='header-text mobile-contact-panel-button'>Submit</Button>
            </Form>
        );
    }

    render() {
        if (this.props.mobile) {
            return this.renderMobile();
        } else {
            return this.renderDesktop();
        }
    }
}

ContactForm.propTypes = {
    mobile: PropTypes.bool
}
