import React from 'react';
import ReactDOM from 'react-dom';

const picPath = 'https://www.baidu.com/img/xinshouye_1aa582c0b96d57852497a8bbc4345f15.png';

const user = {
    name: 'utah',
    password: 'cwuCCiwxwcantypS'
};

const ele = (
    <h1 className='greeting'>
        hug hug hug
    </h1>
);

function formatName(user) {
    return user.name + ':' + user.password
}

ReactDOM.render(<div>
    {user.name}
    {user.password}
    hi, {formatName(user)}
    <img src={picPath}/>
    {ele}
</div>, document.getElementById("js"));