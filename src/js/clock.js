import React from "react";

export class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            now: new Date()
        }
    }

    componentDidMount() {
        this.refresh = setInterval(() => {
            this.setState({now: new Date()})
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.refresh)
    }


    render() {
        return <div>{this.state.now.toString()}</div>;
    }
}

