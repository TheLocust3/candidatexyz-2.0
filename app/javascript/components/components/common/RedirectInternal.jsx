import React from 'react';
import PropTypes from 'prop-types';

import { history } from '../../../constants';

export default class RedirectInternal extends React.Component {

    componentDidMount() {
        history.push(this.props.to);
    }

    render() {
        return null;
    }
}

RedirectInternal.propTypes = {
    to: PropTypes.string.isRequired
};
