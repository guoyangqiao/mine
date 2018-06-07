import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    name: 'utah',
    password: 'cwuCCiwxwcantypS'
};

function formatName(user) {
    return user.name + ':' + user.password
}

ReactDOM.render(<div>hi, {formatName(user)}</div>, document.getElementById("js"));