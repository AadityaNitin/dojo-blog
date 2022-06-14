import BlogList from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const {data:blogs, isPending, error} = useFetch('https://dojo-blog-madclub.herokuapp.com/blogs')
 
  return (
    <div className="Home">
      {error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}
     {blogs && <BlogList blogs={blogs} title="All Blogs!!" />}
    </div>
  );
};

export default Home;
