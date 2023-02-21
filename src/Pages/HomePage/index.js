import './index.css';
import React, {useState, useEffect} from 'react'
import {getPost} from '../../Services/api'

const HomePage = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        (async () => {
            const response = await getPost()
            setPosts(response.data)
			
        })()       
	}, [])
    console.log(posts)
  return (
    <div className="App">
        <h1>Home Page</h1>

        {posts.map(post => (
            <div className="materials" key={post._id}>
                <div className='files'>
                    <embed src={post.url} alt={post.name} />
                </div>
                {post.name}
                <hr/>
            </div>
        ))}
    </div>
  );
}

export default HomePage;