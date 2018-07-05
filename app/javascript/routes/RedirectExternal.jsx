import React from 'react';
import PropTypes from 'prop-types';

export default class RedirectExternal extends React.Component {

    render() {
        window.location.href = this.props.to;

        return null;
    }
}

RedirectExternal.propTypes = {
    to: PropTypes.string.isRequired
};
