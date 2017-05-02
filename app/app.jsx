import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import Detail from './Detail';

/*function App(){
    return(
        <div className="container">
            <h1>Hello React!!</h1>
        </div>
    )
}*/

const props = {
    name:'viking',
    age: 20
}

ReactDOM.render(

    <Detail />,
    document.body.appendChild(document.createElement('div'))
)