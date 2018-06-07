import React from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date(), counter: 1};
    }

    componentDidMount() {
        this.foo = setInterval(() => this.setState({date: new Date(), counter: this.state.counter + 1}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.foo);
    }

    render() {
        return <h2>It is {this.state.date.toLocaleTimeString()}.{this.state.counter}</h2>
    }
}

export const element = <Clock/>;