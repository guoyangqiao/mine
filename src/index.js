import React from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './css/cover.css'


class Clock extends React.Component {
    render() {
        return <h1>{new Date().toString()}</h1>;
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
);
