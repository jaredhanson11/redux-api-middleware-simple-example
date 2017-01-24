import React from 'react';

export default class ConcertsList extends React.Component {
    render(){
        var concerts = this.props.concerts.map((curr, index) => <li id={index}>{curr.name}</li>);
        return (
            <ul>
                {concerts}
            </ul>
        )

    }
}
