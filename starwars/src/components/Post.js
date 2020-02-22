import React from 'react';
import './StarWars.css';

const Post = props => {

    return (
        <div className="Post">Hi, my name is {props.name} and my hair is {props.hairColor}.</div>
    )
}

export default Post;