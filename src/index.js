import React from 'react';
import ReactDOM from 'react-dom';
import style from "./search.css"

const Index = () => <div>Hello React!</div>;

const Search = () => <div className={style.nameOfYourCSSClass}>Hello Search Component :)</div>;


ReactDOM.render(<Search/>, document.getElementById("index"));