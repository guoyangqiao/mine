import React from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.foo = setInterval(() => this.setState({date: new Date()}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.foo);
    }

    render() {
        return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>;
    }
}

export const element = <Clock/>;