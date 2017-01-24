import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';


import { testReducer } from './reducers';

const middleware = applyMiddleware(apiMiddleware, logger());

var configureStore = function(initialState){
    return createStore(
        testReducer,
        initialState,
        middleware
    );
};

export { configureStore }
