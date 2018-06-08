import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/cover.css'
import ReactDOM from "react-dom";
import {Clock} from "./js/clock";

function render(id, element) {
    ReactDOM.render(
        element,
        document.getElementById(id)
    );

}

render('timeclock', <Clock/>);