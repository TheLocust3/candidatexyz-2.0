import $ from 'jquery';

import { setNavbarType, TRANSPARENT } from './components/actions/global-actions';

// Stolen from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// properly sets transparency on refresh so you don't end up with a transparent navbar halfway down the page
export function transparentNavbarManager(props) {
    if (props.navbarType == TRANSPARENT && $(window).scrollTop() != 0) {
        props.dispatch(setNavbarType(''));
    }
}
