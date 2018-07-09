import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

export default class ScrollToTop extends React.Component {

    render() {
        $(window).scrollTop(0);

        return null;
    }
}
