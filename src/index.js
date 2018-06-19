import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/cover.css'
import ReactDOM from "react-dom";
import pccIcon from './images/ppc.png';

document.getElementById("ppcIcon").src = pccIcon;

function render(id, element) {
    ReactDOM.render(
        element,
        document.getElementById(id)
    );

}


