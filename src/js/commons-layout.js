import React from 'react';
import pccIcon from '../images/ppc.png';
import './commons-function'
import {renderId} from "./commons-function";

renderId('gov-watcher', <div>
    <a target="_blank" href="http://www.miitbeian.gov.cn/">
        <div className='beian'>沪ICP备18021834号</div>
    </a>
    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34132102000166">
        <div className='beian'><img src={pccIcon}/>皖公网安备 34132102000166号</div>
    </a>
</div>);