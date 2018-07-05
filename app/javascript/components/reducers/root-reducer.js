import { combineReducers } from 'redux';

import { staffReducer, campaignReducer, contactReducer, volunteerReducer, messageReducer, imageReducer } from 'candidatexyz-common-js';
import { contentReducer } from './content-reducer';
import { postReducer } from './post-reducer';
import { globalReducer } from './global-reducer';

const reducer = combineReducers({
    staff: staffReducer,
    campaigns: campaignReducer,
    contacts: contactReducer,
    volunteers: volunteerReducer,
    messages: messageReducer,
    images: imageReducer,
    content: contentReducer,
    posts: postReducer,
    global: globalReducer
});

export default reducer;
