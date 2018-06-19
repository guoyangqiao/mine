import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/cover.css'
import ReactDOM from "react-dom";
import pccIcon from './images/ppc.png';
import axios from 'axios';

ReactDOM.render((<div>
    <a target="_blank" href="http://www.miitbeian.gov.cn/">
        <div class='beian'>沪ICP备18021834号</div>
    </a>
    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34132102000166">
        <div class='beian'><img id src={pccIcon}/>皖公网安备 34132102000166号</div>
    </a>
</div>), document.getElementById('gov-watcher'));

function render(id, element) {
    ReactDOM.render(
        element,
        document.getElementById(id)
    );

}

class PersonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: []
        }
    }


    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({persons});
            })
    }

    render() {
        return (
            <ul>
                {this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
}