import { CALL_API } from 'redux-api-middleware';

var getConcerts = function() {
    return {
        [CALL_API]: {
            method: 'get',
            endpoint: 'http://127.0.0.1:5000/concerts/',
            types: ['REQUEST', 'SUCCESS', 'FAILURE']
        }
    }
}

export { getConcerts };
