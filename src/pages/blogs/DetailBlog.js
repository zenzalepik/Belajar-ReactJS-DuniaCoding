import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const DetailBlog = () => {
    const {id} = useParams();

    const {
        data_blog: blogs,
        loading,
        error,
    } = useFetch("http://localhost:8000/blogs/" + id);

    return (
        <div className="container mt-5">
            <h1 className="text-danger">Detail Blog ke - {id}</h1>
            {error && <h1 className="text-danger">Terjadi kesalahan saat mengambil data</h1>}
            {loading && <h1 className='text-dark'>Loading...</h1>}
            {blogs && (
                <div>
                    <h1 className="mt-3">{blogs.title}</h1>
                    <p className="text-muted">By {blogs.author}</p>
                    <p>{blogs.body}</p>
                </div>
            )}
        </div>
    );
}

export default DetailBlog;