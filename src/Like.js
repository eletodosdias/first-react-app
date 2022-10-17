import React, {useState} from 'react';

function Like(){
    //****************************** differenza tra class e functional component:
    //CLASS COMPONENT
    /* 
    state= { count : 0 }
    increment = () => {
        this.setState( {number: this.state.number + 2} )
    }
    */

    //FUNCTION COMPONENT - STATE
    //const [state, setstate] = useState(initialState);
    /*const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1)
    }*/

    //****************************************************
    //fare import {useState} in 'react'
    //const [state, setstate] = useState(initialState);
    
    const [count, setCount] = useState(0);
    const increment = () =>{
        setCount(count + 1)
    } 
         
    return(
        <div>
            {/* <h3> Counter: {count} </h3> */}
            <button onClick={increment}> Like </button> 
            <p>Likes:  {count} </p> 
        </div>
    )
}

export default Like;