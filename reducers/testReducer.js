var testReducer = function(state, action) {
    switch (action.type) {
        case 'TEST_ACTION':
            var newState = Object.assign({}, state);
            newState.toggle = !newState.toggle;
            return newState;
        case 'REQUEST':
            var newState = Object.assign({}, state);
            console.log('LOADING.....');
            newState.isLoading = true;
            return newState;
        case 'SUCCESS':
            var newState = Object.assign({}, state);
            console.log('SUCCESS!!')
            newState.isLoading = false;
            newState.payload = action.payload;
            return newState;
        case 'FAILURE':
            var newState = Object.assign({}, state);
            console.log('FAILED');
            newState.isLoading = false;
            newState.error = action.payload;
            return newState;
        default:
            var newState = Object.assign({}, state);
            return newState;
    }
};

export { testReducer }
