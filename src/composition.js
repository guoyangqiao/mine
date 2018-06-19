import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/cover.css'
import ReactDOM from "react-dom";

function FancyBorder(props) {
    return (<div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
    </div>)
}

function WelcomeDialog() {
    return (<FancyBorder color='blue'>
        <h1 className='Dialog-title'>
            Welcome
        </h1>
        <p className='Dialog-message'>
            May everything goes well
        </p>
    </FancyBorder>)
}

ReactDOM.render(<WelcomeDialog/>, document.getElementById('root'));