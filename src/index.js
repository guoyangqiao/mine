import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './css/cover.css'
import './js/commons-function'
import './js/commons-layout'
import {renderId} from './js/commons-function'

class PersonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }


    componentDidMount() {
        console.log('componentDidMount');
        axios.get(`http://guoyangqiao.com/ms/moon/time/normal`)
            .then(res => {
                let message = res.data.time;
                this.setState({date: message});
            })
    }

    render() {
        console.log(this.state);
        return (
            <div>{this.state.date}</div>
        )
    }
}

renderId('root', <PersonList/>);