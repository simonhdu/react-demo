import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function App(){
    return(
        <div className="container">
            <h1>Hello React!</h1>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
)