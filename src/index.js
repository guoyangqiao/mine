import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/cover.css'
import ReactDOM from "react-dom";
import {Greeting} from './js/welcome'

ReactDOM.render(
    <Greeting isLogin={false}/>,
    document.getElementById('root')
);