import React, {Component} from 'react';
import './Detail.css';

export default class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: [1,2,3],
            activeIndex: -1
        }
    }
    activate(index){
        this.setState({
            activeIndex: index
        });
    }
    render(){
        const {list, activeIndex} = this.state;
        const aLi = list.map(
            (item,index) => {
                const cls = index === activeIndex ? 'active' : ''
                return (
                    <li
                        key={index}
                        className={cls}
                        onClick={()=> this.activate(index)}
                        >{item}
                    </li>
                )
            }
        );
        return(
            <ul>{aLi}</ul>
        );

    }
}