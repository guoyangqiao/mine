import React from "react";

export class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true
        };
    }

    handleClick() {
        this.setState(prevS => ({
                toggle: !prevS.toggle
            })
        )
    }

    render() {
        return (<button onClick={e => this.handleClick(e)}>
            {this.state.toggle ? "ON" : "OFF"}
        </button>)
    }
}