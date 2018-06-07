import React from 'react';

class Clock extends React.Component {

    constructor(propsss) {
        super(propsss);
        this.state = {date: new Date(), counter: 1};
    }

    componentDidMount() {
        this.foo = setInterval(() => this.setState(
            (prevState, props) => (
                {
                    date: new Date(),
                    counter: prevState.counter + 1
                }
            )
        ), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.foo);
    }

    render() {
        return <h2>{this.props.location} is {this.state.date.toLocaleTimeString()}.{this.state.counter}</h2>
    }
}

export const element = <Clock location='beijing'/>;