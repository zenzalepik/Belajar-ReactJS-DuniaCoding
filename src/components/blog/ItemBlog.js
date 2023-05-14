import { Link } from 'react-router-dom';

const ItemBlog = ({blogs, handleDelete}) => {

    return ( 
        <div>
            {blogs.map((blog, index) => (
                <Link to={'/blogs/' + blog.id} key={blog.id} className='card card-blog p-3 mb-2'>
                    <h3>{blog.title}</h3>
                    <p><i>Posted by: {blog.author}...</i></p>
                    <p>{blog.body.slice(0, 24)}...</p>
                    <button onClick={() => handleDelete(blog.id)} className="btn btn-danger col-2">
                        Delete Blog
                    </button>
                </Link>
            ))}
        </div>
     );
}
 
export default ItemBlog;