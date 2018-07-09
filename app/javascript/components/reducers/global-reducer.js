import * as GlobalActions from '../actions/global-actions';

const initialState = {
    documentTitle: '',
    websiteTitle: '',
    navbarType: ''
};

export function globalReducer(state = initialState, action) {
    switch (action.type) {
        case GlobalActions.SET_NAVBAR_TYPE:
            return Object.assign({}, state, {
                navbarType: action.data
            });
        case GlobalActions.SET_DOCUMENT_TITLE:
            document.title = `${state.websiteTitle} - ${action.data}`

            return Object.assign({}, state, {
                documentTitle: action.data
            });
        case GlobalActions.STORE_WEBSITE_TITLE:
            return Object.assign({}, state, {
                websiteTitle: action.data
            });
        default:
            return state;
    }
}
