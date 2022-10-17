import React, {useState} from 'react';
//import Stampa from './Stampa';
import Post from './FacebookPost'

function App(){

   const [ posts, setPosts] = useState([
    {author : 'Billy', title: 'Effect of Nature'},
    {author : 'Uma', title:"Don't forget to ask help"},
    {author : 'Joe', title: "Hip Hop in Italy in my 90's"},
    {author : 'Frank', title: 'No need to put a title'},
    {author : 'John', title: 'Imagine a brotherhood of men'},
   ])

  return(
      <div style={{ textAlign: 'center' }} >

      <h1> HOME </h1>

        {posts.map ( (post, index) => (
          <Post key={index} author={post.author} title={post.title} />
        ))}
 
      </div>
  )
  
  
}

export default App;