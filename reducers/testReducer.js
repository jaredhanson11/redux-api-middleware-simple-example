var testReducer = function(state, action) {
    switch (action.type) {
        case 'REQUEST':
            var newState = Object.assign({}, state);
            console.log('LOADING.....');
            newState.isLoading = true;
            return newState;
        case 'SUCCESS':
            var newState = Object.assign({}, state);
            console.log('SUCCESS!!')
            newState.isLoading = false;
            newState.concerts = action.payload.concerts;
            newState.isLoaded = true;
            return newState;
        case 'FAILURE':
            var newState = Object.assign({}, state);
            console.log('FAILED');
            newState.isLoading = false;
            newState.error = action.payload;
            return newState;
        case 'UPDATE_ENDPOINT_VALUE':
            var newState = Object.assign({}, state);
            newState.endPointValue = action.value;
            return newState
        default:
            var newState = Object.assign({}, state);
            return newState;
    }
};

export { testReducer }
