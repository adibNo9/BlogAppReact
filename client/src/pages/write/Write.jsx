import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';
import { Context } from '../../context/Context';
import './write.css';

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const {user} = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      desc,
      username: "adib",
      photo: image,
      _id: Math.floor(Math.random() * 100),
      createdAt: new Date(),
      categories: ["sports" , "style"]
    }
    
    try {
      const response = await axios.post("https://react-http-298a0-default-rtdb.firebaseio.com/post.json", newPost);
      // window.location.replace("/post/"+ response.data.name);
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className='write'>
      {image && (
        <img className='writeImg' src={image} alt='globeIcon' />
      )}
      <form onSubmit={submitHandler} className="writeForm">
        <div className="writeFormGroup">

          <input type="text"  placeholder='ImageUrl' className='writeInput' autoFocus={true} onChange={e=>setImage(e.target.value)} />
          <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
        </div>
        <div className="writeFormGroup">
          <textarea placeholder='Tell your story...' type="text" className='writeInput writeText' onChange={e=>setDesc(e.target.value)}></textarea>
        </div>
        <button className='writeSubmit' type='submit' >Publish</button>
      </form>
    </div>
  )
}

export default Write;