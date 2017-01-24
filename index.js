import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store.js';
import { getConcerts } from './actions/getConcertActions.js';

import ExamplePage from './containers/ExamplePage.jsx';

var initialState = {
    isLoading: false,
    endPointValue: '',
    concerts:[],
    isLoaded: false,
    error: false,
    errorMessage: ''
};

var store = configureStore(initialState);


ReactDOM.render(
        <Provider store={store}>
            <ExamplePage />
        </Provider>
        , document.getElementById('main'))
