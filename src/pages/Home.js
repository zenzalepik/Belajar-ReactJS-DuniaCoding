import useFetch from "../hooks/useFetch";
import ItemBlog from "../components/blog/ItemBlog";


const Home = () => {
    const {
        data_blog: blogs,
        loading,
        error,
      } = useFetch("http://localhost.8000/blogs");
    
      // const handleDelete = (id) => {
      //   const newBlogs = blogs.filter((blog) => blog.id !==id);
      //   setBlogs(newBlogs);
      // };
    
      const handleDelete = () => {
        console.log("Handle Delete");
      };
    return ( 

    <div className="App container m-5">
    <h1 className="text-danger">Halo Dunia</h1>
    {error && <h1 className="text-danger">Terjadi kesalahan saat mengambil data</h1>}
    {loading && <h1 className='text-dark'>Loading...</h1>}
    {blogs && ( <ItemBlog blogs={blogs} handleDelete={handleDelete} />)}
    </div>
     );
}
 
export default Home;