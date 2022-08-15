import { Link } from "react-router-dom";
import "./post.css";

const Post = ({post}) => {

  return (
    <div className="post" >

      {post.photo && (
        <Link  to={`posts/${post._id}`}>
        <img src={post.photo} alt="postImage" />
      </Link>
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map(c => (
             <span key={c} className="postCat">{c}</span>
          ))}
        </div>
        <Link  to={`/posts/${post._id}`} className="link postTitle">
          <span >{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDescription">
        {post.desc}
      </p>
    </div>
  );
};

export default Post;
