import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/cover.css'
import ReactDOM from "react-dom";


class Toggle extends React.Component {
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

ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
);