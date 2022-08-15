import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/sidebar/SideBar';

import './home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("https://react-http-298a0-default-rtdb.firebaseio.com/blog.json");
      setPosts(response.data)
    }
    fetchPosts()
  }, [])

  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  )
}

export default Home;