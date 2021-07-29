import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  
  
  const handleDelete= (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    fetch(' http://localhost:8000/blogs ')
    .then(res => {
    return res.json()
    })
    .then((data) => {
      setBlogs(data);
    })
}, []);

  return (
    <div className="Home">
     {blogs && <BlogList blogs={blogs} title="All Blogs!!" handleDelete={handleDelete} />}
    </div>
  );
};

export default Home;
