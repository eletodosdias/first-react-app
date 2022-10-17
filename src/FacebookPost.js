import React from 'react';
import'./App.css';
import './Like';
import Like from './Like';

function Post(props){
    return(
        <div className="Post">
            <h2>Post of: { props.author }</h2>
            <h3>{ props.title }</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Like />
        </div>
    )
}
export default Post;