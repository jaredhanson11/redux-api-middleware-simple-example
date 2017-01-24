import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from './store.js';
import { getConcerts } from './actions/getConcertActions.js';

var initialState = {
    toggle: false
};

var store = configureStore(initialState);

store.dispatch(getConcerts());
