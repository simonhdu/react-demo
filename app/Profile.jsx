import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Hobby from './Hobby';

const propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            liked: 0,
            hobbies: ['swimming','reading books']
        }
        this.likedCallback = this.likedCallback.bind(this);
        this.addHobbyCallback = this.addHobbyCallback.bind(this);
    }

    componentDidMount(){
        console.log('componentDidMount 组件装载完毕')
    }

    componentWillMount(){
        console.log('componentWillMount 组件还未装载')
    }

    likedCallback(){
        let liked = this.state.liked;
        liked++;
        this.setState(
            {
                liked: liked
            }
        )
    }
    addHobbyCallback(){
        let hobbyInput = this.refs.hobby;
        let val = hobbyInput.value;
        if(val){
            let hobbies = this.state.hobbies;
            hobbies = [...hobbies, val];
            this.setState(
                {
                    hobbies: hobbies
                },
                () => {
                    hobbyInput.value = '';
                }
            )
        }
    }

    render(){
        console.log('render')
        return (
                <div className="profile-component">
                    <h1>My name is {this.props.name}</h1>
                    <h2>I'm {this.props.age} years old</h2>
                    <button onClick={this.likedCallback}>addLike</button>
                    <h2>liked counts: {this.state.liked}</h2>
                    <ul>
                        {this.state.hobbies.map( 
                                (hobby, index) => <Hobby key={index} hobby={hobby} /> 
                            )
                        }
                    </ul>
                    <input type="text" ref="hobby" />
                    <button onClick={this.addHobbyCallback}>add hobby</button>
                </div>
            )
    }
}

Profile.propTypes = propTypes;

export default Profile;