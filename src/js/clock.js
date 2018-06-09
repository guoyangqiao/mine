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
        return (
            <table>
                <div>{this.state.now.toLocaleDateString()}</div>
                <div>{this.state.now.toLocaleTimeString()}</div>
            </table>
        );
    }
}

