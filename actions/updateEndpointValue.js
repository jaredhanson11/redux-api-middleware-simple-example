const UPDATE_ENDPOINT_VALUE = 'UPDATE_ENDPOINT_VALUE';
function updateEndpointValue(endpointValue){
    return {
        type: UPDATE_ENDPOINT_VALUE,
        value: endpointValue
    }
}

export { updateEndpointValue }
