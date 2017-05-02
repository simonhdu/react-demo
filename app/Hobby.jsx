import React, {Component, PropTypes} from 'react';

const propTypes = {
    hobby: PropTypes.string.isRequired
}

// class Hobby extends Component{
//     render(){
//         return <li>{this.props.hobby}</li>
//     }
// }

// Hobby.propTypes = propTypes;


//无状态函数式组件，没有内部state，不需要组件生命周期函数
function Hobby(props){
    return <li>{props.hobby}</li>
}

export default Hobby;