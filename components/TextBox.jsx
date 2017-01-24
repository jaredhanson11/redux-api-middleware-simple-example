import React from 'react';

export default class TextBox extends React.Component{
    render() {
        return (
            <input type='text' onChange={this.props.updateTextField} />
        );
    }
}
