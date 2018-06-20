import ReactDOM from "react-dom";
import React from 'react';

export function renderId(id, element) {
    ReactDOM.render(
        element,
        document.getElementById(id)
    );

}