import { useEffect, useState } from "react"
import Blog from "../Blog/Blog"
import PropTypes from "prop-types"

const Blogs = ({handelBookMark,handelReadTime}) => {
    const [blogs,setBlogs] =useState([]);
    const [loading,setLoading]= useState(true);
    const [error,setError]= useState(null);

    // useEffect(()=>{
    //     fetch('blogs.json')
    //     .then(res => res.json())
    //     .then(data =>setBlogs(data))

    // },[])

    useEffect(()=>{
      const fetchBlogs =async ()=>{
        try {
          const res = await fetch("blogs.json");
          if (!res.ok) throw new Error('Failed to fetch');
            const data = await res.json();
            setBlogs(data);
          
        } catch (err) {
          setError(err.message);
          
        } finally{
          setLoading(false);
        }
      };
      fetchBlogs();

  },[])

  if (loading) return <p>Lading....</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
    <div className="text-slate-500 italic underline">Total Blogs: {blogs.length}</div>
    {
      blogs.map(b =><Blog
      key={b.id}
      blog={b}
      handelBookMark={handelBookMark}
      handelReadTime={handelReadTime}>
      </Blog>)
    }
    </>
  )
}
Blogs.propTypes={
  handelBookMark: PropTypes.func,
  handelReadTime: PropTypes.func,
}

export default Blogs