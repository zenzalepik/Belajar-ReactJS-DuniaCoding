import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data_blog, setDataBlogs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:8000/blogs");
            console.log(response.data);
            setDataBlogs(response.data);
            setLoading(false);
            setError(false);
          } 
          catch (error) {
            console.log(error);
            setLoading(false);
            setError(true);
          }
        };
        
        setTimeout(() => {
          fetchData();
        }, 2000);
      },[url]);

      return{data_blog, loading, error}
}

export default useFetch;