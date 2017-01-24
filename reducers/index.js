import { combineReducers } from 'redux';

import { testReducer } from './testReducer.js';

const reducers = combineReducers({
    testReducer: testReducer
});

export { testReducer };
