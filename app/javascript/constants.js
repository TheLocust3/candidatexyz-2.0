import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk/es';
import { configure } from 'candidatexyz-common-js';

import reducer from './components/reducers/root-reducer';
import { LOCAL } from './features';

import { createBrowserHistory } from 'history/es';

export const CAMPAIGN_NAME = 'Mullet for State Representative'; // TODO: make this dynamic

export let history = createBrowserHistory();
export const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export const MAX_MOBILE_WIDTH = 768;
export const STATES = [ 'AL', 'AK', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'AS', 'DC', 'FM', 'GU', 'MH', 'MP', 'PW', 'PR', 'VI' ];

export const DOMAIN = LOCAL ? 'http://127.0.0.1:3010' : 'https://demo.candidatexyz.com';
export const APP_DOMAIN = LOCAL ? 'http://127.0.0.1:3000' : 'https://app.candidatexyz.com';

configure({ developmentRoutes: LOCAL });
