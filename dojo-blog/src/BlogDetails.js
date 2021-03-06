import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, error, isPending} = useFetch('https://dojo-blog-madclub.herokuapp.com/blogs/' +id);
    const history = useHistory();
    const handlClick= () => {
      fetch('https://dojo-blog-madclub.herokuapp.com/blogs' + blog.id, {
        method: 'DELETE'
      }).then(() => {
        history.push('/');
      })
    }

    return (
    <div className="blog-details">
      { isPending && <div>Loading...</div>}
      { error && <div>{ error }</div> }
      {blog && (
          <article>
              <h2>{ blog.title }</h2>
              <p>Written by {blog.author} </p>
              <div>{blog.body}</div>
              <button onClick={handlClick}>Delete</button>
          </article>
      )}
    </div>    
      );
}
 
export default BlogDetails;