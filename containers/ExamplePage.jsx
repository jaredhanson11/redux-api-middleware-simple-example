import React from 'react';
import { connect } from 'react-redux';

import { updateEndpointValue } from '../actions/updateEndpointValue.js';
import { getConcerts } from '../actions/getConcertActions.js';
import TextBox from '../components/TextBox.jsx';
import Button from '../components/Button.jsx';
import ConcertsList from '../components/ConcertsList.jsx';


class ExamplePage extends React.Component {

    updateTextField(e) {
        this.props.dispatch(updateEndpointValue(e.target.value));
    }

    apiButtonClicked() {
        this.props.dispatch(getConcerts());
    }


    render(){
        if (this.props.isLoading) {return (<h1>The component is loadin</h1>)}
        if (this.props.error) {return (<p>{this.props.errorMessage}</p>)}
        if (this.props.isLoaded) {return (<ConcertsList concerts={this.props.concerts} />)}
        return (
            <div>
                <TextBox updateTextField={this.updateTextField.bind(this)} />
                <Button apiButtonClicked={this.apiButtonClicked.bind(this)} />
            </div>
        );
    }

}

export default connect((store) => {
    return {
        isLoading: store.isLoading,
        endPointValue: store.endPointValue,
        concerts: store.concerts,
        isLoaded: store.isLoaded,
        error: store.error,
        errorMessage: store.errorMessage
    }
})(ExamplePage)
